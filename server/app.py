#!/usr/bin/env python
import os
from flask import Flask, abort, request, jsonify, g, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_httpauth import HTTPBasicAuth



# initialization
app = Flask(__name__)
app.config['SECRET_KEY'] = 'The super secret key CHANGE IN PRODUCTION'
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://username:password@localhost:5434/database'
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True


auth = HTTPBasicAuth()

from __init__ import db

# models
from models.user import User


# controllers
from controllers.user_controller import user_controller


# routes
app.register_blueprint(user_controller)


@app.route('/api/resource')
@auth.login_required
def get_resource():
    return jsonify({'data': 'Hello, %s!' % g.user.username})


if __name__ == '__main__':
    db.create_all()    
    app.run(host='0.0.0.0', debug=True)