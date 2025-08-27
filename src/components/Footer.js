import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg"; // LinkedIn
import navIcon2 from "../assets/img/nav-icon2.svg"; // GitHub
import navIcon3 from "../assets/img/nav-icon3.svg"; // LeetCode

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-particles"></div> {/* Animated background */}
      <Container>
        <Row className="align-items-center">
          
          {/* Logo + Tagline */}
          <Col xs={12} md={4} className="footer-left">
            {/* <img src={logo} alt="Logo" className="footer-logo" /> */}
            <p className="footer-tagline">Crafted with 💜 by Dhanshri</p>
          </Col>

          {/* Quick Links */}
          <Col xs={12} md={4} className="footer-center text-center">
            <h5>Quick Links</h5>
            <a href="#home" className="footer-link">Home</a>
            <a href="#skills" className="footer-link">Skills</a>
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#work" className="footer-link">Experience</a>
          </Col>

          {/* Social Icons */}
          <Col xs={12} md={4} className="footer-right text-center text-md-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/dhanshri-yewankar-006473216/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/Dhanshri-134" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a href="https://leetcode.com/your-leetcode-username/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="LeetCode" />
              </a>
            </div>
            <p className="footer-copy">© {new Date().getFullYear()} Dhanshri Yewankar. All Rights Reserved</p>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}
