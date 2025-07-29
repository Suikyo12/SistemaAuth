# auth_routes.py
from flask import Blueprint, request, jsonify
from db import mysql
import bcrypt
from flask_jwt_extended import create_access_token
import datetime

auth_bp = Blueprint('auth', __name__)

# -----------------------
# Registro
# -----------------------
@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"message": "Email y contraseña son requeridos"}), 400

    # Verificar si ya existe
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
    existing_user = cursor.fetchone()
    if existing_user:
        cursor.close()
        return jsonify({"message": "El correo ya está registrado"}), 409

    # Encriptar contraseña
    hashed_pw = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    # Guardar usuario
    cursor.execute("INSERT INTO users (name, email, password) VALUES (%s, %s, %s)",
                   (name, email, hashed_pw))
    mysql.connection.commit()
    cursor.close()

    return jsonify({"message": "Usuario registrado exitosamente"}), 201


# -----------------------
# Login
# -----------------------
@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"message": "Email y contraseña son requeridos"}), 400

    cursor = mysql.connection.cursor()
    cursor.execute("SELECT id, name, email, password FROM users WHERE email = %s", (email,))
    user = cursor.fetchone()
    cursor.close()

    if not user:
        return jsonify({"message": "Usuario no encontrado"}), 404

    user_id, name, user_email, hashed_pw = user

    # Verificar contraseña
    if not bcrypt.checkpw(password.encode('utf-8'), hashed_pw.encode('utf-8')):
        return jsonify({"message": "Contraseña incorrecta"}), 401

    # Generar token JWT con id como identity y email como claim adicional
    expires = datetime.timedelta(hours=1)
    token = create_access_token(
        identity=str(user_id),  # lo guardamos como string
        additional_claims={"email": user_email, "name": name},
        expires_delta=expires
    )

    return jsonify({
        "message": "Login exitoso",
        "token": token,
        "user": {
            "id": str(user_id),
            "name": name,
            "email": user_email
        }
    }), 200
