import React, { useEffect, useState } from "react";

import axios from "axios";

export const Trainer = () => {
  const [trainers, setTrainer] = useState([]);

  const getAllTrainers = async () => {
    await axios.get("http://localhost:5000/trainer").then((res) => {
      setTrainer(res.data.allTrainers);
      console.log(res.data.allTrainers);
    });
  };
  useEffect(() => {
    getAllTrainers();
  }, []);

  return (
    <>
      <div className="trainers">
        {trainers &&
          trainers.map((elem, i) => {
            return (
              <div key={i}>
                <p>{elem.firstName}</p>
                <p>{elem.lastName}</p>
                <p>{elem.phoneNumber}</p>
                <p>{elem.location}</p>
                <img src={elem.image}/>
                <p>{elem.sport}</p>
                <p>{elem.priceMonthly}</p>
                <p>{elem.description}</p>
                <p>{elem.experience}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export const AddTrainer = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [sport, setSport] = useState("");
  const [priceMonthly, setPriceMonthly] = useState(0);
  const [description, setDescription] = useState("");
  const [experience, setExperience] = useState(0);

  const addTrainers = async () => {
    await axios
      .post("http://localhost:5000/trainer", {
        firstName,
        lastName,
        phoneNumber,
        location,
        image,
        sport,
        priceMonthly,
        description,
        experience,
      })
      .then((res) => {
        
        console.log(res);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="firstName"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      ></input>

      <input
        type="text"
        placeholder="lastName"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      ></input>

      <input
        type="number"
        placeholder="phoneNumber"
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
      ></input>

      <input
        type="text"
        placeholder="location"
        onChange={(e) => {
          setLocation(e.target.value);
        }}
      ></input>

      <input
        type="text"
        placeholder="Image Link"
        onChange={(e) => {
          setImage(e.target.value);
        }}
      ></input>

      <input
        type="text"
        placeholder="sport"
        onChange={(e) => {
          setSport(e.target.value);
        }}
      ></input>

      <input
        type="number"
        placeholder="priceMonthly"
        onChange={(e) => {
          setPriceMonthly(e.target.value);
        }}
      ></input>

      <input
        type="text"
        placeholder="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></input>

      <input
        type="number"
        placeholder="experience"
        onChange={(e) => {
          setExperience(e.target.value);
        }}
      ></input>

      <button onClick={addTrainers}>add</button>
    </div>
  );
};
