import { Navigate } from "react-router-dom";

export default function ProtectedRoute({children}) {
    const token = localStorage.getItem("token");

    if (!token) {
        //si no hay token redirige al login
        return <Navigate to= "/login" replace />
    }
    //Si el token existe, se muestra el contenido que estamos protegiendo.
    return children;
}