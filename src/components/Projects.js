import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import {ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    
    const moonshot = [
        {
            title: "Moonshot Guide",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Moonshot Guide",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Moonshot Guide",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Moonshot Guide",
            description: "Design & Development",
            imgUrl: projImg4,
        },
        {
            title: "Moonshot Guide",
            description: "Design & Development",
            imgUrl: projImg5,
        },
        {
            title: "Moonshot Guide",
            description: "Design & Development",
            imgUrl: projImg6,
        },
    ]
    const gestorDescansos = [
        {
            title: "Relax Timer",
            description: "Software for desktop built in PySide 2 QT Designer",
            imgUrl: projImg1,
        },
        {
            title: "Relax Timer",
            description: "Software for desktop built in PySide 2 QT Designer",
            imgUrl: projImg2,
        }
    ]
    return (
        <section className="project" id="projects">
        <Container>
            <Row>
            <Col size={12}>
                <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                    <h2>Projects</h2>
                    <p>Projects WIP.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Alarm System</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">For Desktop</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Others</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                    moonshot.map((project, index) => {
                                        return (
                                        <ProjectCard
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <Row>
                                    {
                                    gestorDescansos.map((project, index) => {
                                        return (
                                        <ProjectCard
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <p>Lorem eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>}
                </TrackVisibility>
            </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt=""></img>
        </section>
    )
}
