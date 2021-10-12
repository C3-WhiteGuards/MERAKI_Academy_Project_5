import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom"

export const Gym = () => {
  const [gyms, setAllGym] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/gym")
      .then((res) => {
        console.log(res.data);
        setAllGym([...res.data.result]);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);
  return (
    <div className="gym">
      <div>
        {gyms &&
          gyms.map((element, index) => {
            return (
              <div key={index}>
                <img src={element.image} />
                <h5>{element.name}</h5>
                <h5>{element.phoneNumber}</h5>
                <h5>{element.priceMonthly}</h5>
                <h5>{element.description}</h5>
                <h5>
                  <Link target="_blank" to={element.location}>
                    {" "}
                    see gym location
                  </Link>
                </h5>

                <button>subscribe</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
