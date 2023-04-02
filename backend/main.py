from flask import Flask
from flask_restx import Api
from config import DevConfig
from models import Image_Upload, Rental_Property, User
from exts import db
from mail_config import Mail
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from rental_properties import rental_property_ns
from auth import auth_ns
from flask_cors import CORS


def create_app(config):
    app=Flask(__name__)
    app.config.from_object(config)

    #MAKE OUR APP TO WORK WITH FRONTEND
    CORS(app)

    db.init_app(app)

    #Instatiante migrate class
    migrate = Migrate(app,db)

    #make jwt to work with our app
    JWTManager(app)

    api=Api(app,doc='/docs')

    api.add_namespace(rental_property_ns)
    api.add_namespace(auth_ns)


    #model (serializer)
    @app.shell_context_processor
    def make_shell_context():
            return {
                "db":db,
                "Rental_Property":Rental_Property,
                "User":User,
                "Image_Upload":Image_Upload
            }

    return app