import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import { Allproduct } from "../products/product";
import { AddComment } from "../comment/comment";

import "./main.css";
import { useHistory } from "react-router";

const Main = () => {
  const history = useHistory();
  return (
    <div>
      <div className="landing">
        <div className="landText">
          <h2 className="h2_Main">
            WELCOME TO - <br />
            MegaLodon
          </h2>
          <p className="pMain">
            We have made the most advanced, constumizable and sport theme in the
            world.
          </p>
          <button
            className="button"
            onClick={() => {
              history.push("./register");
            }}
          >
            {" "}
            Join us{" "}
          </button>
          <button
            className="button1"
            onClick={() => {
              history.push("./boutUs");
            }}
          >
            {" "}
            About us{" "}
          </button>
        </div>
      </div>

   
     
      {/* ////////                service section       /////////// */}
      <div className="featuresMain">
        <div className="titleMain">
          <h1>SET HIGH FITNESS GOALS</h1>
          <p>
            After you decide to start training we will make sure you get the
            best fitness program. Our sport experts and latest sports equipment
            are the winning combination.
          </p>
        </div>
        <div className="containerMain">
          <div className="featMain">
            <img src="/icon-1.png" alt="" />
            <h5>QUALITY EQUIPMENT</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. expedita
              voluptatum, ipsum sit dolor exercitationem temporibus qui!
            </p>
          </div>
          <div className="featMain">
            <img src="/icon-2.png" alt="" />

            <h5>UNIQUE TO YOUR NEEDS</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. expedita
              voluptatum, ipsum sit dolor exercitationem temporibus qui!
            </p>
          </div>
          <div className="featMain">
            <img src="/icon-3.png" />
            <h5>HEALTHY NUTRITION PLAN</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. expedita
              voluptatum, ipsum sit dolor exercitationem temporibus qui!
            </p>
          </div>
        </div>
      </div>
      <div className="Main-text-center">
        <div className="container">
        <div className="titleMain">
          <h1 >OUR SECTIONS </h1>
         
        </div>
          <div className="row" style={{marginTop:"50px"}}>
            <div className="col-md-4 col-sm-12">
              <Card className="cardS"  style={{textAlign:"left" }}>
                <Card.Img
                  variant="top"
                  src="https://d1nigvtzsvfzyx.cloudfront.net/store/amenity/075cda3f435bc205f9a7-xs.png"
                  height="250px"
                  width="350px"
                />
                <Card.Body>
                  <Card.Title>Trainers</Card.Title>
                  <Card.Text  style={{fontSize:"16px"}}>
                    Being educated while exercising is essential in maximizing
                    effectiveness and reducing risk of injury. A personal
                    trainer will teach you everything .
                  </Card.Text>
                  <Button
                     style={{ width: "60%" , fontSize:"16px" , backgroundColor:"#ffcd08" , color:"black" , border:"none" }}
                    variant="dark"
                    onClick={() => history.push("/AllTrainers")}
                  >
                    Find Your Trainer{" "}
                  </Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4 col-sm-12">
              <Card className="cardS"   style={{textAlign:"left"}}>
                <Card.Img
                  variant="top"
                  src="https://cdn.vox-cdn.com/thumbor/BBzIzBTtIXF1HG_5Lm7BvMkPNXk=/0x0:960x673/1200x900/filters:focal(404x261:556x413)/cdn.vox-cdn.com/uploads/chorus_image/image/62771444/realgood_stuff.1546466894.jpg"
                  height="250px"
                  width="350px"
                
                />
                <Card.Body>
                  <Card.Title>Restaurants</Card.Title>
                  <Card.Text  style={{fontSize:"16px"}}>
                    The food you eat can eather be either the safest and most
                    powerful form of midicine OR the slowest form of poison Dont
                    forget that health needs healthy food
                  </Card.Text>
                  <Button
                    style={{ width: "60%" , fontSize:"16px" , backgroundColor:"#ffcd08" , color:"black" , border:"none" }}
                    variant="dark"
                    onClick={() => history.push("/AllRestaurnats")}
                  >
                    Find Your Restaurant{" "}
                  </Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4 col-sm-12">
              <Card className="cardS"  style={{textAlign:"left"}}>
                <Card.Img
                  variant="top"
                  src="https://wiselivingmagazine.co.uk/wp-content/uploads/2018/11/gyms-near-me-how-to-find-the-best-gym-widescreen.jpg"
                  height="250px"
                  width="350px"
                />
                <Card.Body>
                  <Card.Title>Gyms</Card.Title>
                  <Card.Text  style={{fontSize:"16px"}}>
                    Joining a gym can help you stay motivated to exercise
                    consistently. This is a great way to build muscle, lose
                    weight, lower blood pressure, boost mental focus, and more .
                  </Card.Text>
                  <Button
                     style={{ width: "60%" , fontSize:"16px" , backgroundColor:"#ffcd08" , color:"black" , border:"none" }}
                    variant="dark"
                    onClick={() => history.push("/ALLGyms")}
                  >
                    Find Your Gym
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="Main-Stories">
        <div className="container">
          <Carousel fade>
            <Carousel.Item className="line">
              <div className="Slider-Show">
                <div className="fundmeText">
                  <h5>
                    “ If something stands between you and your success, move it.
                    Never be denied.”
                  </h5>
                </div>
                <img
                  className="d-block w-100"
                  src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f298efbe2252631e7028543%2FA-woman-working-out-in-a-gym%2F960x0.jpg%3Ffit%3Dscale"
                  alt="First slide"
                />
              </div>
            </Carousel.Item>

            <Carousel.Item className="line">
              <div className="Slider-Show">
                <div className="fundmeText">
                  <h5>
                    “ Your diet is a bank account, Good food choices are good
                    investments.”
                  </h5>
                </div>
                <img
                  className="d-block w-100"
                  src="https://media.self.com/photos/5fe36191fa75923c77cd821f/4:3/w_2560%2Cc_limit/GettyImages-1128962609.jpg"
                  alt="First slide"
                />
              </div>
            </Carousel.Item>

            <Carousel.Item className="line">
              <div className="Slider-Show">
                <div className="fundmeText">
                  <h5>
                    “ Take a deep dreath and believe in your trainer, he will
                    keep u motivated”
                  </h5>
                </div>
                <img
                  className="d-block w-100"
                  src="https://cdn.crello.com/api/media/medium/194375538/stock-photo-male-personal-trainer-helping-young"
                  alt="First slide"
                />
              </div>
            </Carousel.Item>

            <Carousel.Item className="line">
              <div className="Slider-Show">
                <div className="fundmeText">
                  <h5>
                    “ Exercise is a celebration of what your body can do, Not a
                    punishment for what you ate.”{" "}
                  </h5>
                </div>
                <img
                  className="d-block w-100"
                  src="https://evofitness.at/wp-content/uploads/2018/09/EVO-2020-PP-February-Banner_19-1200x675.jpg"
                  alt="First slide"
                />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <Allproduct />

      <AddComment />
    </div>
  );
};

export default Main;
