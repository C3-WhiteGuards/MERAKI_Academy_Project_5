import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./oneResturant.css";
import swal from 'sweetalert';
// import Payment from "../payment/payment";
// import swal from '@sweetalert/with-react';
import Carousel from "react-bootstrap/Carousel";

export const OneResturant = () => {
  const [resturant, setResturant] = useState(0);
  const token = localStorage.getItem("token");
  let restaurantId = useParams().id;

  useEffect(async () => {
    await axios
      .get(`http://localhost:5000/resturan/${restaurantId}`)
      .then((res) => {
        setResturant(res.data.Resturant);
        console.log(res.data.Resturant);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addSubsecRestaurant = async (elem) => {
   if(localStorage.getItem("restaurant") !== null ){
        swal({
          title: "You cant subsicribe in more than one restaurant",
          text: "go to your cart if you want to replace you subsicribtion  ",
          icon: "error",
          button: "OK",
        });
      }else{
        localStorage.setItem("restaurant", JSON.stringify(elem))
        swal({
          title: "Success !! ",
          text: "Your Food Is Healthy Now , go to your cart to Pay and Confirm your Subsicribtion ",
          icon: "success",
          button: "OK",
        });
      }
       
  }

  return (
    <div className="parent_div">
      <div className="parenttt">
        <div className="resturant_img">
        <Carousel variant="dark" style={{marginTop:"10%"}}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h5>WELCOME TO OUR RESTURANTS </h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/5379707/pexels-photo-5379707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Second slide"
    />
    <Carousel.Caption>
      {/* <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/4450334/pexels-photo-4450334.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Third slide"
    />
    <Carousel.Caption>
      {/* <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
        <div className="resturant_1">
          <ul className="list_main">
            <li className="name">{resturant && resturant[0].name}</li>
            <li
              className="name"
              onClick={() => {
                window.open(resturant[0].location, "_blank");
              }}
            >
               📍 LOCATION
            </li>
            <li className="name">
              Price {": "}
              {resturant && resturant[0].monthlyPrice} JD
            </li>


            {/* <li className="rate">
              Rate :{" "}
              <h5 className="rateDiv">{resturant && resturant[0].rate}</h5>
            </li> */}

            <li className="name">
              Resturant Rate : {resturant && resturant[0].rate}
            </li>

            <button className="resButton" onClick={()=>{
              addSubsecRestaurant(resturant && resturant[0])
            }}>Subscribe Now </button>
    

          </ul>
        </div>
      </div>
    </div>
  );
};
