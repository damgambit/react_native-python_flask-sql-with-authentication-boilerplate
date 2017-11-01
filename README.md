# react_native-python_flask-sql-with-authentication-boilerplate
There are 2 apps in this repository: the backend micro service and the frontend client. The backend is managed by python and flask + any SQL DB. The frontend is built with react-native. There is already implemented the auth service in both sides. 
There are 2 main pages in a StackNavigator: Login and Register. The state of app is managed by Redux and after a successful login there is a TabNavigator template ready to be filled.

# Setup
### Prerequisites
- Python >= 2.7
- npm
- React-Native

### What to do
```
git clone https://github.com/damgambit/react_native-python_flask-sql-with-authentication-boilerplate
cd react_native-python_flask-sql-with-authentication-boilerplate
pip install -r ./server/requirements.txt
npm install ./client
``

# Backend
## Configuration
- DB connection string in /server/app.py
- Secret_key in /server/app.py
- Host:port in /server/app.py

## Start
```
python app.py
```

## API
| EndPoint                 | Auth&Data                                           | Response                |
|--------------------------|:---------------------------------------------------:|------------------------:|
| [POST] /api/users        | data: {username: "", password: ""}                  | {user_id: "", token: ""}|
| [POST] /api/users/signin | basicauth: {username: "", password: ""} username:"" | {user_id: "", token: ""}|
| [GET] /api/resource      | auth: {token: ""}								     | "Hello User"            |


# Frontend
## Configuration
- API endpoints in /api/index.js

## Start
```
npm start
or
react-native run-ios
or
react-native run-android
```


