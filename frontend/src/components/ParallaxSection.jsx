import { ParallaxBanner } from "react-scroll-parallax";
import "../styles/parallax.css";

export default function ParallaxSection({ image, title, subtitle }) {
  return (
    <ParallaxBanner
      layers={[{ image: image, speed: -10 }]}
      className="parallax-section"
    >
      <div className="parallax-overlay">
        <div className="parallax-card">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </ParallaxBanner>
  );
}
