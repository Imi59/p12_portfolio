import React from "react";

const Button = ({ onClick, href, children, className = "" }) => {
  if (href) {
    return (
      <a href={href} className={`button ${className}`}>
        {children}
      </a>
    );
  }
//
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {children}
    </button>
  );
};

export default Button;
