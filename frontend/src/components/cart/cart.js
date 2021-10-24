import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, removeSubscription } from "../../redux/action/cart";
import Payment from "../payment/payment";
import { Col, Card, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cart.css";
import axios from "axios";
export const Cart = () => {
  const token = localStorage.getItem("token");
  const [trainerId, setTrainerId] = useState([]);
  const [gymId, setGymId] = useState([]);
  const [restaurantId, setRestaurantId] = useState([]);
  let total = 0;
  
  
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return state.cart;
  });
  
  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const removeSubscribtion = (provider) => {
    dispatch(removeSubscription(provider));

    if (provider === "resturant") {
      localStorage.removeItem("restaurant");
    }
    if (provider === "trainer") {
      localStorage.removeItem("trainer");
    }
    if (provider === "gym") {
      localStorage.removeItem("gym");
    }
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
        {state.subscription &&
          state.subscription.map((elem, index) => {
            total = total + (elem.priceMonthly || elem.monthlyPrice);
            if (elem.provider === "resturant") {
             // setRestaurantId(elem.id);
            }
            if (elem.provider === "trainer") {
             // setTrainerId(elem.id);
            }
            if (elem.provider === "gym") {
             //setGymId(elem.id);
            }
            if (elem != null) {
              return (
                <div class="Main-Card" key={index}>
                  <img src={elem && elem.image} alt="!" />

                  <div class="card-Text">
                    <h2>
                      {elem && (elem.name || (elem.firstName +" "+ elem.lastName))}
                    </h2>
                    <p>
                     
                    </p>

                    <strong>
                      Price:{elem && (elem.priceMonthly || elem.monthlyPrice)}$
                    </strong>
                    <br />

                    <button
                      onClick={() => {
                        removeSubscribtion(elem.provider);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            }
          })}
      </div>

      <div className="container">
        <div className="collection">
          <li className="collection-item"></li>
          <li className="collection-item">
            <b>Total: {total} $</b>
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
