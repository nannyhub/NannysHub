"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Nanny, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from werkzeug.security import check_password_hash, generate_password_hash


api = Blueprint('api', __name__)



@api.route('/nannies', methods=['GET'])
def getNannies():
    nannys_list = Nanny.get_all()

    if nannys_list:
        all_nannies = [nanny.serialize()  for nanny in nannys_list]   
        return jsonify(all_nannies), 200

    return jsonify({'error': "No hay canguro"}), 404




##CREATE USER
@api.route("/signup", methods=["POST"])
def create_user():
    body= request.get_json()
    first_name= body.get("First name")
    last_name= body.get("Last name")
    email= body.get("Email")
    password= body.get("Password")
    

    if not (email and password):
        return{"error":"you must fill both your email or password."}, 400

    print(User.query.filter_by(email=email).first())

    if User.query.filter_by(email=email).first() != None:
        return{"error":"this user already exists."}, 409

    new_user = User(email=email, password=generate_password_hash(password))
    db.session.add(new_user)
    db.session.commit()
    return{"msg": "User has been created"}, 200


##Filtering data
@api.route("/search-nannies", methods=["POST"])
def search_nannies():
    location= request.json.get("location")
    price= request.json.get("price")
    experience= request.json.get("experience")
    queries = []
    if location:
        queries.append(Nanny.location == location)
    if price and price!="":
        queries.append(Nanny.price <= int(price))
    if experience and experience!="":
        queries.append(Nanny.experience >= int(experience))
    nannies = Nanny.query.filter(*queries)
    return jsonify({"response":list(map(lambda nanny:nanny.serialize(),nannies))})

    # Create a route to authenticate your users and return JWTs. The
    # create_access_token() function is used to actually generate the JWT.
@api.route("/login", methods=["POST", "GET"])
def login():
    body = request.get_json()
    if body is None:
        return jsonify({"error": "Body is empty or null"}), 400
    email = body['email']
    password = body['password']
    user = User.lookup(email)
    if user and check_password_hash(user.password, password):
        access_token = create_access_token(identity=email)
        return jsonify({'token' : access_token}), 200
    else:
        return {'error': 'user and pass not valid'}, 400

# Protect a route with jwt_required, which will kick out requests
# without a valid JWT present.
@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user_id = get_jwt_identity()
    user = User.filter.get(current_user_id)
    return jsonify({"id": user.id, "email": user.email}), 200
