from __init__ import db
from __main__ import User, auth, app
from flask import Blueprint, abort, request, jsonify, g, url_for



user_controller = Blueprint('user_controller', __name__)


@auth.verify_password
def verify_password(username_or_token, password):
    # first try to authenticate by token
    user = User.verify_auth_token(username_or_token)
    if not user:
        # try to authenticate with username/password
        user = User.query.filter_by(username=username_or_token).first()
        if not user or not user.verify_password(password):
            return False
    g.user = user
    return True


@app.route('/api/users', methods=['POST'])
def new_user():
    username = request.json.get('username')
    password = request.json.get('password')
    email = request.json.get('email')
    if username is None or password is None:
        abort(400)    # missing arguments
    if User.query.filter_by(username=username).first() is not None:
        abort(400)    # existing user
    user = User(username=username, email=email)
    user.hash_password(password)
    db.session.add(user)
    db.session.commit()
    return (jsonify({'user_id': user.id, 'token': user.generate_auth_token(600).decode('ascii')}), 201,
            {'Location': url_for('get_user', id=user.id, _external=True)})


@app.route('/api/users/signin', methods=['POST'])
@auth.login_required
def get_user():
    username = request.json.get('username')
    user = User.query.filter_by(username = username).first()
    if not user:
        abort(400)
    return jsonify({'user_id': user.id, 'token': user.generate_auth_token(600).decode('ascii')})



