import { useState } from "react";
import { loginUser } from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await loginUser({email, password}); //llamada al backend por las credenciales
            localStorage.setItem('token', res.data.token); // guarda el token en el navegador
            navigate('/profile'); //ir al perfil
        } catch (err) {
            setError(err.response?.data?.message || 'Error desconocido');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            {error && <p style ={{color: 'red'}}>{error}</p>}
            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            /><br/>
            <input 
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
            /><br/>
            <button type="submit">Ingresar</button>
        </form>
    );

}