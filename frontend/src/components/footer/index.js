import React from 'react';
import { FaInstagram ,FaFacebook , FaTwitter ,FaCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./footer.css"
import "./About"



export const Footer = () => {
	return <div className="footerMain">
		<div className="copyRight"> 
			<h5 className="copyrigh" style={{fontSize:"17px"}}> copyright © 2021 </h5>
		</div>
		<div className="iconDev">
		<FaInstagram className="Facebook" icon={FaInstagram} />
		<FaFacebook className="Facebook" icon={FaFacebook}  />
		<FaTwitter className="Facebook" icon={FaTwitter}  />
		</div>
		
 <div className="aboutus0">
 <Link to="/boutUs"> About Us      </Link>
 <Link to="/ourPolicy"> Our Policy</Link>
 </div>
	</div>;
};


