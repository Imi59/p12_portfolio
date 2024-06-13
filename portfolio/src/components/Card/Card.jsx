import GitHub from "../../assets/github-mark-white.png";

function Card({
  appLink,
  githubLink,
  image,
  title,
  text,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
}) {
  return (
    <div className="projects__link">
      <div className="projects__left-section">
        <a href={appLink} target="_blank" rel="noopener noreferrer">
          <img src={image} alt="img" className="projects__left-section__img" />
        </a>
        <h3>{title}</h3>
        <p>{text}</p>
        <div className="stack-section__container">
          {icon1 && (
            <img
              src={icon1}
              alt="icon CSS"
              className="stack-section__container__img"
            />
          )}
          {icon2 && (
            <img
              src={icon2}
              alt="icon HTML"
              className="stack-section__container__img"
            />
          )}
          {icon3 && (
            <img
              src={icon3}
              alt="icon Javascript"
              className="stack-section__container__img"
            />
          )}
          {icon4 && (
            <img
              src={icon4}
              alt="icon React"
              className="stack-section__container__img"
            />
          )}
          {icon5 && (
            <img
              src={icon5}
              alt="icon SASS"
              className="stack-section__container__img"
            />
          )}
        </div>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <img src={GitHub} alt="icon github" className="gitHub" />
        </a>
      </div>
    </div>
  );
}

export default Card;
