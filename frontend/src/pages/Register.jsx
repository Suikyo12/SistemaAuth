import { useState } from "react";
import axios from "axios";

function Register() {
 //estados para los campos de formulario.
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [message, setMessage] = useState("");

 //Funcion que maneja el envío del formulario.
 const handleRegister = async (e) => {
    e.preventDefault(); //evita que se recargue la página

    try {
        const response = await axios.post("http://localhost:5000/api/auth/register", {
            name,
            email,
            password
        });

        setMessage(response.data.message); //mensaje del backend
    } catch (error) {
        if (error.response) {
            setMessage(error.response.data.message);
        }else {
            setMessage("Error en la conexión con el servidor");
        }
    }
 };

 return(
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px"}}>
        <h2>Registro de Usuario</h2>
        <form onSubmit={handleRegister}>
            <input 
            type="text" 
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
            <br />
            <input 
            type="email"
            placeholder="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            <br />
            <input 
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type="submit">Regístrese</button>
        </form>
        {message && <p>{message}</p>}
    </div>
 );
}

export default Register;