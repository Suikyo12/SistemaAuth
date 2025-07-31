import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import { getUserProfile } from "./services/api";
import { useEffect, useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    //Al cargar la app, revisamos si hay token, s hay uno valido se puede aceder al pefil
    const token= localStorage.getItem("token");
    if (token) {
      getUserProfile()
      .then(() => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false));
    }
  }, []);

  return (
   <BrowserRouter>
   <nav style={{margin: "10px" }}>
    <Link to="/login" style={{marginRight: "10px" }}>Iniciar Sesión</Link>
    <Link to= "/register" style={{marginRight: "10px"}}>Registrarse</Link>
    {isAuthenticated &&<Link to= "/profile">Perfil</Link>}
    </nav>
    
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route 
        path="/profile" 
        element={
          <ProtectedRoute> 
            <Profile />
          </ProtectedRoute>
        } 
      />
      <Route path="/" element={<h1>Bienvenido al sistema de Registro.</h1>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;