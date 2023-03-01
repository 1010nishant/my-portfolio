import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import {ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/chat.png";
import projImg2 from "../assets/img/chat-share.png";
import projImg3 from "../assets/img/setting.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    
    const moonshot = [
        {
            // title: "Moonshot Guide",
            // description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            // title: "Moonshot Guide",
            // description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            // title: "Moonshot Guide",
            // description: "Design & Development",
            imgUrl: projImg3,
        },
        // {
        //     title: "Moonshot Guide",
        //     description: "Design & Development",
        //     imgUrl: projImg4,
        // },
        // {
        //     title: "Moonshot Guide",
        //     description: "Design & Development",
        //     imgUrl: projImg5,
        // },
        // {
        //     title: "Moonshot Guide",
        //     description: "Design & Development",
        //     imgUrl: projImg6,
        // },
    ]
    return (
        <section className="project" id="projects">
        <Container>
            <Row>
            <Col size={12}>
                <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "" : ""}>
                    <h2>Project</h2>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Chat App</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content id="slideInUp" className={isVisible ? "" : ""}>
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
