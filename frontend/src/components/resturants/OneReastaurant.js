import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const OneResturant = () => {
  const [resturant, setResturant] = useState(0);

  let id_r = useParams().id;

  useEffect(async () => {
    await axios
      .get(`http://localhost:5000/resturan/${id_r}`)
      .then((res) => {
        setResturant(res.data.Resturant);
        console.log(res.data.Resturant);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="parent_div">
      <div className="parent_2">
        <div className="resturant_img">
          <img
            src={resturant && resturant[0].image}
            alt=""
            className="resturant-img"
          />
        </div>
        <div className="resturant_1">
          <h2 className="name">{resturant && resturant[0].name}</h2>

          <ul className="list_main">
            <li className="list__item">
              <h5
                className="location"
                onClick={() => {
                  window.open(resturant[0].location, "_blank");
                }}
              >
                Location
              </h5>
            </li>
            <li className="price">
              Price {": "}
              <h5 className="phone-link">
                {resturant && resturant[0].monthlyPrice}
              </h5>
            </li>

            {/* <li className="rate">
              Rate :{" "}
              <h5 className="rateDiv">{resturant && resturant[0].rate}</h5>
            </li> */}
          </ul>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};
