import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

import CardMedia from '@material-ui/core/CardMedia';
import ReactPlayer from 'react-player'


// core components

function Images() {
  return (
    <>
      <div className="section section-images">
        <Container>
          <Row>
            <Col md="12">
              <div className="hero-images-container">
                <img
                  alt="..."
                  src={require("assets/img/hero-image-1.png")}
                ></img>
              </div>
              <div className="hero-images-container-1">
                <img
                  alt="..."
                  src={require("assets/img/hero-image-2.png")}
                ></img>
              </div>
              <div className="hero-images-container-2">
                <img
                  alt="..."
                  src={require("assets/img/hero-image-3.png")}
                ></img>
              </div>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=HAlutGz3_O8"
            />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Images;
