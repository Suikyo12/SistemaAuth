# Perfil de usuario

from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

user_bp = Blueprint('user', __name__)

@user_bp.route('/profile', methods=['GET'])
@jwt_required()  # <- Esta línea protege la ruta
def profile():
    current_user = get_jwt_identity()  # obtiene los datos guardados en el token
    return jsonify({
        "message": "Perfil de usuario",
        "user": current_user
    }), 200
