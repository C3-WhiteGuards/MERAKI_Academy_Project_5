import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Gym.css";
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
      <div className="child">

        {gyms &&
          gyms.map((element, index) => {
            return (
              <div key={index}>
                <img src={element.image} />



                <div className="childtwo">
                  <h5>{element.name}</h5>
                  <h5>{element.phoneNumber}</h5>
                  <h5>{element.priceMonthly}</h5>
                  <h5>{element.description}</h5>

                  <h5
                    onClick={() => {
                      window.open(element.location, "_blank");
                    }}
                  >
                    {" "}
                    LOCATION
                  </h5>
                  <button>subscribe</button>
                </div>

               </div>
            );
          })}
      </div>
    </div>
  );
};

                  
 </div>
)

