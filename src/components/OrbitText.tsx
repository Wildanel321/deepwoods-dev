import React, { useEffect, useRef } from "react";

interface OrbitTextProps {
  words?: string[];
  radius?: number;
  speed?: number;
}

const OrbitText: React.FC<OrbitTextProps> = ({
  words = ["WELCOME", "ADMIN GANTENG", "DEVELOPER", "FOREST WEB"],
  radius = 120,
  speed = 0.02,
}) => {
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const items = Array.from(wrap.children) as HTMLDivElement[];

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let centerX = mouseX;
    let centerY = mouseY;
    let baseAngle = 0;

    const EASE = 0.15;

    // TRACK MOUSE
    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMove);

    const animate = () => {
      centerX += (mouseX - centerX) * EASE;
      centerY += (mouseY - centerY) * EASE;

      baseAngle += speed;
      const n = items.length;

      items.forEach((el, i) => {
        const angle = (i / n) * Math.PI * 2 + baseAngle;

        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        const rot = angle * (180 / Math.PI) + 90;

        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        el.style.transform = `translate(-50%, -50%) rotate(${rot}deg)`;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, [radius, speed]);

  return (
    <div
      ref={wrapRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      {words.map((w, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            color: "white",
            fontWeight: "bold",
            fontSize: "18px",
            textShadow: "0 0 8px #00ffcc",
            userSelect: "none",
          }}
        >
          {w}
        </div>
      ))}
    </div>
  );
};

export default OrbitText;