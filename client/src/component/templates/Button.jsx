import React from "react";
import { Link } from "react-router-dom";

const Button = ({ path, name, color, textColor }) => {
  // Default values for color and textColor
  const backgroundColor = color || "#235391";
  const textColorValue = textColor || "white";

  return (
    <div>
      <Link
        to={path || "#"} // Default path if not provided
        style={{ backgroundColor, color: textColorValue }} // Correct style object
        className="text-xl px-5 py-3 rounded-lg font-semibold"
      >
        {name || "Attempt Test"}
      </Link>
    </div>
  );
};

export default Button;