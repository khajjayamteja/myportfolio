import { Container, Row, Col } from "react-bootstrap";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <br></br>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/teja-sai-srinivas/"><img src={navIcon1} alt="" />  </a>
              <a href="https://github.com/khajjayamteja"><img src={navIcon2} alt="" /></a>
            </div>
            
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <br></br>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
