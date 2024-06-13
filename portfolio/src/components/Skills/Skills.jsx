import PhotoCSS from "../../assets/CSS3_logo_and_wordmark.svg.png";
import PhotoHTML from "../../assets/HTML5_logo_and_wordmark.svg.png";
import PhotoReact from "../../assets/React-icon.svg.png";
import PhotoJavascript from "../../assets/Unofficial_JavaScript_logo_2.svg.png";
import PhotoSASS from "../../assets/2560px-Sass_Logo_Color.svg.png";

function Skills() {
  return (
    <div id="skills" className="skills-section">
      <h1>Mes compétences </h1>
      <h2>
        Utiliser des technologies innovantes pour créer des solutions web
        Uniques !
      </h2>
      <div className="skills-section__container">
        <img
          src={PhotoCSS}
          alt="icon CSS"
          className="skills-section__container__img"
        />
        <img
          src={PhotoHTML}
          alt="icon HTML"
          className="skills-section__container__img"
        />
        <img
          src={PhotoJavascript}
          alt="icon Javascript"
          className="skills-section__container__img"
        />
        <img
          src={PhotoReact}
          alt="icon React"
          className="skills-section__container__img"
        />
        <img
          src={PhotoSASS}
          alt="icon SASS"
          className="skills-section__container__img"
        />
      </div>
      <div className="skills__list">
        <div className="skills__category">
          <h3>Outils</h3>
          <ul>
            <li>
              <i className="fab fa-git-alt"></i> Git & GitHub
            </li>
            <li>
              <i className="fas fa-database"></i> MongoDB
            </li>
            <li>
              <i className="fas fa-cogs"></i> Redux
            </li>
            <li>
              <i className="fas fa-laptop-code"></i> React Developer Tools
            </li>
          </ul>
        </div>
        <div className="skills__category">
          <h3>Design</h3>
          <ul>
            <li>
              <i className="fab fa-figma"></i> Figma
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
