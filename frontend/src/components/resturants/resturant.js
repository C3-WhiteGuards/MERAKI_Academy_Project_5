import React, { useState, useEffect } from "react";
import "./restaurants.css";
import axios from "axios";
export const Resturants = () => {
  const [resturants, setResturants] = useState([]);
  useEffect(() => {
    axios
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
            <div key={i} className="cardRestrurant">
              <img src={Element.image} className="imgRestaurant"/>
              <h2 className="nameResturant">{Element.name}</h2>
            </div>
          );
        })}
    </div>
  );
};
