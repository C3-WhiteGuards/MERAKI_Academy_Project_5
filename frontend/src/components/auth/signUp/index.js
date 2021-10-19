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
          src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_10/3455164/210308-gym-masks-bd-2x1.jpg          "
          alt=""
        />
      </div>
      <div className="contentBox">
        <div className="formBox">
          <h2>Create Account</h2>

          <div className="inputBox">
            <input
              type="text"
              placeholder="First Name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="inputBox">
            <input
              type="text"
              placeholder="Last Name"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div className="inputBox">
            <input
              type="Email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="inputBox">
            <input
              type="Password"
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
              Do You have an account? <a href="/login"> Login in</a>{" "}
            </p>
          </div>
          <ul className="scil">
           
          </ul>
        </div>
      </div>
    </div>
  );
}
