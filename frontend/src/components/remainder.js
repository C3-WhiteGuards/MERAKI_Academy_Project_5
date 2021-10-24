import React, { useEffect, useState } from "react";

import axios from "axios";


//const [user , setUser] = useState();


const date = new Date();
const d = date.getMinutes()
console.log("minute" , d);

const token = localStorage.getItem("token");

export const Remainder = ()=>{
const [email , setEmail] = useState();
useEffect(()=>{

    

    if (d !== 252){
  axios.get('http://localhost:5000/sendEmail' , {
    headers: { Authorization: `Bearer ${token}` },
  }).then((result) => {
    setEmail(result);
    console.log("em ",result);
  })
  .catch((err) => {
    console.log(err);
  });
}}, [])


    return(<></>)
}