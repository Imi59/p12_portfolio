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
          Bienvenue sur mon portfolio ! Je suis Winandy Christopher, un jeune
          développeur web FrontEnd tout juste diplômé de la formation
          "Intégrateur Web" dispensée par OpenClassRooms. Passionné par la
          création d'expériences utilisateur exceptionnelles, j'ai acquis une
          première expérience dans le développement d'applications web modernes
          et interactives.
          <br />
          <br />
          Mon parcours scolaire m'a permis de travailler sur une variété de
          projets, allant de sites web "simples" à des applications d'entreprise
          bien plus complexes. Je suis constamment à l'affût des dernières
          technologies et tendances de l'industrie pour fournir des solutions
          innovantes à mes clients.
          <br />
          <br />
          En dehors du développement web, mes passions incluent le sport et les
          jeux vidéos. Je trouve aussi toujours du temps pour m'investir dans
          des projets créatifs et stimulants en rapport avec le développement
          Web.
        </p>
      </div>
    </div>
  );
};

export default About;
