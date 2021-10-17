import axios from "axios";
import React, { useEffect, useState } from "react";
import './profile.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {ProgressBar , Button , Image , Modal} from 'react-bootstrap';
import {Place , Phone , SportsScore , StarBorder, Email } from "@mui/icons-material";

export const ProfileUser = () => {
  const [profile, setProfile] = useState();
  const [subRest, setSubRest] = useState();
  const token = localStorage.getItem("token");
  const id = token.userId;

  useEffect(() => {
    axios
      .get("http://localhost:5000/users", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        setProfile(result.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/subscribtion/ResturantsSubscribtion", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        console.log(result.data.result[0]);
        setSubRest(result.data.result[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

 


function dateDiffInDays(a) {
  const d = new Date();
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
  return Math.floor((utc2 - utc1) / 86400000);
}


      const a = new Date("2021-11-16")
      console.log(dateDiffInDays(a));
    
   
   

  return (
    <div className="userProfile">
      
      <div style={{display:"grid"}}>
      <img className="imgProfile" src="https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
       <div className="mainDetails">
      <p className="details"><Phone/> 0777522486</p>
      <p className="details"><Email/> shanbol@gmail.com</p>
      <p className="details"><Place/> Jordan</p>
      </div>
      </div>
      <div className="imgAndInfo">
      <p className="NameOfUser">Rashed Migdady</p> 
      <div className="AllInfo"> 
     
      <div style={{display:"flex" , gap:"100px" , margin:"50px" , border:"solid red 2px" , width:"600px"}} className="secondDetails">
       <div>  
      <p className="details">Weight: 80 Kg</p>
      <p className="details">Diseases :  Diseases1,Diseases2</p>
      </div>
      <div>
      <p className="details">height: 160 cm</p>
      <p className="details">Age : 52 Years</p>
      </div> 
      <Button variant="outline-dark" className="EditInfo">Edit Info</Button>
      {/*  */}
      {/* <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Modal body text goes here.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog> */}

      {/*  */}
      </div>
      </div>
      </div>
      <fieldset className="restaurantSubscirption">
      <legend className="titleSubscription">{" "}Resturants Subscribtion</legend>
          <p>{subRest && subRest.name}</p>
           

           <div style={{display:"flex" , gap:"20px" , paddingLeft:"10px"}}> 
            
         <Image src={subRest && subRest.image} roundedCircle style={{width:"30px" , height:"30px" , borderRadius:"100%" }} />

          <ProgressBar variant="dark" animated now={Math.abs( 3.3*dateDiffInDays(new Date(subRest&& subRest.date_to.slice(0,10))))}  label={`${Math.abs( dateDiffInDays(new Date(subRest&& subRest.date_to.slice(0,10))))} day`} className="progress" />
         
          </div>
          <div className="ExpierDate"> Expier Date: {subRest && subRest.date_to.slice(0,10)}</div>
      </fieldset>
    </div>
  );
};
