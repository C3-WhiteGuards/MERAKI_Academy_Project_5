import React, { useState } from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, removeSubscription } from "../../redux/action/cart";
import Payment from "../payment/payment";
import { Col, Card, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cart.css";
import axios from "axios";
export const Cart = () => {
  const token = localStorage.getItem("token");
  let trainerId = 0;
  let gymId = 0;
  let restaurantId = 0;
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
      restaurantId = 0;
      localStorage.removeItem("restaurant");
    }
    if (provider === "trainer") {
      trainerId = 0;
      localStorage.removeItem("trainer");
    }
    if (provider === "gym") {
      gymId = 0;
      localStorage.removeItem("gym");
    }
  };

  return (
    <div className="allCart">
      <div className="container">
        <h3>Your subscribtion</h3>
        {state.subscription &&
          state.subscription.map((elem, index) => {
            total = total + (elem.priceMonthly || elem.monthlyPrice);
            if (elem.provider === "resturant") {
              restaurantId = elem.id;
            }
            if (elem.provider === "trainer") {
              trainerId = elem.id;
            }
            if (elem.provider === "gym") {
              gymId = elem.id;
            }
            if (elem != null) {
              return (
                <div class="Main-Card" key={index}>
                  <img src={elem && elem.image} alt="!" />

                  <div class="card-Text">
                    <h2>
                      {elem &&
                        (elem.name || elem.firstName + " " + elem.lastName)}
                    </h2>
                    <p></p>

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
        <h3>Your Items</h3>
        {state.items &&
          state.subscription.map((elem, index) => {
            total = total + (elem.price);
            if (elem != null) {
              return (
                <div class="Main-Card" key={index}>
                  <img src={elem && elem.image} alt="!" />

                  <div class="card-Text">
                    <h2>
                      {elem &&
                        elem.name }
                    </h2>
                    <p></p>

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
          <Route
            exact
            path="/cart"
            render={() => (
              <Payment
                restaurantId={restaurantId}
                gymId={gymId}
                trainerId={trainerId}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};
