import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Gym.css";

// get all gymss function
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
                  <h5>
                    <Link target="_blank" to={element.location}>
                      {" "}
                      see gym location
                    </Link>
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

export const AddNewGym = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [image, setImage] = useState("");
  const [priceMonthly, setPriceMonthly] = useState("");
  const [description, setDescription] = useState("");

  const addGym = () => {
    axios
      .post("http://localhost:5000/gym", {
        name,
        phoneNumber,
        image,
        priceMonthly,
        description,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <div>
      <input
        placeholder="name"
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <input
        placeholder="phoneNumber"
        type="number"
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
      ></input>
      <input
        placeholder="image Link"
        type="text"
        onChange={(e) => {
          setImage(e.target.value);
        }}
      ></input>
      <input
        placeholder="priceMonthly"
        type="text"
        onChange={(e) => {
          setPriceMonthly(e.target.value);
        }}
      ></input>
      <input
        placeholder="description"
        type="text"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></input>
      <button onClick={() => {addGym()}}> Add Gym</button>
    </div>
  );
};
