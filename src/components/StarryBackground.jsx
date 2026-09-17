"use client";

import { useEffect, useState } from "react";

const STAR_COUNT = 160;
const SHOOTING_STAR_COUNT = 20;

function generateStars(count) {
  return Array.from({ length: count }, (_, index) => ({
    id: index,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    opacity: Math.random() * 0.7 + 0.2,
    duration: Math.random() * 4 + 2,
    delay: Math.random() * 5,
    layer: Math.floor(Math.random() * 3) + 1,
  }));
}

function generateShootingStars(count) {
  return Array.from({ length: count }, (_, index) => ({
    id: index,
    left: Math.random() * 120 - 10,
    top: Math.random() * 100,
    delay: Math.random() * 15,
    duration: Math.random() * 6 + 12,
    size: Math.random() * 80 + 80,
  }));
}

export default function StarryBackground({ children }) {
  const [stars] = useState(() => generateStars(STAR_COUNT));

  const [shootingStars] = useState(() =>
    generateShootingStars(SHOOTING_STAR_COUNT)
  );

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // ...


  return (
    <div className="starry-background">
      {/* Nebula */}
      <div className="starry-nebula starry-nebula-one" />
      <div className="starry-nebula starry-nebula-two" />

      {/* Stars */}
      <div className="star-field" aria-hidden="true">
        {stars.map((star) => (
          <span
            key={star.id}
            className={`star star-layer-${star.layer}`}
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
              transform: `translate(
                ${mouse.x * star.layer * 2}px,
                ${mouse.y * star.layer * 2}px
              )`,
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      <div className="shooting-stars" aria-hidden="true">
        {shootingStars.map((star) => (
          <span
            key={star.id}
            className="shooting-star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="starry-content">{children}</div>
    </div>
  );
}
