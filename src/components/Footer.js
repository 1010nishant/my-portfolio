import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/nj.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col size={12} sm={6}>
            <img className="nj" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end" target="_blank" rel="noopener noreferrer" >
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/1010nishant/" target="_blank" rel="noopener noreferrer" >
                <img src={navIcon1} alt="Icon"/>
              </a>
              <a href="https://www.instagram.com/nishant.jangir.1010/" target="_blank" rel="noopener noreferrer" >
                <img src={navIcon3} alt="Icon"/>
              </a>
              <a href="https://github.com/1010nishant" target="_blank" rel="noopener noreferrer">
                <img src={navIcon4} alt="Icon"/>
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
   
        </Row>
      </Container>
       </footer>
  )
}