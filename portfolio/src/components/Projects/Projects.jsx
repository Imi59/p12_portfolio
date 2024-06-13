import Kasa from "../../assets/projects/kasa.p8.webp";
import Sophie from "../../assets/projects/sophiebluel.p6.webp";
import Ohmyfood from "../../assets/projects/ohmyfood.p4.webp";
import Card from "../Card/Card";
import PhotoCSS from "../../assets/CSS3_logo_and_wordmark.svg.png";
import PhotoHTML from "../../assets/HTML5_logo_and_wordmark.svg.png";
import PhotoReact from "../../assets/React-icon.svg.png";
import PhotoJavascript from "../../assets/Unofficial_JavaScript_logo_2.svg.png";
import PhotoSASS from "../../assets/2560px-Sass_Logo_Color.svg.png";

function Projects() {
  return (
    <div id="projects" className="projects">
      <h1> Mes projets</h1>
      <div className="projects__container">
        <Card
          appLink="https://p8-kasa-ogws.vercel.app/Home"
          githubLink="https://github.com/dev-armand/P8-Kasa"
          image={Kasa}
          title="Kasa"
          texts={[
            " Intégration des maquettes fournies",
            "Dévellopement de la fonctionnalité de recherche d'appartements",
            "Organisation du style de manière efficace",
            "Dévellopement interactif et optimal",
            "Mise en place et gestion du Back-end via API pour utiliser les données de l'application",
          ]}
          icon1={PhotoCSS}
          icon2={PhotoHTML}
          icon3={PhotoReact}
          icon4={PhotoJavascript}
          icon5={PhotoSASS}
        />
        <Card
          appLink="https://imi59.github.io/P10_Debuggez_le_site_d_une_agence_d_evenementiel/"
          githubLink="https://github.com/Imi59/P10_Debuggez_le_site_d_une_agence_d_evenementiel.git"
          image={Sophie}
          title="Sophie Bluel"
          texts={[
            " Intégration des maquettes fournies",
            "Dévellopement de la fonctionnalité de recherche d'appartements",
            "Organisation du style de manière efficace",
            "Dévellopement interactif et optimal",
            "Mise en place et gestion du Back-end via API pour utiliser les données de l'application",
          ]}
          icon1={PhotoCSS}
          icon2={PhotoHTML}
          icon4={PhotoJavascript}
        />
        <Card
          appLink="https://dev-armand.github.io/P4-ohmyfood/"
          githubLink="https://github.com/dev-armand/P4-ohmyfood"
          image={Ohmyfood}
          title="Ohmyfood"
          texts={[
            " Intégration des maquettes fournies",
            "Dévellopement de la fonctionnalité de recherche d'appartements",
            "Organisation du style de manière efficace",
            "Dévellopement interactif et optimal",
            "Mise en place et gestion du Back-end via API pour utiliser les données de l'application",
          ]}
          icon1={PhotoCSS}
          icon2={PhotoHTML}
        />
        <Card
          appLink="https://dev-armand.github.io/P4-ohmyfood/"
          githubLink="https://github.com/dev-armand/P4-ohmyfood"
          image={Ohmyfood}
          title="Ohmyfood"
          texts={[
            " Intégration des maquettes fournies",
            "Dévellopement de la fonctionnalité de recherche d'appartements",
            "Organisation du style de manière efficace",
            "Dévellopement interactif et optimal",
            "Mise en place et gestion du Back-end via API pour utiliser les données de l'application",
          ]}
          icon1={PhotoCSS}
          icon2={PhotoHTML}
        />
        <Card
          appLink="https://dev-armand.github.io/P4-ohmyfood/"
          githubLink="https://github.com/dev-armand/P4-ohmyfood"
          image={Ohmyfood}
          title="Ohmyfood"
          texts={[
            " Intégration des maquettes fournies",
            "Dévellopement de la fonctionnalité de recherche d'appartements",
            "Organisation du style de manière efficace",
            "Dévellopement interactif et optimal",
            "Mise en place et gestion du Back-end via API pour utiliser les données de l'application",
          ]}
          icon1={PhotoCSS}
          icon2={PhotoHTML}
        />
        <Card
          appLink="https://dev-armand.github.io/P4-ohmyfood/"
          githubLink="https://github.com/dev-armand/P4-ohmyfood"
          image={Ohmyfood}
          title="Ohmyfood"
          texts={[
            " Intégration des maquettes fournies",
            "Dévellopement de la fonctionnalité de recherche d'appartements",
            "Organisation du style de manière efficace",
            "Dévellopement interactif et optimal",
            "Mise en place et gestion du Back-end via API pour utiliser les données de l'application",
          ]}
          icon1={PhotoCSS}
          icon2={PhotoHTML}
        />
      </div>
    </div>
  );
}

export default Projects;
