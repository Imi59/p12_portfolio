import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="about" className="about">
      <Link className="go-back" to="/">
        <i className="fa fa-home"></i>
      </Link>

      <h1>À propos de moi</h1>

      <div className="about__content">
        <p>
          Je suis BAQUA Imane, une jeune développeuse Web FrontEnd.
          <br />
          Formée par OpenClassRooms via leur formation "Intégrateur Web".
          <br />
          Passionnée par le monde du Web, j'ai décidé de changer d'horizons et
          passer de l'Ingénierie Logistique au Développement Web.
          <br />
          Ma formation professionnelle m'a permis de travailler sur une variété
          de projets, allant de sites web "simples" à des applications
          d'entreprise bien plus complexes me permettant d'acquérir de
          nombreuses compétences technologiques que vous pourrez découvrir dans
          les différentes rubriques de mon portfolio.
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default About;
