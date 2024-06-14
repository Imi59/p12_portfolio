import Header from "../../components/Header/Header";
import Presentation from "../../components/Presentation/Presentation";
import Contact from "../../components/Contact/Contact";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div id="home">
      <Header />
      <Presentation />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
