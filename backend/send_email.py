from flask_mail import Message, Mail
from flask import current_app, render_template
from threading import Thread

mail = Mail()

def send_async_email(app, msg):
    with app.app_context():
        mail.send(msg)

def send_confirmation_email(new_user, confirmation_url):
    app = current_app._get_current_object()
    message = Message(subject='Confirm Your Email', recipients=[new_user.email])
    message.body = render_template('confirmation_email.html', user=new_user, confirmation_url=confirmation_url)
    Thread(target=send_async_email, args=(app, message)).start()
