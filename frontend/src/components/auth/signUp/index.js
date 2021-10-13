import React, { useState } from "react";
import axios from "axios";
import "./signUp.css";
// import Facebook from "@material-ui/icons/Facebook";
// import Email from "@material-ui/icons/Email";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const userRegister = () => {
    axios
      .post("http://localhost:5000/register", {
        firstName,
        lastName,
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  return (
    <div className="section2">
      <div className="imgBox">
        <img
          src="https://i.pinimg.com/originals/a1/4b/a4/a14ba405f675270ef43bdaa5e5932892.png"
          alt=""
        />
      </div>
      <div className="contentBox">
        <div className="formBox">
          <h2>Create Account</h2>

          <div className="inputBox">
            <input
              type="text"
              placeholder="first name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="inputBox">
            <input
              type="text"
              placeholder="last name"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div className="inputBox">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="inputBox">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className="inputBox">
            <button className="submit" onClick={userRegister}>Sign up</button>
          </div>
          <div className="inputBox">
            <p>
              Do You have an account? <a href="#"> Login in</a>{" "}
            </p>
          </div>

          <h3>Login With social media</h3>
          <ul className="scil">
            <li>{/* <Facebook /> */}</li>
            <li>{/* <Email /> */}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
