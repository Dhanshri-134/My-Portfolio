import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/p11.png";
import projImg2 from "../assets/img/project-img2.png";
import Intern2 from "../assets/img/p13.png";
import projImg4 from "../assets/img/p14.png";
import projImg5 from "../assets/img/p15.png";
import Intern1 from "../assets/img/p21.png";
import projImg31 from "../assets/img/p31.png";
import projImg32 from "../assets/img/p32.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Work = () => {

  const work = [
    {
      title: "Web Developer",
      description: "Dhrumi Technologies",
      contact:"info@dhrumi.com",
      imgUrl: Intern1,
    },
    {
      title: "Full Stack Developer",
      description: "Web Stack Academy",
      contact:"www.webstackacademy.com",
      imgUrl: Intern2,
    },
    {
      title: "Software Development Engineer",
      description: "Bluestock Fintech",
      contact:"www.bluestock.in",
      imgUrl: Intern2,
    }
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Work Experience</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Development</Nav.Link>
                    </Nav.Item>
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          work.map((work, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...work}
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}