import "./styles.css";
import React from "react";

const FloatingBalls = () => {
  return (
    <div className="floating-balls">
      <div className="ball top-left"></div>
      <div className="ball top-right"></div>
      <div className="ball bottom-left"></div>
      <div className="ball bottom-right"></div>
    </div>
  );
};

export default FloatingBalls;
