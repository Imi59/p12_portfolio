import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const handleGoBack = () => {
    // Redirection vers la page d'accueil lorsque la "maison" est cliquée
    window.location.href = "/";
  };

  return (
    <div id="about" className="about">
      <Link to="/" className="go-back" onClick={handleGoBack}>
        <i className="fa fa-home"></i>
      </Link>

      <h1>À propos de moi</h1>

      <div className="about__content">
        <p>
          Je suis BAQUA Imane, une jeune développeuse Web FrontEnd en cours de
          formation "Intégrateur Web" dispensée par OpenClassRooms. Passionnée
          par le monde du Web, j'ai décidé de changer d'horizons et passer de
          l'Ingénierie Logistique au Dévellopement Web
          <br />
          <br />
          Ma formation professionelle d'OC m'a permis de travailler sur une
          variété de projets, allant de sites web "simples" à des applications
          d'entreprise bien plus complexes me permettant d'acquérir de
          nombreuses compétences téchnologiques que vous pourrez découvrir dans
          les différentes rubriques de mon portfolio.
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default About;
