import React from 'react';
import { FaInstagram ,FaFacebook , FaTwitter ,FaCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./footer.css"



export const Footer = () => {
	return <div className="footerMain">
		<div className="copyRight"> 
			<h5> copyRight <FaCopyright className="copyRight" classicon={FaCopyright}  /></h5>
		</div>
		<div className="iconDev">
		<FaInstagram className="Facebook" icon={FaInstagram} />
		<FaFacebook className="Facebook" icon={FaFacebook}  />
		<FaTwitter className="Facebook" icon={FaTwitter}  />
		</div>
		
 <div className="aboutus">
 <Link to="/boutUs"> About Us      </Link>
 <Link to="/ourPolicy"> Our Policy</Link>
 </div>
	</div>;
};


