"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db, Nanny
from api.routes import api
from api.admin import setup_admin
from flask_jwt_extended import JWTManager
from random import shuffle, randint
#from models import Person

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

# Setup the Flask-JWT-Extended extension
app.config["JWT_SECRET_KEY"] = "super-secret"  # Change this!
jwt = JWTManager(app)


# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type = True)
db.init_app(app)

def populate_nannies(db, app):
    first_names = ["John", "Marie", "Rafael", "Hugo", "Marlise", "Linda", "Mark", "Gustavo", "Marjorie", "Rebecca", "Will"]
    last_names = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez"]
    locations = [
        "The White House - 1600 Pennsylvania Avenue, Washington, D.C., USA",
        "The Empire State Building - 350 Fifth Avenue, New York City, NY 10118",
        "Bank of England - Threadneedle St, London, EC2R 8AH",
        "The Gherkin - 30 St Mary Axe, London",
        "4059 Mt Lee Dr. Hollywood, CA 90068",
        "Statue of Liberty, Liberty Island New York, NY 10004",
        "Manager Square, Bethlehem, West Bank",
        "2 Macquarie Street, Sydney",
        "Tour Eiffel Champ de Mars, Paris",
        "11 Wall Street New York, NY",
        "1071 CZ Amsterdam, Netherlands"
    ]
    skills = [
        "Cooking", "Cleaning", "Storytelling", "Dancing", "Singing", "Accounting", "Programming",
        "Handcrafting", "Woodchopping", "Existing", "Spoon bending", "Eating", "Awkward staring",
        "Dog training", "Troublemaking", "Wrestling", "House blessing", "Floating", "Twerking",
        "Skinning", "Skiing", "Alcoholism", "Pole Dancing", "Teaching", "Lecturing", "Smiling",
        "Roleplaying", "Playing", "Acting", "Stealing", "Bodybuilding", "Studying", "Screaming"
    ]

    shuffle(first_names)
    shuffle(last_names)
    shuffle(locations)
    
    with app.app_context():
        db.session.query(Nanny).delete()

        for first_name, last_name, location in zip(first_names, last_names, locations):
            shuffle(skills)
            random_skills = [skills[i] for i in range(randint(2, 10))]
            nanny = Nanny(first_name=first_name, last_name=last_name, age=randint(18,60), skills=", ".join(random_skills),
            experience=randint(0,15), location=location, price=(randint(3, 25) * 5), longitude=0, latitude=0)
            db.session.add(nanny)
    
        db.session.commit()

populate_nannies(db, app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response

# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
