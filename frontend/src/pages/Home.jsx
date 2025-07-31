//Pagina inicial.

import ParallaxSection from "../components/ParallaxSection";
import spaceimg from "../assets/spacebackground.jpg";
import moonimg from "../assets/fondoconluna.jpg";

export default function Home() {
    return(
        <div>
            <ParallaxSection
                image={spaceimg}
                title="Bienvenido a mi Portafolio"
                subtitle="Sistema de Registro"
            />                
            <ParallaxSection
                image={moonimg}
                title="Tecnologías utilizadas"
                subtitle="React • Flask • MySQL • JWT"
            />
        </div>
    );
}