import React from "react";
import logo from "../../../assets/images/logo.jpg";

export default function LogoButton() {
  const handleClick = () => {
    window.location.href = "/";
  };

  const hoverStyle = {
    cursor: "pointer",
  };
  return (
    <div>
      <img
        className="border-4 border-white"
        src={logo}
        alt="logo"
        onClick={handleClick}
        width="150"
        height="150"
        style={hoverStyle}
      ></img>
    </div>
  );
}
