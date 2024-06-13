import React from "react";


const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}>
          X
        </button>
        <h2>{title}</h2>
        <ul>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
