# Punto de entrada
from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from dotenv import load_dotenv
import os

from db import mysql
from auth_routes import auth_bp
from user_routes import user_bp

load_dotenv()

app = Flask(__name__)
CORS(app) #permitir peticiones desde frontend

#configuracion desde .env
app.config['MYSQL_HOST'] = os.getenv('MYSQL_HOST')
app.config['MYSQL_USER'] = os.getenv('MYSQL_USER')
app.config['MYSQL_PASSWORD'] = os.getenv('MYSQL_PASSWORD')
app.config['MYSQL_DB'] = os.getenv('MYSQL_DB')
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')

#iniciar extensiones
mysql.init_app(app)
jwt = JWTManager(app)

#rutas
app.register_blueprint(auth_bp, url_prefix='/api/auth')
app.register_blueprint(auth_bp, url_prefix='/api/user')

#ejecutar servidor

if __name__ == 'main':
    app.run(debug=True)