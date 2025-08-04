# 🖥️ Sistema de Registro de Usuarios - Full Stack  

Este es un proyecto **Full Stack** que implementa un sistema de autenticación y gestión de usuarios.  
Consta de un **Backend en Flask** y un **Frontend en React**, conectados mediante **JWT** para garantizar seguridad y control de accesos.  

El sistema permite a los usuarios **registrarse, iniciar sesión, acceder a su perfil protegido y cerrar sesión de forma segura**.  

---

## 📌 Funcionalidades Principales  

✅ Registro de usuarios con validación.  
✅ Encriptación de contraseñas con **bcrypt**.  
✅ Autenticación mediante **JWT**.  
✅ Inicio de sesión y almacenamiento seguro del token en **localStorage**.  
✅ Rutas protegidas (solo accesibles con sesión válida).  
✅ Perfil de usuario con datos obtenidos desde el backend.  
✅ Cierre de sesión seguro.  
✅ Interfaz moderna, responsiva y con fondos personalizados.  

---

## 🛠️ Tecnologías Utilizadas  

### 🔹 Backend  
- [Python 3.11+](https://www.python.org/)  
- [Flask](https://flask.palletsprojects.com/)  
- [Flask-JWT-Extended](https://flask-jwt-extended.readthedocs.io/)  
- [MySQL](https://www.mysql.com/)  
- [bcrypt](https://pypi.org/project/bcrypt/)  
- [Flask-CORS](https://flask-cors.readthedocs.io/)  

### 🔹 Frontend  
- [React 18](https://react.dev/)  
- [React Router DOM](https://reactrouter.com/en/main)  
- [Axios](https://axios-http.com/)  
- [React Scroll Parallax](https://react-scroll-parallax.damnthat.tv/)  
- [CSS3](https://developer.mozilla.org/es/docs/Web/CSS)  

---

## 📂 Estructura del Proyecto  

```bash
SistemaAuth/
│── backend/                  # API REST con Flask
│   ├── app.py
│   ├── db.py
│   ├── auth_routes.py
│   ├── user_routes.py
│   ├── requirements.txt
│   └── docs/                 # Capturas del backend en ejecución
│
│── frontend/                 # Interfaz con React
│   ├── src/
│   │   ├── assets/           # Imágenes y fondos
│   │   ├── components/       # Navbar, ParallaxSection, ProtectedRoute
│   │   ├── pages/            # Home, Login, Register, Profile
│   │   ├── services/         # api.js
│   │   └── styles/           # globals.css, parallax.css
│   ├── docsfront/            # Capturas de la interfaz funcionando
│   └── package.json
│
└── README.md                 # Este archivo



📌 Autor
Francisco Valencia

Proyecto de portafolio - 2025

Desarrollo Full Stack (React • Flask • SQL)