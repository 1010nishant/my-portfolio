import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/nj.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  function goToContact() {
    window.location.hash = '#connect';
  }

  return (
    <Router>
      <Navbar expand="md" className={ scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img className="nj" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#community"
                className={
                  activeLink === "community" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("community")}
              >
                Community
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/1010nishant/" target="_blank" rel="noopener noreferrer" >
                  <img src={navIcon1} alt="Icon" />
                </a>
                <a href="https://www.instagram.com/nishant.jangir.1010/" target="_blank" rel="noopener noreferrer" >
                  <img src={navIcon3} alt="Icon" />
                </a>
                <a href="https://github.com/1010nishant" target="_blank" rel="noopener noreferrer" >
                  <img src={navIcon4} alt="Icon" />
                </a>
              </div>
                <button className="vvd" onClick={goToContact}>
                  <span>Contact me</span>
                </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
