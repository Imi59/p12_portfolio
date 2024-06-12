import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import "./global.scss";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
