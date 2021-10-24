import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Gym.css";
import swal from "sweetalert";
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

  const addSubsGym = async (element) => {
        if(localStorage.getItem("gym") !== null ){
          swal({
            title: "You cant subsicribe in more than one gym",
            text: "go to your cart if you want to replace you subsicribtion  ",
            icon: "error",
            button: "OK",
          });
        }else{
          localStorage.setItem("gym",JSON.stringify(element))
          swal({
            title: "Success !! ",
            text: "  Your Fitness Home Is Here !! \n Go To Your Cart To Pay and Confirm Your Subsicribtion ",
            icon: "success",
            button: "OK",
          });
        }
  };

  return (
    <div className="bigDiv">
      {allgyms &&
        allgyms.map((element, index) => {
          return (

            <>
              {index % 2 == 0 ? (
                <div key={index} className="OneGym">
                  <img src={element.image} className="imgGym" />
                  <div className="childtwo">
                    <h5 className="NameOfTheGym">{element.name}</h5>
                    <h5 className="name2">
                      {" "}
                      Phone Number :{element.phoneNumber}{" "}
                    </h5>
                    <h5 className="name2">
                      {" "}
                      Monthly payment : {element.priceMonthly} $
                    </h5>
                    <h5 className="name2"> {element.description}</h5>
                    <h5  className="name2"
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
              ) : (
                <div key={index} className="OneGym">
                  <div className="childtwo">
                    <h5 className="NameOfTheGym">{element.name}</h5>
                    <h5 className="name2">
                      {" "}
                      Phone Number :{element.phoneNumber}{" "}
                    </h5>
                    <h5 className="name2">
                      {" "}
                      Monthly payment : {element.priceMonthly} $
                    </h5>
                    <h5 className="name2"> {element.description}</h5>
                    <h5 className="name2"
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
                        addSubsGym(element);
                      }}
                    >
                      Subscribe Now
                    </button>
                  </div>

                  <img src={element.image} className="imgGym" />
                </div>
              )}
            </>

          );
        })}
    </div>
  );
};
