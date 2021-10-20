import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../redux/action/cart";
import Payment from "../payment/payment";
import { Col, Card, Row, Button } from "react-bootstrap";
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
        <Row xs={1} md={2} className="g-4">
          {state.items &&
            state.items.map((item) => {
              return (
                <Col key={item.id}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src={item.image}
                      height="350px"
                      width="350px"
                    />
                    <Card.Body>
                      <Card.Title>{item.Title}</Card.Title>
                      <Card.Text>Price:{item.price}$</Card.Text>
                    </Card.Body>
                    <Button
                      variant="primary"
                      onClick={() => {
                        handleRemove(item.id);
                      }}
                    >
                      Remove
                    </Button>
                  </Card>
                </Col>
              );
            })}
        </Row>
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
