from flask import Flask
from flask_restx import Api
from config import DevConfig
from models import Image_Upload, Rental_Property, User
from exts import db
from flask_mail import Mail, Message
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from rental_properties import rental_property_ns
from auth import auth_ns,confirmation_bp
from flask_cors import CORS
from random import *


def create_app(config):
    app = Flask(__name__)
    app.config.from_object(config)

    
    # Configure the mail server
    app.config['MAIL_SERVER'] = 'smtp.gmail.com'
    app.config['MAIL_PORT'] = 465
    app.config['MAIL_USE_TLS'] = False
    app.config['MAIL_USE_SSL'] = True
    app.config['MAIL_USERNAME'] = 'jobootwori@gmail.com'
    app.config['MAIL_PASSWORD'] = 'lpiardtnpdmwigfk'
    app.config['MAIL_DEFAULT_SENDER'] = ('B and B', 'jobootwori@gmail.com')
    
    # Initialize the mail object with the Flask app instance
    mail = Mail(app)

    # Make our app work with frontend
    CORS(app)

    db.init_app(app)

    # Instantiate migrate class
    migrate = Migrate(app, db)

    # Make JWT work with our app
    JWTManager(app)

    api = Api(app, doc='/docs')

    api.add_namespace(rental_property_ns)
    api.add_namespace(auth_ns)

    # Register the confirmation blueprint
    app.register_blueprint(confirmation_bp)

    # Model (serializer)
    @app.shell_context_processor
    def make_shell_context():
        return {
            "db": db,
            "Rental_Property": Rental_Property,
            "User": User,
            "Image_Upload": Image_Upload
        }

    # Basic email sending function to test the configuration
    @app.route('/send-email')
    def send_email():
        msg = Message('Hello', sender='jobootwori@gmail.com', recipients=['jotwori08@gmail.com'])
        msg.body = "Testing Flask-Mail"
        mail.send(msg)
        return "Email sent"

    return app
