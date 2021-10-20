import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import { Allproduct } from "../products/product";
import { AddComment } from "../comment/comment";

import "./main.css";
const Main = () => {
  return (
    <div>
      <div className="Main text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12" >
              <Card className="cardS">
                <Card.Img
                  variant="top"
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portrait-of-a-trainer-in-gym-royalty-free-image-1584723855.jpg"
                  height="350px"
                  width="350px"
                />
                <Card.Body>
                  <Card.Title>Trainers</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4 col-sm-12">
              <Card className="cardS">
                <Card.Img
                  variant="top"
                  src="https://cdn.vox-cdn.com/thumbor/BBzIzBTtIXF1HG_5Lm7BvMkPNXk=/0x0:960x673/1200x900/filters:focal(404x261:556x413)/cdn.vox-cdn.com/uploads/chorus_image/image/62771444/realgood_stuff.1546466894.jpg"
                  height="350px"
                  width="350px"
                />
                <Card.Body>
                  <Card.Title>Restaurants</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4 col-sm-12">
              <Card className="cardS">
                <Card.Img
                  variant="top"
                  src="https://wiselivingmagazine.co.uk/wp-content/uploads/2018/11/gyms-near-me-how-to-find-the-best-gym-widescreen.jpg"
                  height="350px"
                  width="350px"
                />
                <Card.Body>
                  <Card.Title>Gyms</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="Main-Stories">
        <div className="container">
          <Carousel fade>
            <Carousel.Item className="d-block w-100">
              <div className="Slider-Show">
                <div className="fundmeText">
                  <h5></h5>
                  <h2>ndtndtn</h2>
                  <p>djtjdtj</p>
                </div>
                <img
                  className="d-block w-100"
                  src="https://cdn.vox-cdn.com/thumbor/BBzIzBTtIXF1HG_5Lm7BvMkPNXk=/0x0:960x673/1200x900/filters:focal(404x261:556x413)/cdn.vox-cdn.com/uploads/chorus_image/image/62771444/realgood_stuff.1546466894.jpg"
                  alt="First slide"
                />
              </div>
            </Carousel.Item>

            <Carousel.Item className="">
              <div className="Slider-Show">
                <div className="fundmeText">
                  <h5>GOFUNDME FUNDRAISING STORIES</h5>
                  <h2>ndtndtn</h2>
                  <p>djtjdtj</p>
                </div>
                <img
                  className="d-block w-100"
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portrait-of-a-trainer-in-gym-royalty-free-image-1584723855.jpg"
                  alt="First slide"
                />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
        <Allproduct/>
      
      <AddComment />

    </div>
  );
};

export default Main;
