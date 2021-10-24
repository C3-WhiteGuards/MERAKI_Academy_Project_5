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

  return (
    <>
    <div className="commentPerant">
      <div className="container33">
        <div className="form44">
          <h4> Send us a Message</h4>
          <div className="container22">
            <textarea
              className="textareaaa"
              cols="30"
              rows="6"
              placeholder="Write you opinion . . .
              "
              onChange={(e) => {
                setComment(e.target.value);
              }}
            ></textarea>
            <div className="clearrr">
              <button
                type="submit"
                className="signupbtnn"
                onClick={createComment}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
