import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './OneTrainer.css';





export const OneTrainer = () => {
    const [trainer, setTrainer] = useState(0);
  
    let id_e = useParams().id;
  
    useEffect(async () => {
     await axios
        .get(`http://localhost:5000/trainer/${id_e}`)
        .then((res) => {
          setTrainer(res.data.Trainer);
          console.log(res.data.Trainer);
        })
        .catch((err) => {
          console.log(err);
        });
    },[]);
  
    return (
      <div className="profileTrainer">
          <div style={{display:"flex"}}>
         <div >
        <h1 className="sport">football</h1>
        <div id="curvearrow"></div>
        <p className="description"> raghdj kjsdhkhsdj khdkfjhk skjhdkjvhkj khvkjeb kjhdkfk kjhdfk </p>
         </div> 
         <div className="imgDetails">
             <img className="imge" src='https://prod-we-cdn-media.puregym.com/media/795867/ellen.jpeg?center=0.30276381909547739,0.46333333333333332&mode=crop&width=180&height=180'/>
             <div className="details" >
                 <p>Phone 0777754545</p>
                 <a href="#">Location</a>
                 <p>Monthly subscription 20JD</p>
                 <p> Experience 20 years</p>
             </div>
         </div>
         </div>  
         <button>subscribtion</button>  
      </div>
    );
  };