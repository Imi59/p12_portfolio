import React, { useState } from "react";
import Kasa from "../../assets/projects/kasa.p8.webp";
import Sophie from "../../assets/projects/sophiebluel.p6.webp";
import Ohmyfood from "../../assets/projects/ohmyfood.p4.webp";
import Booki from "../../assets/projects/booki.p3.webp";
import ArgentBank from "../../assets/projects/argentbank.p11.webp";
import Events from "../../assets/projects/724events.p10.webp";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";
import PhotoCSS from "../../assets/CSS3_logo_and_wordmark.svg.webp";
import PhotoHTML from "../../assets/HTML5_logo_and_wordmark.svg.webp";
import PhotoReact from "../../assets/React-icon.svg.webp";
import PhotoJavascript from "../../assets/Unofficial_JavaScript_logo_2.svg.webp";
import PhotoSASS from "../../assets/2560px-Sass_Logo_Color.svg.webp";

function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState([]);
  const [modalTitle, setModalTitle] = useState("");

  const handleCardClick = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent([]);
    setModalTitle("");
  };

  return (
    <div id="projects" className="projects">
      <h1>Mes projets</h1>
      <div className="projects__container">
        <Card
          githubLink="https://github.com/Imi59/Projet_8_Creez_une_application_web_de_location_immobiliere_avec_React.git"
          image={Kasa}
          title="Kasa"
          icon1={PhotoCSS}
          icon2={PhotoHTML}
          icon3={PhotoReact}
          icon4={PhotoJavascript}
          icon5={PhotoSASS}
          onClick={() =>
            handleCardClick("Kasa", [
              "Intégration des maquettes fournies",
              "Développement de la fonctionnalité de recherche d'appartements",
              "Organisation du style de manière efficace",
              "Développement interactif et optimal",
              "Mise en place et gestion du Back-end via API pour utiliser les données de l'application",
            ])
          }
        />
        <Card
          githubLink="https://github.com/Imi59/P10_Debuggez_le_site_d_une_agence_d_evenementiel.git"
          image={Sophie}
          title="Sophie Bluel"
          icon1={PhotoCSS}
          icon2={PhotoHTML}
          icon4={PhotoJavascript}
          onClick={() =>
            handleCardClick("Sophie Bluel", [
              "Correction des bugs",
              "Optimisation des performances",
              "Amélioration de l'expérience utilisateur",
            ])
          }
        />
        <Card
          githubLink="https://github.com/Imi59/ameliorer-l-interface-d-un-site-mobile-avec-des-animations-css.git"
          image={Ohmyfood}
          title="Ohmyfood"
          icon1={PhotoCSS}
          icon2={PhotoHTML}
          onClick={() =>
            handleCardClick("Ohmyfood", [
              "Intégration de maquettes fournies",
              "Animation des éléments",
              "Optimisation des performances de chargement",
            ])
          }
        />
        <Card
          githubLink="https://github.com/Imi59/Cr-ez-une-page-web-dynamique-avec-JavaScript.git"
          image={Booki}
          title="Booki"
          icon1={PhotoCSS}
          icon2={PhotoHTML}
          onClick={() =>
            handleCardClick("Booki", [
              "Intégration de maquettes fournies",
              "Dévellopement responsive",
            ])
          }
        />
        <Card
          githubLink="https://github.com/Imi59/Implementez_le_frontend_d_une_application_bancaire_avec_React.git"
          image={ArgentBank}
          title="ArgentBank"
          icon1={PhotoCSS}
          icon2={PhotoHTML}
          icon3={PhotoReact}
          icon4={PhotoJavascript}
          icon5={PhotoSASS}
          onClick={() =>
            handleCardClick("ArgentBank", [
              "Intégration des maquettes fournies en REACT",
              "Dévellopement de l'application web avec authentification des utilisateurs",
              "Gestion du Back-end via API",
              "Utilisation d'une base de données MongoDB pour la gestion des données",
              "Création de nouvelles routes API",
            ])
          }
        />
        <Card
          githubLink="https://github.com/Imi59/P10_Debuggez_le_site_d_une_agence_d_evenementiel.git"
          image={Events}
          title="724events"
          icon1={PhotoCSS}
          icon2={PhotoHTML}
          icon3={PhotoReact}
          icon4={PhotoJavascript}
          icon5={PhotoSASS}
          onClick={() =>
            handleCardClick("724events", [
              "Analyse approfondie du code existant",
              "Identification et correction des bugs",
              "Apporter les solutions efficaces pour assurer la stabilité et la performance du site",
              "Rédaction d'un cahier de recette afin de documenter toutes les fonctionnalités du site et de garantir un fonctionnement sans faille.",
            ])
          }
        />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalTitle}
        content={modalContent}
      />
    </div>
  );
}

export default Projects;
