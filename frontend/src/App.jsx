import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax"; 
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
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
    <ParallaxProvider>
    <BrowserRouter>
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      
      <Routes>
        <Route path="/home" element={<Home />} />
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
        {/* Redirección de raíz a home */}
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;