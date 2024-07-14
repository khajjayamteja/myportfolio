import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import companyLogo1 from '../assets/img/AD.jpeg';
import companyLogo2 from '../assets/img/MCR_logo.jpeg'
export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <h2 className="experience-heading">Experience</h2>
        <Row>
          <Col md={6}>
            <div className="experience-item">
              <img className="experience-logo" src={companyLogo1} alt="Company Logo" />
              <h3 className="experience-title">Full-stack Developer</h3>
              <p className="experience-company">Furfriends Inc</p>
              <p className="experience-dates"> 2024  -  Present</p>
              <ul className="experience-details">
                <li className="experience-detail"> Developed user interfaces for responsive web apps using Angular, HTML5, CSS3, JavaScript ensuring cross-browser compatibility. </li>
                <li className="experience-detail"> Designed and implemented RESTful APIs in C#/.NET Core for seamless communication between frontend and backend systems. </li>
                <li className="experience-detail"> Optimized database performance and scalability using SQL Server, including the design of efficient stored procedures, views, functions. </li>
                <li className="experience-detail"> Implemented cloud-based solutions on AWS, including EC2 for hosting and S3 for ensuring high availability, load balancing, storage.</li>
                <li className="experience-detail"> Enhanced application security by integrating OAuth2 authentication and implementing role-based access control (RBAC) mechanisms. </li>
                <li className="experience-detail"> Led initiatives to improve code quality and maintainability through automated testing frameworks and continuous integration pipelines. </li>
                <li className="experience-detail"> Collaborated with product owners and stakeholders to gather requirements and prioritize development tasks based on business objectives.</li>
                <br/>
              </ul>
            </div>
          </Col>
           <Col md={6}>
            <div className="experience-item">
              <img className="experience-logo" src={companyLogo1} alt="Company Logo" />
              <h3 className="experience-title">Web Programmer</h3>
              <p className="experience-company">Texas Tech University</p>
              <p className="experience-dates"> 2022  - 2024</p>
              <ul className="experience-details">
                <li className="experience-detail"> Spearheaded the development of an Web Platforms for some of the Projects. </li>
                <li className="experience-detail"> Utilized a robust tech stack including Angular, .NET Core, HTML, CSS, and JavaScript. </li>
                <li className="experience-detail"> Created an interactive and engaging online learning environment. </li>
                <li className="experience-detail"> Focused on delivering user-friendly interfaces and intuitive design patterns.</li>
                <li className="experience-detail"> Integrated lessons and assessments using MySQL databases and RESTful API services. </li>
                <li className="experience-detail"> Employed Agile Methodology to streamline content delivery processes. </li>
                <li className="experience-detail"> Successfully deployed the system on Azure, ensuring platform efficiency and reliability.</li>
                <br/>
              </ul>
            </div>
          </Col>
          <Col md={6}>
            <div className="experience-item">
              <img className="experience-logo" src={companyLogo1} alt="Company Logo" />
              <h3 className="experience-title">SOFTWARE DEVELOPER</h3>
              <p className="experience-company">ADP PRIVATE LIMITED</p>
              <p className="experience-dates"> 2021  -  2022</p>
              <ul className="experience-details">
                <li className="experience-detail"> Developed web pages using ASP.NET framework, Angular,React,Redux, SQL Server and design/architectural pattern (Model-View-Controller (MVC)). </li>
                <li className="experience-detail"> Took a main role in developing the single page webpage using dotnet and Angular which increased the work efficiency by 25%. </li>
                <li className="experience-detail"> Involved in the automation of the tasks using Python and PowerShell Scripts which saved total work time of 50 hours/month. </li>
                <li className="experience-detail"> Collaborated with other team members to develop automation strategies and deployment processes.</li>
                <li className="experience-detail"> Cooperated with the back-end developer in the process of building the RESTful API. </li>
                <li className="experience-detail"> Worked using the Code first approach and used Jenkins to Deploy the Scripts. </li>
                <li className="experience-detail"> Followed the Scrum Framework for the development and release activities.</li>
                <br/>
              </ul>
            </div>
          </Col>
          <Col md={6}>
            <div className="experience-item1">
              <img className="experience-logo" src={companyLogo2} alt="Company Logo" />
              <h1 className="experience-title"> WEB DEVELOPER </h1>
              <h5 className="experience-company">MCR WEB SOLUTIONS</h5>
              <p className="experience-dates">2019  -  2021</p>
              <ul className="experience-details">
                <li className="experience-detail"> Participated in all phases of the SDLC, from system analysis and design through development and test to deployment and support.</li>
                <li className="experience-detail"> Reviewed and implemented the user suggestions to the Software and Marketing, thereby improving customer retention by 15%.</li>
                <li className="experience-detail"> Trained the 10 of the staff members in internal web functions, including how to implement minor fixes and changes.</li>
                <li className="experience-detail"> Conducted research and assisted with the business scoping efforts, resulting in the acquisition of 12 new clients.</li>
                <li className="experience-detail"> Involved in developing Bhimavaram.online (Startup) a first ever real time e-commerce website in the region.</li>
                <li className="experience-detail"> Involved in writing the code for the Front-end using HTML, CSS and JavaScript , OpenCart.</li>
                <li className="experience-detail"> Employed SQL and oracle data modelling for the back end of the web Pages.</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
