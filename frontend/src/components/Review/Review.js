import React, { useState, useEffect } from "react";
import axios from "axios";
import "./review.css";

export const Review = () => {
  const [review, setAllReview] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/comment")
      .then((res) => {
        console.log(res.data);
        setAllReview(res.data.comment);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  return (
    <div className="review">
      <div className="hdrrev">
      
      {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQryFgRbAorc_TxDWs0eEE4C5L253-yPQbiecjp0OjMscEtGEc5-3orRQazBM3Fm8vonyo&usqp=CAU" /> */}
      <h3  className="reh3"> Customers Review</h3>
      <h5 className="reh5"> what our Customers say about us </h5>
     
      </div>
      {review &&
        review.map((element, index) => {
          return (
            <>
              {index % 2 == 0 ? (
                <div className="divRev">
                  <div className="inforReview">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"/>
                <h5>{element.firstName}</h5>
                  <h5>{element.comment}</h5>
                  </div>
                  <div className="imgReview">
                  <img
                    
                    src="https://www.pngall.com/wp-content/uploads/2018/04/Gym-Free-Download-PNG.png" 
                  />
                  </div>
                </div>
              ) : (
                <div className="divRev">
                   <div className="imgReview">
                  <img 
                   
                    src="https://www.pngall.com/wp-content/uploads/2018/04/Gym-Free-Download-PNG.png"
                  />
                  </div>
                  <div className="inforReview">
                   <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                <h5>{element.firstName}</h5>
                  <h5>{element.comment}</h5>
                  </div>
                </div>
              )}
            </>
          );
        })}
    </div>
  );
};
