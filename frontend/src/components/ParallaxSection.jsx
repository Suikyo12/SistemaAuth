import React, { useEffect } from "react";
import simpleParallax from "simple-parallax-js";
import "../styles/parallax.css";

export default function ParallaxSection({image, title, subtitle}) {
    useEffect(() => {
        const images = document.querySelectorAll(".parallax-img");
        new simpleParallax(images, {
            scale: 1.3,
            delay: 0.4,
            transition: "cubic-bezier(0,0,0,1)",
        });
    }, []);

    return (
        <section className="parallax-section">
            <img src="{image}" alt="background" className="parallax-img" />
            <div className="parallax-overlay">
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </section>
    );
}