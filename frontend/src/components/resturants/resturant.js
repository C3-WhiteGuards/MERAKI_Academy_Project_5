import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
export const Resturants =()=>{

const [resturants ,setResturants ]= useState([]);
useEffect(() => {
axios.get("http://localhost:5000/resturan").then((res) => {
    console.log(res.data.result);
setResturants([...res.data.result])
    
}).catch((error)=>{
    console.log(error.response);
})
},[])

return (

    <div id="resturants">
        <div>
        {
        resturants && 
        resturants.map((Element,i)=>{
return (<div key={i}>
    <h1>{Element.name}</h1>
    <h3>{Element.location}</h3>
<h2>{Element.image}</h2>
<h2>{Element.monthlyPrice}</h2>
<h2>{Element.rate}</h2>

<button>subscribe</button>

</div>
                 )
             })
         }
      </div>
    </div>
  );
};
