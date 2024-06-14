import React from "react";
import Button from "../Button/Button";

const Presentation = () => {
  const handleButtonClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="presentation">
      <div className="presentation__text">
        <h1>Bienvenue sur mon portfolio !</h1>
        <p>
          <strong>Développeur web FrontEnd </strong>
          <br />
          Passionnée par la création d'expériences utilisateur exceptionnelles !
          <br />
          <strong>Mon objectif ?</strong>
          <br />
          Allier ma créativité et mes compétences techniques pour développer des
          applications web innovantes et des sites web uniques.
        </p>
      </div>

      {/* Utilisation du bouton avec gestionnaire de clic personnalisé */}
      <Button onClick={handleButtonClick}>Donnez vie à votre projet !</Button>
    </div>
  );
};

export default Presentation;
