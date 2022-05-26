import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Company from "./components/pages/Company";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import NewProject from "./components/pages/NewProject";
//==========
//Layout
import Container from "./components/Layout/Container";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
//===========

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/newProjects" element={<NewProject />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
