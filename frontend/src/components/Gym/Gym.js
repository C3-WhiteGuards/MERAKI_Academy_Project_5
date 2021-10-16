import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Gym.css";

export const Gym = () => {
  const [allgyms, setAllGyms] = useState([]);
  const userId = localStorage.getItem("userId");
  let gymId = "";
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:5000/gym")
      .then((res) => {
        console.log(res.data);
        setAllGyms([...res.data.result]);
        gymId = res.data.result;
        console.log(allgyms);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  const addSubsGym = async (gymId) => {
    await axios
      .post(
        `http://localhost:5000/subscribtion/gym`,
        { gymId },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <div>
      {allgyms &&
        allgyms.map((element, index) => {
          return (
            <div key={index} className="OneGym">
              <img
                src={element.image}
                className="imgGym"
              />
              <div className="childtwo">
                <h5 className="NameOfTheGym">{element.name}</h5>
                <h5>📞{element.phoneNumber}</h5>
                <h5> {element. priceMonthly}</h5>
                <h5 className="desc"> {element.description}</h5>
                <h5
                  onClick={() => {
                    window.open(element.location, "_blank");
                  }}
                >
                  {" "}
                  📍 LOCATION
                </h5>
                <button
                  className="subscribeBtn"
                  onClick={() => {
                    addSubsGym(element.id);
                  }}
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};
