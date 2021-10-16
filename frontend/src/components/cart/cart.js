import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../redux/action/cart";
import Payment from "../payment/payment";

export const Cart = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return state.cart;
  });
  console.log(state);
  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <div className="container">
        <div className="cart">
          <h5>You have ordered:</h5>

          <ul className="collection">
            {state.items &&
              state.items.map((item) => {
                return (
                  <li className="collection-item avatar" key={item.id}>
                    <div className="item-img">
                      <img src={item.image} alt={item.image} className="" />
                    </div>

                    <div className="item-desc">
                      <span className="title">{item.name}</span>
                      <p>{item.description}</p>
                      <p>
                        <b>Price: {item.price}$</b>
                      </p>
                      <button
                        className="waves-effect waves-light btn pink remove"
                        onClick={() => {
                          handleRemove(item.id);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="collection">
          <li className="collection-item"></li>
          <li className="collection-item">
            <b>Total: {state.total} $</b>
          </li>
        </div>
        <div className="checkout">
          <button className="waves-effect waves-light btn" onClick={() => {}}>
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
