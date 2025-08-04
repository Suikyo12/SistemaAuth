import ParallaxSection from "../components/ParallaxSection";
import spaceimg from "../assets/home.jpg";

export default function Home() {
  return (
    <div className="page-home">
      <ParallaxSection
        image={spaceimg}
        title="Bienvenido a mi Portafolio"
        subtitle={
          <>
            <p>Sistema de Registro</p>
            <p style={{ marginTop: '20px' }}>
              Tecnologías utilizadas: React • Flask • MySQL • JWT
            </p>
          </>
        }
      />
    </div>
  );
}
