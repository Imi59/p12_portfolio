import React from "react";
import Button from "../Button/Button";

const Presentation = () => {
  return (
    <div className="presentation">
      <div className="presentation__text">
        <h1>Bienvenue sur mon portfolio !</h1>
        <p>
          Je suis Baqua Imane, développeur web FrontEnd passionné par la
          création d'expériences utilisateur exceptionnelles.
          <br />
          <strong>Mon objectif ?</strong>
          <br />
          Allier ma créativité et mes compétences techniques pour développer des
          applications web innovantes et des sites web Uniques
        </p>
      </div>

      <Button />
    </div>
  );
};

export default Presentation;
