import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import universityLogo1 from '../assets/img/srkr.jpeg';
import universityLogo2 from '../assets/img/texas-tech-logo.png';

const Education = () => {
  return (
    <section className="experience" id="education">
      <Container>
        <h2 className="experience-heading">Education</h2>
        <Row>
      
            <div className="experience-item">
              <img className="experience-logo" src={universityLogo2} alt="Company Logo" />
              <h3 className="experience-title">Texas Tech University, Lubbock</h3>
              <p className="experience-company">Master of Science, Computer Science</p>
              <p className="experience-dates">Aug 2022 - May 2024</p>
              <p className="education-details">GPA: 3.9/4</p>
            </div>
          
        </Row>
      </Container>
    </section>
  );
};

export default Education;