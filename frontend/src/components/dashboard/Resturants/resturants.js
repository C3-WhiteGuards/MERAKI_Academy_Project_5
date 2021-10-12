
import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";


export const AddNewResturant =()=>{

    const [name ,setName] = useState ("")
 const [location , setLocation ] = useState ("")
const [image , setImage] = useState ("")
 const [monthlyPrice , setMonthlyPrice] = useState ("")
 const [rate , setRate ] = useState ("")

 const newResturant =()=>{
    axios
    .post("http://localhost:5000/resturan",{
        name,
location,
image,
monthlyPrice,
rate
    }).then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return ( <div>
    <input
      placeholder="name"  type="text"  onChange={(e) => {setName(e.target.value)
      }}
      ></input>

<input
      placeholder="location"  type="text"  onChange={(e) => {setLocation(e.target.value)
      }}
      ></input>

<input
      placeholder="image"  type="text"  onChange={(e) => {setImage(e.target.value)
      }}
      ></input>


<input
      placeholder="monthlyPrice"  type="text"  onChange={(e) => {setMonthlyPrice(e.target.value)
      }}
      ></input>

<input
      placeholder="rate"  type="text="  onChange={(e) => {setRate(e.target.value)
      }}
      ></input>
 <button
        onClick={() => {newResturant()}}
        >
             {" "}
             Add resturant 
             </button>

</div>
  );
};