"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from werkzeug.security import check_password_hash, generate_password_hash

api = Blueprint('api', __name__)


# @api.route('/hello', methods=['POST', 'GET'])
# def handle_hello():

#     response_body = {
#         "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
#     }

#     return jsonify(response_body), 200


##CREATE USER
    @api.route("/signup", methods=["POST"])
    def create_user():
        email= (request.json.get("email", None))
        password= (request.json.get("password", None))

        password_hash= generate_password_hash(password)
        new_user= email.
        if (email != email)
        return "The email or password do not match", 400 
