import { useState, useEffect} from "react";
import { Container, Row, Col} from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/banner.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);

    const toRotate = ["Full Stack Developer", "Web & Mobile Enthusiast", "Problem Solver"];
    const period = 2000;

    useEffect(() =>{
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => clearInterval(ticker);
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting 
            ? fullText.substring(0, text.length - 1) 
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prev => prev / 2);
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        } else {
            setIndex(prev => prev + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) => 
                        <div className={isVisible ? "animate__animated animate__fadeIn banner-text" : "banner-text"}>
    <h2 className="subtitle">Hi, I'm</h2>
    <h1 className="name">Dhanshri Yewankar</h1>
    <h2 className="typewriter">- {text}</h2>
    <p className="description">
        Computer Engineering student skilled in <strong>Python, Java, React, Django, Flutter</strong> and more.
        Experienced in building full-stack applications through projects, internships, and hackathons.
        Passionate about creating <strong>impactful digital solutions</strong> and growing as a Full Stack Developer.
    </p>
    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        <button className="vvd">Resume <ArrowRightCircle size={25} /></button>
    </a>
</div>
}
                        </TrackVisibility>
                    </Col>

                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                            <img src={headerImg} className="bnbg" alt="Header Img" />
                        </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
