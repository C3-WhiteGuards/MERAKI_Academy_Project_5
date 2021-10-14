import "./login.css";

// import { SocialIcon } from "react-social-icons";
// import Email from "@material-ui/icons/Email";

import React, { useState } from "react";
import axios from "axios";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
export const Login = () => {
  const [email, setEmail] = useState(0);
  const [password, setPassword] = useState(0);
  const history = useHistory();
  const clientId =
    "707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com";

  const userLogin = async() => {
   await axios
      .post("http://localhost:5000/login", {
        email,
        password,
      })
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("token", token);
        dispatch(setToken(res.data.token))
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  const onSuccess = (res) => {
    axios
      .post("http://localhost:5000/login/loginGoogle", { tokenId: res.tokenId })
      .then((res) => {
        if (res.data) {
          localStorage.setItem("token", res.data.token);
          history.push("/home");
        } else throw Error;
      })
      .catch((err) => {
       
          console.log(err.response.data.message);
        
      });
    console.log("Login Success: currentUser:", res.tokenObj.id_token); // for set token
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
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
            <li>
              <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                style={{ marginTop: "100px" }}
              />    
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
