######################
# from main import Mail
#####################
from send_email import Mail
from send_email import send_confirmation_email
from mailbox import Message
from random import *
from flask import Flask, jsonify, render_template, request, make_response, url_for
from flask_cors import cross_origin
from flask_restx import Resource, Namespace, fields
from flask import Blueprint, request
from exts import db



from models import Image_Upload, User
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import (
    JWTManager,
    create_access_token,
    create_refresh_token,
    get_jwt_identity,
    jwt_required,
)

confirmation_bp = Blueprint('confirmation_bp', __name__)
auth_ns = Namespace('auth', description="A namespace for authentication")

mail = Mail()

# model (serializer)
signUp_model = auth_ns.model(
    "SignUp",
    {
        "username": fields.String(),
        "email": fields.String(),
        "mobileNumber": fields.String(),
        "password": fields.String()
    }
)

logIn_model = auth_ns.model(
    "LogIn",
    {
        "username": fields.String(),
        "password": fields.String()
    }
)
"""
def send_confirmation_email(new_user, confirmation_url):
    message = Message(Subject='Confirm Your Email', recipients=[new_user.email])
    message.body = f'Click this link to confirm your email: {confirmation_url}'
    try:
        mail.send(message)
        # Add the user to the database
        new_user.save()
        return make_response(jsonify({"message": "Signup successful! Please check your email for a confirmation link."}), 201)
    except Exception as e:
        # If the email was not sent, delete the user from the database
        db.session.delete(new_user)
        db.session.commit()
        return make_response(jsonify({"message": "Failed to send confirmation email. Please try again."}), 500)
"""

@auth_ns.route('/')
class Home(Resource):
    def Home(self):
        return render_template('home.js')

@auth_ns.route('/signup')
class signUp(Resource):
    """sign up user"""
    
    @auth_ns.expect(signUp_model)
    
    def post(self):
        data = request.get_json()

        username = data.get("username")
        db_user = User.query.filter_by(username=username).first()

        if db_user is not None:
            return jsonify({"message": f"User with username {username} already exists"})
        
        # Generate a random confirmation token
        token = str(randint(100000, 999999))

        # Create a new user object with the provided email and password
        new_user = User(
            username=data.get('username'),
            email=data.get('email'),
            mobileNumber=data.get('mobile_number'),
            password=generate_password_hash(data.get('password')),
            confirmation_token=token

        )
        
        # Add the user to the database
        #new_user.save()
        
        # Send a confirmation email to the user
        confirmation_url = url_for('send_email', token=token, _external=True)
        send_confirmation_email(new_user, confirmation_url)

        """
        def send_mail(self):
            message = Message(Subject='Confirm Your Email', recipients=[new_user.email])
            message.body = f'Click this link to confirm your email: {confirmation_url}'
            try:
                mail.send(message)
                # Add the user to the database
                new_user.save()
                return make_response(jsonify({"message": "Signup successful! Please check your email for a confirmation link."}), 201)
            except Exception as e:
                # If the email was not sent, delete the user from the database
                db.session.delete(new_user)
                db.session.commit()
                return make_response(jsonify({"message": "Failed to send confirmation email. Please try again."}), 500)
            

        
        message = Message()
        #message.add_header('subject', 'Confirm Your Email')
        
        message['To'] = data.get('email')
        #message = Message(subject='Confirm Your Email', recipients=[data.get('email')])
        #message.add_recipient(data.get('email'))
        message.set_payload(f'Click this link to confirm your email: {confirmation_url}')
        #message = Message(subject='Confirm Your Email', recipients=[data.get('email')])
        #message.body = f'Click this link to confirm your email: {confirmation_url}'
        mail.send(message)
        
        return make_response(jsonify({"message": "Signup successful! Please check your email for a confirmation link."}), 201)
    
    @confirmation_bp.route('/confirm_email/<token>', methods=['GET'])
    def confirm_email(token):
        user = User.query.filter_by(confirmation_token=token).first()

        if user is None:
            return jsonify({'message': 'Invalid or expired token'})
        
        # Update the user's email confirmation status
        user.confirmed_email = True
        user.save()
        
        return jsonify({'message': 'Your email has been confirmed successfully!'})
"""
"""
@auth_ns.route('/verify', methods=['POST'])
def verify():
    otp=randint(000000,999999)
    email=request.form['email']
    msg=Message(subject='OTP',sender='ashishprashar37@gmail.com',recipients=[email])
    msg.body=str(otp)
    Mail.send(msg)
    
    return make_response(jsonify({'message': 'OTPhas been emailed successfully!'}), 201)
    """

@auth_ns.route('/image_upload')
class uploadImage(Resource):
    """Upload Rental images"""

    @auth_ns.expect(Image_Upload)
    def post(self):

        filename = request.files['filename']
        image = request.files['image'].read()
        new_image = Image_Upload(filename=filename, image=image)
        new_image.save()
        return make_response(jsonify({'message': 'Image uploaded successfully!'}), 201)


@auth_ns.route('/login')
class logIn(Resource):
    """Log in as user"""

    @auth_ns.expect(logIn_model)
    def post(self):
        data = request.get_json()

        username = data.get("username")
        password = data.get("password")

        db_user = User.query.filter_by(username=username).first()

        if db_user and check_password_hash(db_user.password, password):
            access_token = create_access_token(identity=db_user.username)
            refresh_token = create_refresh_token(identity=db_user.username)

            response_object = {
                'access_token': access_token,
                'refresh_token': refresh_token
            }
            status_code = 201
        else:
            response_object = {
                'message': 'Invalid credentials'
            }
            status_code = 401

        return make_response(jsonify(response_object), status_code)
        """
        return make_response(jsonify(
            {"access_token": access_token, "refresh_token": refresh_token}, 201)
        )
        """


@auth_ns.route('/refresh')
class RefreshResource(Resource):
    @jwt_required(refresh=True)
    def post(self):

        current_user = get_jwt_identity()

        new_access_token = create_access_token(identity=current_user)

        return make_response(jsonify({"access_token": new_access_token}), 200)
