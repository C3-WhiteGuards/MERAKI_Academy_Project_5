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
        width:"500px",
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
  const [profile, setProfile] = useState("");
  const [subRest, setSubRest] = useState("");
  const token = localStorage.getItem("token");
  const id = token.userId;

  useEffect(() => {
    axios
      .get("http://localhost:5000/users", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        setProfile(result.data[0]);
        console.log("user profile",result.data[0]);
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
        console.log("subRest",result.data.result[0]);
        setSubRest(result.data.result[0]);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const [subTrainer , setSubTrainer] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/subscribtion/TrainersSubscribtion", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        console.log("subTrainer",result.data.result[0]);
        setSubTrainer(result.data.result[0]);
        
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [subGym , setSubGym] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/subscribtion/GymSubscribtions", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        console.log("subTrainer",result.data.result[0]);
        setSubGym(result.data.result[0]);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

 


function dateDiffInDays(a) {
  const d = new Date();
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
  console.log(utc2/86400000 - utc1/86400000 , "ust");
  return Math.abs(Math.floor((utc2 - utc1) / 86400000));
}
//dateDiffInDays(new Date(elem&& elem.date_to.slice(0,10)))

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
 
  const AllSubscribtions = [subRest , subTrainer , subGym];

  const updateInfo = () =>{
    axios.put("http://localhost:5000/users", {age,phoneNumber,country,weight,height,diseases,}, {headers: {Authorization: `Bearer: ${token}`}} )
    .then((result)=>{
      console.log(result);
      closeModal()
      
    }).catch((err)=>{
      console.log("Error",err);
    });
  };
    
   /* style={{display:"grid" , height:"620px" , borderRadius:"5px"}} */
   

  return (
    <div className="userProfile" >
      

    
      <div className="leftdiv">
      <img className="imgProfile" src={profile && profile.image}/>
      <h4 className="NameOfUser" >{profile && profile.firstName+" "+profile.lastName }</h4> 
      
     </div>








      <div className="imgAndInfo" >
      
      <div className="middleDiv">
        <h5 className="details2"><Phone className="details2" /> Phone Number : {profile && profile.phoneNumber} </h5>
      <h5 className="details2"><Email className="details2"/> Email :  {profile && profile.email}</h5>
      <h5 className="details2"><Place className="details2"/> Country : {profile && profile.country}</h5>

      <h5 className="details2">Your Weight : {profile && profile.weight} Kg</h5>
      <h5 className="details2">Your Height: {profile && profile.height} cm</h5>
      <h5 className="details2">Your Age : {profile && profile.age} Years</h5>
      <h5 className="details2">Any Diseases History : {profile && profile.diseases}</h5>
    <Button onClick={openModal} variant="outline-dark" className="EditInfo" className="profileeeBtn"> Edit Info </Button>
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
      
        <input type="number" className="inputModal" placeholder="Your Phone" onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
      
        <input type="number" className="inputModal"placeholder="Weight"  onChange={(e)=>{setWeight(e.target.value)}}/>
        
        <input type="number" className="inputModal"placeholder="Height" onChange={(e)=>{setHeight(e.target.value)}}/>
        
        <input type="number" className="inputModal"placeholder="Your Age" onChange={(e)=>{setAge(e.target.value)}}/>
        
        <input type="text" className="inputModal"placeholder="Country" onChange={(e)=>{setCountry(e.target.value)}}/>
        <lebel className="lebelDiseases"> • Do you have any Diseases ?</lebel>
        <input type="text" className="inputModalDiseases" value={profile && profile.diseases} onChange={(e)=>{setDiseases(e.target.value)}} />
        <Button  variant="outline-dark" className="EnterInfo" onClick={updateInfo}>Enter</Button>
        </div>
        </Modal>
  </div>




















      <div className="AllSubscribtion">
        {AllSubscribtions.map((elem , i)=>{ console.log(elem);
          return( <>
          { elem !== undefined?( <fieldset className="restaurantSubscirption">
            <legend className="titleSubscription">{" "} </legend>
          <p className="nameSub" style={{margin:"0px" , padding:"0px"}}>{elem && elem.name }</p>
           

           <div style={{marginLeft:"20px" , padding:"0px"}}> 
            
         <Image src={elem && elem.image} roundedCircle style={{width:"30px" , height:"30px" , borderRadius:"100%" }} />

          <ProgressBar variant="dark" animated now={3.3*dateDiffInDays(new Date(elem&& elem.date_to.slice(0,10)))}  label={`${ dateDiffInDays(new Date(elem&& elem.date_to.slice(0,10)))} day`} className="progress" style={{marginLeft:"40px" , padding:"0px"}} />
         
          </div>
          <div className="ExpierDate" style={{marginLeft:"20px"  , padding:"0px"}}> Expier Date: {elem && elem.date_to.slice(0,10)}</div>
      </fieldset>) : (<div></div>)

                      }
           
         </> )
        })
          }
        
      
      </div>
    </div>
  );
};
