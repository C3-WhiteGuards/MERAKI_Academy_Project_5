import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./footer.css";
import "./About";

export const Footer = () => {
  return (
    <div className="footerMain">
      <div className="copyRight">
        <h5> copyright © 2021 </h5>
      </div>
      <div className="iconDevMain">
        <FaInstagram icon={FaInstagram} className="facebook" />
        <FaFacebook icon={FaFacebook} className="facebook" />
        <FaTwitter icon={FaTwitter} className="facebook" />
      </div>

      <div className="Aboutfooter">
        <Link to="/boutUs"> About Us </Link>
        <Link to="/ourPolicy"> Our Policy</Link>
      </div> 
    </div>
  );
};
