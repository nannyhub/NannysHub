"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Nannys
from api.utils import generate_sitemap, APIException


api = Blueprint('api', __name__)


# @api.route('/nannies', methods=['GET'])
# def getNannies():
#     query = Nannys.query.all()
#     for i in query:
#     list(serialize())    

#     response_body = {
#         "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
#     }

#     return jsonify(all_nannies), 200

@api.route('/nannies', methods=['GET'])
def getNannies():
    nannys = Nanny.query.all()
    all_nannys = list(map(lambda x: x.serialize(), nannys))
    return jsonify(all_characters), 200    


@api.route('/hello', methods=['GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200    