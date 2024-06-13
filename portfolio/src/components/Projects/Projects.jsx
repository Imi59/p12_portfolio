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
    <div
      id="projects"
    >
      <h2 id="projects__title"> Projects</h2>
      <div className="projects__container">
        <Card
          appLink="https://p8-kasa-ogws.vercel.app/Home"
          githubLink="https://github.com/dev-armand/P8-Kasa"
          image={Kasa}
          title="Kasa"
          text="Kasa is rental property app that I created with React and React Router. Thie project contains a carousel and collapse bar component."
          icon1={PhotoCSS}
          icon2={PhotoHTML}
          icon3={PhotoReact}
          icon4={PhotoJavascript}
          icon5={PhotoSASS}
        />
        <Card
          appLink="https://p6-sophie-bluel.vercel.app/"
          githubLink="https://github.com/dev-armand/P6-Sophie-Bluel"
          image={Sophie}
          title="Sophie Bluel"
          text="For her Portfolio I had to create a Login function that handles user input (email and password), sends it to a server-side API for authentication. Once connected she can add or delete a project."
          icon1={PhotoCSS}
          icon2={PhotoHTML}
          icon4={PhotoJavascript}
        />
        <Card
          appLink="https://dev-armand.github.io/P4-ohmyfood/"
          githubLink="https://github.com/dev-armand/P4-ohmyfood"
          image={Ohmyfood}
          title="Ohmyfood"
          text="I had to create a food menu completely responsive for all devices and I started with mobile first. I made a loader and some CSS animations for choosing a menu and the like button."
          icon1={PhotoCSS}
          icon2={PhotoHTML}
        />
      </div>
    </div>
  );
}

export default Projects;
