import React, { useState, useEffect } from "react";
import "./comment.css";
import axios from "axios";

export const AddComment = () => {
  const [comment, setComment] = useState("");

  const token = localStorage.getItem("token");

  const createComment = () => {
    axios
      .post(
        `http://localhost:5000/comment`,
        { comment },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   const getComment = () => {
  //     axios
  //       .get(
  //         `http://localhost:5000/feedback`,
  //         { headers: { Authorization: `Bearer ${token}` } }
  //       )
  //       .then((res) => {
  //         console.log(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  return (
    <div className="testArea">
      <textarea rows="4" cols="50"
        className="input-comment"
        placeholder="GIVE US YOUR OPEINE . . ."
        type="text"
        onChange={(e) => {
          setComment(e.target.value);
        }}
      ></textarea>
      <button className="buttonComment" onClick={createComment}>
        {" "}
        Send
      </button>
    </div>
  );
};
