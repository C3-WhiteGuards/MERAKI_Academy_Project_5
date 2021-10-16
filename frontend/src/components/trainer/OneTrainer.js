import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./OneTrainer.css";
import Place from "@mui/icons-material/Place";
import Phone from "@mui/icons-material/Phone";
import SportsScore from "@mui/icons-material/SportsScore";
import StarBorder from "@mui/icons-material/StarBorder";

export const OneTrainer = () => {
  const [trainer, setTrainer] = useState(0);
  const token = localStorage.getItem("token");
  let trainerId = useParams().id;

  useEffect(async () => {
    await axios
      .get(`http://localhost:5000/trainer/${id_e}`)
      .then((res) => {
        setTrainer(res.data.Trainer);
        console.log(res.data.Trainer);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addSubsecribtionTrainer = async () => {
    await axios
      .post(
        `http://localhost:5000/subscribtion/trainer`,
        { trainerId },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="big-div">
      <div className="col-xs-12">
        <div className="gym-block-img">
          <img src={trainer && trainer[0].image} alt="" className="gym-img" />
        </div>
        <div className="gym-block-bottm">
          <h3 className="gym-block__title">Contact</h3>
          <ul className="list--gym-address">
            <li className="list__item">
              <h5
                className="text-link"
                onClick={() => {
                  window.open(trainer[0].location, "_blank");
                }}
              >
                <div className="location-Class">
                  {" "}
                  <Place />
                </div>
                Location
              </h5>
            </li>
            <li className="list__phon">
              <div className="phon-Class">
                {" "}
                <Phone />
              </div>
              Phone {": "}
              <a className="phone-link">{trainer && trainer[0].phoneNumber}</a>
            </li>

            <li className="list-sport">
              <div className="Sports-Score-Class">
                {" "}
                <SportsScore />
              </div>
              Sport :{" "}
              <a className="sport-ltem">{trainer && trainer[0].sport}</a>
            </li>
            <li className="list-experience">
              <div className="StarBorder-Class">
                {" "}
                <StarBorder />
              </div>
              Experience :
              <a className="experience-ltem">
                {trainer && trainer[0].experience} Years
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="col-xs-14">
        <h2 className="heading">
          {trainer && trainer[0].firstName + " " + trainer[0].lastName}
        </h2>
        <div className="pt-bio">
          <p className="prgTra">{trainer && trainer[0].description}</p>
          <button>onClick={addSubsecribtionTrainer}</button>
        </div>
      </div>
    </div>
  );
};
