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
    <div>
      <input
        className="input-comment"
        placeholder="comment"
        type="text"
        onChange={(e) => {
          setComment(e.target.value);
        }}
      ></input>
      <button className="buttonComment" onClick={createComment}>
        {" "}
        Send
      </button>
    </div>
  );
};
