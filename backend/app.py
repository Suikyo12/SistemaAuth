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
CORS(app) #permitir peticiones desde frontend AGREGAR ALR EADME QUE DEBEN PONER EN .ENV SU LOCALHOST

#configuracion desde .env
app.config['MYSQL_HOST'] = os.getenv('MYSQL_HOST')
app.config['MYSQL_USER'] = os.getenv('MYSQL_USER')
app.config['MYSQL_PASSWORD'] = os.getenv('MYSQL_PASSWORD')
app.config['MYSQL_DB'] = os.getenv('MYSQL_DB')
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')

#CORS DINAMICO
frontend_url= os.getenv("FRONTEND_URL", "*") 
CORS(app, resources={r"/api/*": {"origins": frontend_url}})

#iniciar extensiones
mysql.init_app(app)
jwt = JWTManager(app)

#rutas
app.register_blueprint(auth_bp, url_prefix='/api/auth')
app.register_blueprint(user_bp, url_prefix='/api/user')

#ejecutar servidor

@app.route('/')
def index():
    return {"message": "Flask backend funcionando correctamente 🎉"}
if __name__ == '__main__':
    app.run(debug=True)