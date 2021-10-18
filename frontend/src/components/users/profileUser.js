import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import './profile.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {ProgressBar , Button , Image } from 'react-bootstrap';
import {Place , Phone  , Email, Cancel } from "@mui/icons-material";
import Modal from "react-modal";

const customStyles = {
    content: {
        width:"400px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "5px",
      backgroundColor: "white",
        overlay: {
          backgroundColor: "#ffffff",
        },
    },
  };
  

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
        console.log(result.data[0]);
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


  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
    console.log("rashed modal");
  }

  function afterOpenModal() {
    // subtitle.style.color = "black";
    // subtitle.style.textAlign = "center";
    // subtitle.style.fontFamily = "bold";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [age , setAge] = useState(0);
  const [phoneNumber , setPhoneNumber] = useState(0);
  const [country , setCountry] = useState("");
  const [weight , setWeight] = useState(0);
  const [height , setHeight] = useState(0);
  const [ diseases , setDiseases] = useState("");
  const history = useHistory();
  

  const updateInfo = () =>{
    axios.put("http://localhost:5000/users", {age,phoneNumber,country,weight,height,diseases,}, {headers: {Authorization: `Bearer: ${token}`}} )
    .then((result)=>{
      console.log(result);
      closeModal()
      
    }).catch((err)=>{
      console.log("Error",err);
    });
  };
    
   
   

  return (
    <div className="userProfile">
      
      <div style={{display:"grid"}}>
      <img className="imgProfile" src={profile && profile.image}/>
       <div className="mainDetails">
      <p className="details"><Phone/>{profile && profile.phoneNumber}</p>
      <p className="details"><Email/> {profile && profile.email}</p>
      <p className="details"><Place/> {profile && profile.country}</p>
      </div>
      </div>
      <div className="imgAndInfo">
      <p className="NameOfUser">{profile && profile.firstName+" "+profile.lastName }</p> 
      <div className="AllInfo"> 
      <div style={{display:"grid"}}>
      <div style={{display:"flex" , gap:"100px" , margin:"50px" , width:"600px"}} className="secondDetails">
       <div>  
      <p className="details">Weight: {profile && profile.weight} Kg</p>
      <p className="details">Diseases: {profile && profile.diseases}</p>
      </div>
      <div>
      <p className="details">height: {profile && profile.height} cm</p>
      <p className="details">Age: {profile && profile.age} Years</p>
      </div> 
      </div>
      <Button onClick={openModal} variant="outline-dark" className="EditInfo">Edit Info</Button>
      </div>
      
      
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        
          <Cancel onClick={closeModal} className="closeButton"/>
        
        <div className="AllInputs">
            
        <input type="number" className="inputModal" placeholder=" Your Phone" onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
        <input type="number" className="inputModal" placeholder=" Your weiget" onChange={(e)=>{setWeight(e.target.value)}}/>
        <input type="number" className="inputModal"placeholder=" Your heigest" onChange={(e)=>{setHeight(e.target.value)}}/>
        <input type="number" className="inputModal"placeholder=" Your Age" onChange={(e)=>{setAge(e.target.value)}}/>
        <input type="text" className="inputModal"placeholder=" Country" onChange={(e)=>{setCountry(e.target.value)}}/>
        <lebel className="lebelDiseases"> • Do you have any Diseases ?</lebel>
        <input type="text" className="inputModalDiseases" onChange={(e)=>{setDiseases(e.target.value)}} />
        <Button  variant="outline-dark" className="EnterInfo" onClick={updateInfo}>Enter</Button>
        </div>
        
      </Modal>

      
      
      </div>
      </div>
      <fieldset className="restaurantSubscirption">
      <legend className="titleSubscription">{" "}Restaurant Subscription</legend>
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
