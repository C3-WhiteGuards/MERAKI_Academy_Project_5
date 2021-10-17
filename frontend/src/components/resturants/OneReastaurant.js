import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./oneResturant.css";

export const OneResturant = () => {
  const [resturant, setResturant] = useState(0);
  const token = localStorage.getItem("token");
  let restaurantId = useParams().id;

  useEffect(async () => {
    await axios
      .get(`http://localhost:5000/resturan/${restaurantId}`)
      .then((res) => {
        setResturant(res.data.Resturant);
        console.log(res.data.Resturant);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addSubsecRestaurant = async () => {
    await axios
      .post(
        `http://localhost:5000/subscribtion/rest
 `,
        { restaurantId },
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
    <div className="parent_div">
      <div className="parent_2">
        <div className="resturant_img">
          <img
            // src={resturant && resturant[0].image}
            src="https://ucarecdn.com/9edc8146-b39b-4024-a081-dcf87e0121e6/-/resize/1800x/"
            alt=""
            className="resturant-img"
          />
        </div>
        <div className="resturant_1">
          <ul className="list_main">
            <li className="name">{resturant && resturant[0].name}</li>
            <li
              className="list__item"
              onClick={() => {
                window.open(resturant[0].location, "_blank");
              }}
            >
              Resturant Location
            </li>
            <li className="price">
              Price {": "}
              {resturant && resturant[0].monthlyPrice} JD
            </li>


            {/* <li className="rate">
              Rate :{" "}
              <h5 className="rateDiv">{resturant && resturant[0].rate}</h5>
            </li> */}

            <li className="rate">
              Resturant Rate : {resturant && resturant[0].rate}
            </li>
            <button className="resButton" onClick={addSubsecRestaurant}>Subscribe</button>

          </ul>
        </div>
      </div>
    </div>
  );
};
