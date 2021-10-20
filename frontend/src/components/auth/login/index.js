import "./login.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../../redux/action/loginToken";
import { addToCart } from "../../../redux/action/cart";

export const Login = () => {
  const [email, setEmail] = useState(0);
  const [password, setPassword] = useState(0);

  const [message , setMessage] = useState("")

  const history = useHistory();
  const dispatch = useDispatch();

  const clientId =
    "707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com";

  const userLogin = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/login", {
        email,
        password,
      })
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("savedData", JSON.stringify([]));
        dispatch(setToken(res.data.token));
        console.log(res);
        dispatch(addToCart([]));
        history.push("/home");
      })

      .catch((error) => {
        setMessage("Email or Password incorrect, please try again");


      });
  };

  const onSuccess = async (res) => {
    console.log(res.tokenId);
    await axios
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
          src="https://api.time.com/wp-content/uploads/2020/03/gym-coronavirus.jpg"
          alt="broken"
        />
      </div>
      <div className="contentBx">
        <div className="formBx">
          <h2>LOGIN</h2>

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
          {/* <div className="remember">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
          </div> */}
          <div className="inputBx">
            {/**  <input type="submit" value="Sign in"/>*/}
            <button className="" onClick={userLogin}>
              Sign In
            </button>
          </div>
          <div className="inputBx">
            <p style={{ color: "red", fontSize: "15px" }}>{message}</p>
            {/* <p>
              <a href="#"> Forget Your Password ? </a>{" "}
            </p> */}

            <div className="with-gmail">
              <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
