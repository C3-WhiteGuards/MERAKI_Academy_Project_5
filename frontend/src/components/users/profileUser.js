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
      {/* <img className="imgProfile" src={profile && profile.image}/> */}
      <img className="imgProfile" src="data:image/jpeg;base64,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"/>
      <p className="details"><Phone className="details" /> Phone Number : {profile && profile.phoneNumber} </p>
      <p className="details"><Email className="details"/> Email :  {profile && profile.email}</p>
      <p className="details"><Place className="details"/> Country : {profile && profile.country}</p>
     </div>








      <div className="imgAndInfo" >
      
      <div className="middleDiv">
      <h4 className="NameOfUser" >{profile && profile.firstName+" "+profile.lastName }</h4> 
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
