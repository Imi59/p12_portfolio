import Header from "../../components/Header/Header";
import Presentation from "../../components/Presentation/Presentation";
import Contact from "../../components/Contact/Contact";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";

const Home = () => {
  return (
    <div id="home">
      <Header />
      <Presentation />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
