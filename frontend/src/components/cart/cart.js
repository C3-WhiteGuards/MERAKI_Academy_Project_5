import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../redux/action/cart";
import Payment from "../payment/payment";
import { Col, Card, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cart.css"
import axios from "axios";
export const Cart = () => {
  const token = localStorage.getItem("token");
  const trainer = JSON.parse(localStorage.getItem("trainer"));
  const gym = JSON.parse(localStorage.getItem("gym"));
  const restaurant = JSON.parse(localStorage.getItem("restaurant"));
  const result = [trainer,gym,restaurant]
  console.log(localStorage.trainer);
  let trainerId = 2;
  let gymId = 10;
  let restaurantId = 2;
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return state.cart;
  });
  console.log(state);
  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  function reqTrainer() {
    axios.post(
      `http://localhost:5000/subscribtion/trainer`,
      { trainerId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  }

  function reqGym() {
    axios.post(
      `http://localhost:5000/subscribtion/gym`,
      { gymId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  }
  function reqResturant() {
    axios.post(
      `http://localhost:5000/subscribtion/rest`,
      { restaurantId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  }
  const addSUB = () => {
    Promise.all([reqTrainer(), reqGym(), reqResturant()])
      .then(function (results) {
        console.log("traner", results[0], trainerId);
        console.log("gym", results[1], gymId);
        console.log("returant", results[2], restaurantId);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };
  return (
    <div className="allCart">
      <div className="container">
        <h3>Your subscribtion</h3>
        {result && result.map((elem,index)=>{
          if (elem != null){
          return <div class="Main-Card" key={index}>
          <img
            src={elem && elem.image}
            alt="!"
          />

          <div class="card-Text">
            <h2>{elem && elem.name}</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>

            <strong>Price:{elem && elem.price}$</strong>
            <br />

            <button>Delete</button>
          </div>
        </div>
}})}
        
      </div>

      <div className="container">
        <div className="collection">
          <li className="collection-item"></li>
          <li className="collection-item">
            <b>Total: {state.total} $</b>
          </li>
        </div>
        <div className="checkout">
          <button className="waves-effect waves-light btn" onClick={addSUB}>
            Checkout
          </button>
        </div>
        <div className="checkout">
          <Payment />
        </div>
      </div>
    </div>
  );
};
