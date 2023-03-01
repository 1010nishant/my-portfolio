import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
        const handleClick = () => {
          window.location.href = 'https://tawk-messaging-app.netlify.app';
        };
    return (
        <Col sm={6} md={4}>
            <div onClick={handleClick} className="proj-imgbx">
                <img  src={imgUrl} alt=""/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}