import React from "react";
import { Link } from "react-router-dom";

const Button = ({ path, name, color, textColor, textSize, onClick }) => {
  const backgroundColor = color || "#235391";
  const textColorValue = textColor || "white";
  const fontSize = textSize ? `${textSize}px` : "16px";

  if (onClick) {
    return (
      <button
        onClick={onClick}
        style={{ backgroundColor, color: textColorValue, fontSize }}
        className="px-5 py-3 rounded-lg font-semibold"
      >
        {name || "Attempt Test"}
      </button>
    );
  }

  return (
    <Link
      to={path || "#"}
      style={{ backgroundColor, color: textColorValue, fontSize }}
      className="px-5 py-3 rounded-lg font-semibold"
    >
      {name || "Attempt Test"}
    </Link>
  );
};

export default Button;
