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
      {review &&
        review.map((element, index) => {
          return (
            <>
              {index % 2 == 0 ? (
                <div className="divRev">
                  <div className="inforReview">
                <img src="data:image/png;base64,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" />
                <h5>{element.firstName}</h5>
                  <h5>{element.comment}</h5>
                  </div>
                  <div className="imgReview">
                  <img
                    
                    src="https://img.freepik.com/free-vector/application-rating-customer-user-reviews-5-stars-website-ranking-system-positive-feedback-evaluate-votes-flat-vector-illustration_128772-882.jpg?size=626&ext=jpg"
                  />
                  </div>
                </div>
              ) : (
                <div className="divRev">
                   <div className="imgReview">
                  <img 
                   
                    src="https://img.freepik.com/free-vector/application-rating-customer-user-reviews-5-stars-website-ranking-system-positive-feedback-evaluate-votes-flat-vector-illustration_128772-882.jpg?size=626&ext=jpg"
                  />
                  </div>
                  <div className="inforReview">
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
