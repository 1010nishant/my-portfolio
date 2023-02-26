import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1
  //   }
  // };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>
                Skills
              </h2>
              <p>Web Developer</p>
              <p align="center">
                <a href="https://skillicons.dev">
                  <img src="https://skillicons.dev/icons?i=git,bootstrap,cpp,css,html,discord,express,github,js,java,md,materialui,mongodb,nodejs,postman,py,react,redux,tailwind,ts,vscode&theme=dark&perline=9" alt="logo" />
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}
