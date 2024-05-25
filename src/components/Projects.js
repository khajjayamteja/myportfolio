import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/portfolio-ds-1 (2).jpg";
import projImg2 from "../assets/img/nav.jpeg";
import projImg3 from "../assets/img/cloud_service.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import sort_al from "../assets/img/signup (1) (2).webp";
import ai_proj from "../assets/img/AI_proj.jpeg";
import smart_cab from "../assets/img/smart_cab.jpeg";
import seo from "../assets/img/SEO.jpg";
import flask from "../assets/img/portfolio-web2 (1) (2).png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "Docker Login Page",
      description: "Docker, Git, PHP, HTML, CSS, and SQL",
      imgUrl: sort_al,
      githubUrl: "https://github.com/khajjayamteja/docker-login-page",
    },
    {
      title: "Docker with Dotnet & Angular",
      description: "docker, git, Dotnet , Angular, SQL",
      imgUrl: flask,
      githubUrl: "https://github.com/khajjayamteja/Docker_with_Dotnet_Angular",
    },
    {
      title: "Exploratory Data Analysis ",
      description: "Quantitative and Qualitative Analysis",
      imgUrl: projImg1,
      githubUrl: "https://github.com/khajjayamteja/Data_Exploration.github.io/blob/main/Index.ipynb",
    },
    {
      title: "AI Project",
      description: "Machine Learning & Deep Learning",
      imgUrl: ai_proj,
      githubUrl: "https://khajjayamteja.github.io/AI-chatbot.github.io/",
    },
 
    
  ];
  const projects2 = [
    {
      title: "Docker Login Page",
      description: "Docker, Git, PHP, HTML, CSS, and SQL",
      imgUrl: sort_al,
      githubUrl: "https://github.com/khajjayamteja/docker-login-page",
    },
    {
      title: "Docker with Dotnet & Angular",
      description: "docker, git, Dotnet , Angular, SQL",
      imgUrl: flask,
      githubUrl: "https://github.com/khajjayamteja/Docker_with_Dotnet_Angular",
    },


  ];
  const projects3 = [

    {
      title: "Exploratory Data Analysis ",
      description: "Quantitative and Qualitative Analysis",
      imgUrl: projImg1,
      githubUrl: "https://github.com/khajjayamteja/Data_Exploration.github.io/blob/main/Index.ipynb",
    },
    {
      title: "AI Project",
      description: "Machine Learning & Deep Learning",
      imgUrl: ai_proj,
      githubUrl: "https://khajjayamteja.github.io/AI-chatbot.github.io/",
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <div>
              <h2>Projects</h2><br></br>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">All</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Web</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Data Science</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp"> 
                  <Tab.Pane eventKey="first">
                    <p>Explore a collection of projects showcasing proficiency in SQL, Flask, Python, SQLAlchemy, Fast API, HTML, CSS, and JavaScript. From dynamic web applications to database management systems, these projects demonstrate a holistic understanding of full-stack development.</p>
                    <Row>
                      {projects1.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <p>Delve into innovative projects leveraging PySpark, machine learning algorithms, reinforcement learning, neural networks, and convolutional neural networks. These projects illustrate the application of advanced techniques in data analysis, classification, and prediction, including Pyspark Streaming.</p>
                    <Row>
                      {
                        projects2.map((project, index) => {
                          return (
                            <ProjectCard key={index} {...project} />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>Discover projects that help understand popular search terms and navigate cities easily. Using Python and React, analyze SEO trends for better online visibility. Meanwhile, with OpenStreetMap and Leaflet, explore cities effortlessly, finding routes and points of interest. These projects use technology to make everyday tasks simpler.</p>
                    <Row>
                      {
                        projects3.map((project, index) => {
                          return (
                            <ProjectCard key={index} {...project} />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};