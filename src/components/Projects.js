import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/p11.png";
// import projImg2 from "../assets/img/p12.png";
import projImg3 from "../assets/img/p13.png";
import projImg4 from "../assets/img/p14.png";
import projImg5 from "../assets/img/p15.png";
import projImg6 from "../assets/img/p16.png";
import projImg21 from "../assets/img/p21.png";
import projImg31 from "../assets/img/p31.png";
import projImg32 from "../assets/img/p32.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Foodie Zone",
      description: "Food Ordering And Restaurant Booking System Using Django",
      imgUrl: projImg1,
    },
    {
      title: "Craft Fusion",
      description: "Ecommerce Shopping Website developed using SpringBoot Framework",
      imgUrl: projImg1,
    },
    {
      title: "Food Delivery App",
      description: "Food Ordering and Product Tracking System Using MERN Stack",
      imgUrl: projImg3,
    },
    {
      title: "Virtual Contact Management System",
      description: "Contact Management Website Developed using Django",
      imgUrl: projImg4,
    },
    {
      title: "Youtube Clone",
      description: "Personal Youtube Application Using Django",
      imgUrl: projImg5
    },
    {
      title: "Employee Management System",
      description: "Developed Using Django",
      imgUrl: projImg6,
    },
  ];

  const projects2 = [
    {
      title: "Online Banking System",
      description: "Developed Using Java",
      imgUrl: projImg21,
    },
    {
      title: "Advance Java Manual",
      description: "Developed Using Java",
      imgUrl: projImg3,
    },
    {
      title: "E-Ballot System",
      description: "Developed Using Java",
      imgUrl: projImg3,
    }
  ];

  const projects3 = [
    {
      title: "Movie Recommendation System",
      imgUrl: projImg31,
    },
    {
      title: "Post Generator - AI Writer",
      imgUrl: projImg32,
    },
    {
      title: "Real-Estate Price Prediction",
      imgUrl: projImg3,
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
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Standalone Application</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">AI-ML Based</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
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
                          projects2.map((project, index) => {
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
                    <Row>
                        {
                          projects3.map((project, index) => {
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}