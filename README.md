# 🚀 CRUD con Flask + MySQL + JWT

Este proyecto es una **API RESTful** desarrollada con **Flask**, conectada a **MySQL**, 
con sistema de autenticación mediante **JSON Web Tokens (JWT)** y gestión segura de contraseñas con **bcrypt**.

## 📌 Características

- Registro de usuarios con validación de correo único.
- Encriptación de contraseñas (bcrypt).
- Autenticación mediante JWT.
- Rutas protegidas (solo accesibles con token válido).
- Arquitectura modular con Blueprints.
- Variables de entorno (.env) para credenciales seguras.

## 🛠️ Tecnologías Usadas

- [Python 3.11+](https://www.python.org/)
- [Flask](https://flask.palletsprojects.com/)
- [Flask-JWT-Extended](https://flask-jwt-extended.readthedocs.io/)
- [MySQL](https://www.mysql.com/)
- [bcrypt](https://pypi.org/project/bcrypt/)
- [python-dotenv](https://pypi.org/project/python-dotenv/)
- [Flask-CORS](https://flask-cors.readthedocs.io/)

## 📂 Estructura del Proyecto

backend/
│── app.py # Punto de entrada
│── db.py # Configuración de la base de datos
│── auth_routes.py # Registro y login
│── user_routes.py # Perfil de usuario (rutas protegidas)
│── .env # Variables de entorno
│── requirements.txt # Dependencias del proyecto

## ⚙️ Instalación y Uso

1. Clona el repositorio:

```bash
git clone https://github.com/Suikyo12/SistemaAuth.git
cd cruda-flask/backend

2. Crea y activa un entorno virtual:

```bash
python -m venv venv
source venv/bin/activate   # Linux/Mac
venv\Scripts\activate      # Windows

3. Instala dependencias:

```bash
pip install -r requirements.txt

4. Configura .env:

```bash
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=tu_password
MYSQL_DB=cruda_db
JWT_SECRET_KEY=clave_super_secreta

5. Ejecuta el servidor:

```bash
python app.py


![Servidor corriendo](docs/flask_running.png)
![Registro exitoso](docs/register.png)
![Login con token](docs/login.png)
![Perfil protegido](docs/profile.png)
