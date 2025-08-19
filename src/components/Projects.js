import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import isi from "../assets/img/isi.png";
import bac from "../assets/img/bac.png";
import toefl from "../assets/img/toefl.png";
import attijari from "../assets/img/Attijari.png";
import devwise from "../assets/img/devwise.png";
import ps from "../assets/img/PS.png";
import ml from "../assets/img/ML.png";
import ctf from "../assets/img/ctf.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import market from "../assets/img/market.svg"
import aiedu from "../assets/img/AIeducation.png"
import aitea from "../assets/img/AIteacher.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const education = [
    {
      title: "Bachelor’s in Computer Science - Software Engineering",
      description: "2022–2025\nInstitut Supérieur d’Informatique (ISI), Ariana (University of Tunis Al Manar)",
      imgUrl: isi,
    },
    {
      title: "High School Diploma in Computer Science (with best honors)",
      description: "2019–2022\nLycée Ibn Mandhour, Nouvelle Medina Ben Arous",
      imgUrl: bac,
    },
    {
      title: "Toefl Exam",
      description: "2025 with a score of 102",
      imgUrl: toefl,
    },
    {
      title: "IT intern at AttijariBank",
      description: "July 2024",
      imgUrl: attijari,
    },
    {
      title: "AI developer intern at Devwise",
      description: "January–May 2025, I worked on developing an educational app that utilized both LLMs and classic NLP techniques to create a seamless experience",
      imgUrl: devwise,
    },
  ];

  const projects = [
    {
      title: "AI Educational App",
      description: "Chatbot for personalized learning",
      imgUrl: aitea, // Icon of a chatbot with educational elements
    },
    {
      title: "Market Search Chatbot",
      description: "Finds tech products by price/features",
      imgUrl: market, // Icon representing search and technology
    },
    {
      title: "PDF AI-teacher",
      description: "PDF processing for personalized learning",
      imgUrl: aiedu, // Icon of a PDF document with AI elements
    },
    {
      title: "AI sliding puzzle solver",
      description: "University Project",
      imgUrl: "https://play-lh.googleusercontent.com/3WmU2VWi9SJDJA_OACS0tQ0TejcmVr91ICmyvyW1hS5SLbQCk9G1_ogYRxLWVbUylQ", // Icon of a puzzle with AI elements
    },
    {
      title: "Odoo factory management system",
      description: "University Project",
      imgUrl: "https://cdn.freebiesupply.com/logos/large/2x/odoo-logo-png-transparent.png", // Odoo logo
    },
    {
      title: "Emotion detection ML model",
      description: "University Project",
      imgUrl: "https://so-development.org/wp-content/uploads/2024/03/key-components-of-emotion-recognition-in-conversat.jpg", // Icon of a face with AI/ML elements
    },
    {
      title: "E-commerce website",
      description: "University Project",
      imgUrl: "https://www.liveconnectevent.com/wp-content/uploads/2022/08/E-Commerce.jpeg", // Icon of an e-commerce shopping cart
    },
    {
      title: "Educational mobile app",
      description: "University Project",
      imgUrl: "https://cdn.shopaccino.com/igmguru/products/flutter-igmguru_1527424732_l.jpg?v=531", // Icon of a mobile app with educational elements
    },
    {
      title: "Web Games",
      description: "Interactive browser-based games",
      imgUrl: "https://cdn.prod.website-files.com/5b651f8b5fc94c4e27470a81/622227fd2ce3cc0455a88166_blog-gamedev-fullsize.png", // Icon of a game controller
    },
  ];

  const competitions = [
    {
      title: "Problem solving",
      description: "IEEExtreme 17.0 (2023), IEEExtreme 18.0 (2024)\nBizerte TCODI (Problem-solving, 2024)\nISI Programming Competition (2025)",
      imgUrl: ps,
    },
    {
      title: "Cybersecurity (CTFs)",
      description: "1st Place: SECURICON CTF (2025), ISI MINI CTF\nDARKEST HOUR CTF (INSAT)\nParticipated: ISI Beginner CTF, SECURICON QUALS, SPARK RAMADAN CTF",
      imgUrl: ctf,
    },
    {
      title: "Machine Learning Competitions",
      description: "GAIATHON 2025 (ML with embedded systems)\nHackuna Matata (GDSC ISI 2024)\nDataQuest (IEEE INSAT 2024)",
      imgUrl: ml,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Education, Projects & Competitions</h2>
                  <p>Showcasing my academic background, personal and university projects, and participation in various competitions.</p>
                  <style>{`
                    .project img {
                      width: 100%;
                      height: 200px;
                      object-fit: contain;
                      margin: 0 auto;
                      display: block;
                    }
                    .project .project-card {
                      text-align: center;
                      padding: 15px;
                    }
                    .project .project-card h4 {
                      margin-top: 10px;
                    }
                  `}</style>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Education and work experience</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Competitions</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {education.map((item, index) => (
                            <ProjectCard
                              key={index}
                              {...item}
                              className="project-card"
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                              className="project-card"
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {competitions.map((comp, index) => (
                            <ProjectCard
                              key={index}
                              {...comp}
                              className="project-card"
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};