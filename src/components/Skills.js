import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../App.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const skills = [
    {
      title: "Languages",
      description: "Python, Java, JavaScript, PHP, C++, SQL",
    },
    {
      title: "Frameworks & Technologies",
      description: "Django, Spring Boot, AngularJS, ReactJS, Flutter, Flask, JavaFX, OpenCV, Bootstrap, Tailwind CSS",
    },
    {
      title: "Databases & Cloud",
      description: "MySQL, MongoDB, Firebase",
    },
    {
      title: "Tools & Platforms",
      description: "Git, GitHub, Postman, Android Studio",
    },
    {
      title: "Soft Skills",
      description: "Teamwork, Problem-Solving, Adaptability, Creativity",
    }
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="skill-bx">
          <h2>Skills</h2>
          <p>
            Proficient in programming, frameworks, and tools with hands-on experience in building full-stack applications. Passionate about coding, problem-solving, and collaborating on innovative projects.
          </p>
          <Carousel responsive={responsive} infinite={true} className="skill-slider">
  {skills.map((skill, idx) => (
    <div className="skill-card" key={idx}>
      <h4>{skill.title}</h4>
      <p>{skill.description}</p>
    </div>
  ))}
</Carousel>

{/* Floating abstract shapes */}
<div className="floating-shapes">
  <div className="shape shape1"></div>
  <div className="shape shape2"></div>
  <div className="shape shape3"></div>
  <div className="shape shape4"></div>
  <div className="shape shape5"></div>
</div>

        </div>
      </div>
    </section>
  );
};
