import React, { useState, useEffect } from "react";
import "./restaurants.css";
import axios from "axios";
import { useHistory } from "react-router";

export const Resturants = () => {
  const [resturants, setResturants] = useState([]);
  const history = useHistory();

  useEffect(async () => {
    await axios
      .get("http://localhost:5000/resturan")
      .then((res) => {
        console.log(res.data.result);
        setResturants([...res.data.result]);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  return (
    <div className="AllResturants">
      {resturants &&
        resturants.map((Element, i) => {
          return (
            <div
              key={i}
              className="cardRestrurant"
              onClick={() => history.push(`/resturan/${Element.id}`)}
            >
              <img src={Element.image} className="imgRestaurant" />
              <h2 className="nameResturant">{Element.name}</h2>
            </div>
          );
        })}
    </div>
  );
};
