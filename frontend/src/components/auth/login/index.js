import "./login.css";
import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken } from "../../../redux/action/loginToken";

export const Login=()=> {
  const [email, setEmail] = useState(0);
  const [password, setPassword] = useState(0);
  const dispatch = useDispatch();

  const userLogin = () => {
    axios
      .post("http://localhost:5000/login", {
        email,
        password,
      })
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("token", token);
        dispatch(setToken(res.data.token))
        console.log(res.data.token);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  return (
    <div className="section">
      <div className="imgBx">
        <img
          src="https://c8.alamy.com/compes/rh4grn/un-chico-se-esta-ejecutando-en-la-caminadora-concepto-de-deporte-para-ninos-rh4grn.jpg"
          alt="broken"
        />
      </div>
      <div className="contentBx">
        <div className="formBx">
          <p>
            Welcome here, where there are all kinds of sports and nutritional
            supplements
          </p>
          <h2>Login</h2>

          <div className="inputBx">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="inputBx">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="remember">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
          </div>
          <div className="">
            {/**  <input type="submit" value="Sign in"/>*/}
            <button className="" onClick={userLogin}>
              Sign In
            </button>
          </div>
          <div className="inputBx">
            <p>
              <a href="#"> Forgotten Your Password? </a>{" "}
            </p>
          </div>

          <h3>Login With social media</h3>

          <ul className="sci">
            {/* <li><Facebook/></li> */}
            <li>
              
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
