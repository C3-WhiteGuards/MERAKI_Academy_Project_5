import React, { useEffect, useState } from "react";

import axios from "axios";

const Trainer = () => {
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
                <p>{elem.image}</p>
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
export default Trainer;
