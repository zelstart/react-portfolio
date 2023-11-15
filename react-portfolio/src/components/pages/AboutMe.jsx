import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import profilePic from '../../assets/images/profile-pic.jpg'; 

const headerRef = useRef(null);
const bodyRef = useRef(null);

useEffect(() => {
  if (headerRef.current && bodyRef.current) {
    const headerHeight = headerRef.current.offsetHeight;
    bodyRef.current.style.marginTop = `-${headerHeight}px`;
  }
}, []);

function AboutMe() {
  return (
    <main className="container-fluid vh-100 vw-100 d-flex align-items-center mt-3 mt-md-0">
      <div className="row w-100 justify-content-center">
        <div className="col-12 col-md-8 col-lg-10">
          <Card className='about-me'>
            <Row>
              <Col xs={6} md={3} lg={2}>
                <Card.Header className='cstm-card-header'>
                  who i am!
                </Card.Header>
              </Col>
              <Col xs={12}>
                <Card.Body className='cstm-card-body'>
                  <Row className="flex-column flex-md-row">
                    <Col xs={12} md={4} lg={3} className="d-flex justify-content-center">
                      <img src={profilePic} alt="a person. they look like they hate being photographed!" className="profile-pic" />
                    </Col>
                    <Col xs={12} md={8} lg={8}>
                      Hello! My name is Zel. I am just entering the world of web development. 
                    </Col>
                  </Row>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    </main>
  );
}

export default AboutMe;