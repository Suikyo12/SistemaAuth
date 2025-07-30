import { useEffect, useState } from "react";
import { getUserProfile } from "../services/api";

export default function Profile() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
      getUserProfile()
      .then(res => setUser(res.data.user))
      .catch(err => setError(err.response?.data?.msg || 'Error cargando perfil'));
    }, []);

    if (error) return <p>{error}</p>;
    if (!user) return <p>Cargando perfil....</p>;

    return (
        <div>
            <h2>Perfil de Usuario</h2>
            <p>Nombre: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>ID: {user.id}</p>
            <p>Email desde token: {user.email_token}</p>
        </div>
    );
}