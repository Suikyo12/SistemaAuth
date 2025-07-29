# Perfil de usuario

from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity, get_jwt
from db import mysql

user_bp = Blueprint('user', __name__)

@user_bp.route('/profile', methods=['GET'])
@jwt_required()  # Proteccion de la ruta
def profile():
    user_id = int(get_jwt_identity()) #Id del token#
    #claims adicionales
    claims = get_jwt()
    token_email = claims.get("email")
    
    #Consulta de datos actualizados MYSQL
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT id, name, email FROM users WHERE id = %s", (user_id,))
    user = cursor.fetchone()
    cursor.close()
    
    if not user:
        return jsonify({"message": "Usuario no encontrado"}), 404
    
    return jsonify({
        "message": "Perfil de usuario",
        "user": {
            "id": user[0],
            "name": user[1],
            "email": user[2],
            "email_token": token_email
        }
    }), 200