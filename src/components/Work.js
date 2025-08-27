import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import '../App.css';

export const Work = () => {
  const work = [
    {
      title: 'Intern for Software Developer and Team Lead',
      company: 'Shris Tech',
      period: '01/08/2025 – Present',
      mode: 'Hybrid',
      description: [
        'Currently contributing to the development and maintenance of a Food Delivery System (Android & Web) using Flutter, Firebase & React.',
        'Designed and implemented features across Admin Panel, Customer, Delivery Partner, and Restaurant modules.'
      ]
    },
    {
      title: 'Intern for Software Development Engineer',
      company: 'Bluestock Fintech',
      period: '01/03/2025 – 31/04/2025',
      mode: 'Online',
      description: [
        'Worked on financial analysis, data visualization, and ML model development to support predictive insights.'
      ]
    },
    {
      title: 'Intern for Web Development Using MERN',
      company: 'Web Stack Academy',
      period: '02/07/2024 – 16/09/2024',
      mode: 'Online',
      description: [
        'Developed a full-stack Food Delivery App (MERN), implementing authentication, order tracking, menu management, and payments.'
      ]
    },
    {
      title: 'Intern for Web Development',
      company: 'Dhrumi Technologies',
      period: '29/07/2022 – 03/09/2022',
      mode: 'Online',
      description: [
        'Developed a Food Ordering & Restaurant Booking System using Django, with dashboards for users, restaurants, and hotels.'
      ]
    }
  ];

  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(work.map(() => true));
    }, 200);
    return () => clearTimeout(timer);
  }, [work.length]);

  return (
    <section className="work-experience" id="work">
      {/* Floating shapes / scattered objects */}
      <div className="floating-objects">
        <div className="obj obj1"></div>
        <div className="obj obj2"></div>
        <div className="obj obj3"></div>
        <div className="obj obj4"></div>
        <div className="obj obj5"></div>
      </div>

      <Container>
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-description">
          A glimpse of my journey through internships and professional growth.
        </p>

        <div className="work-cards">
          {work.map((item, idx) => (
            <Row 
              key={idx} 
              className={`work-row ${idx % 2 === 0 ? 'left' : 'right'} ${visible[idx] ? 'slide-in' : ''}`} 
              style={{animationDelay: `${idx * 0.3}s`}}
            >
              <Col md={6} className="work-card-col">
                <div className="work-card">
                  <h3>{item.title}</h3>
                  <p className="company">{item.company} | <span className="mode">{item.mode}</span></p>
                  <p className="period">{item.period}</p>
                  <ul>
                    {item.description.map((desc, i) => <li key={i}>{desc}</li>)}
                  </ul>
                </div>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </section>
  );
};
