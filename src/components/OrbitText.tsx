import React, { useEffect, useRef } from "react";

interface OrbitCircleTextProps {
  text?: string;
  size?: number;
  letterSpacing?: number;
  diameter?: number;
  rotation?: number;
  speed?: number;
  color?: string;
}

const OrbitCircleText: React.FC<OrbitCircleTextProps> = ({
  text = "Welcome To My Blog",
  size = 24,
  letterSpacing = 5,
  diameter = 10,
  rotation = 0.4,
  speed = 0.3,
  color = "#4679BD",
}) => {
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const msg = text.split("");
    const n = msg.length - 1;
    const a = Math.round(size * diameter * 0.208333);

    let currStep = 20;
    let ymouse = a * 0.75 + 20;
    let xmouse = a * 2 + 20;

    const y: number[] = [];
    const x: number[] = [];
    const Y: number[] = [];
    const X: number[] = [];

    const chars: HTMLDivElement[] = [];

    // create letters
    msg.forEach((letter, i) => {
      const div = document.createElement("div");
      div.style.position = "absolute";
      div.style.height = `${a}px`;
      div.style.width = `${a}px`;
      div.style.textAlign = "center";
      div.style.fontSize = `${size}px`;
      div.style.fontWeight = "bold";
      div.style.fontFamily = "Comic Sans MS, Arial";
      div.style.color = color;
      div.innerText = letter;

      wrap.appendChild(div);
      chars.push(div);

      y[i] = x[i] = Y[i] = X[i] = 0;
    });

    // mouse tracker
    const mouseMove = (e: MouseEvent) => {
      xmouse = e.clientX;
      ymouse = e.clientY;
    };

    window.addEventListener("mousemove", mouseMove);

    const makeCircle = () => {
      currStep -= rotation;

      for (let i = n; i >= 0; i--) {
        chars[i].style.top =
          Math.round(y[i] + a * Math.sin((currStep + i) / letterSpacing) * 0.75 - 15) + "px";

        chars[i].style.left =
          Math.round(x[i] + a * Math.cos((currStep + i) / letterSpacing) * 2) + "px";
      }
    };

    const drag = () => {
      y[0] = Y[0] += (ymouse - Y[0]) * speed;
      x[0] = X[0] += (xmouse - X[0]) * speed;

      for (let i = n; i > 0; i--) {
        y[i] = Y[i] += (y[i - 1] - Y[i]) * speed;
        x[i] = X[i] += (x[i - 1] - X[i]) * speed;
      }

      makeCircle();
      requestAnimationFrame(drag);
    };

    drag();

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      chars.forEach((el) => el.remove());
    };
  }, [text, size, letterSpacing, diameter, rotation, speed, color]);

  return (
    <div
      ref={wrapRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 3000,
      }}
    />
  );
};

export default OrbitCircleText;