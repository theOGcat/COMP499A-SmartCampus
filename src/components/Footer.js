import React from "react";
import "./FooterStyles.css";

const Footer = () => (
  <div className="footer">
    <p1>This is some content in sticky footer</p1>
	<div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>University Of Windsor</h4>
  	 			<ul>
  	 				<li><a href="/About">about us</a></li>
  	 				
  	 				
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="http://ask.uwindsor.ca/">FAQ</a></li>
  	 				
  	 				
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Account</h4>
  	 			<ul>
  	 				<li><a href="https://www.uwindsor.ca/current-students">Manage Account</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="https://www.facebook.com/UWindsor/"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="https://twitter.com/uwindsor"><i class="fab fa-twitter"></i></a>
  	 				<a href="https://twitter.com/uwindsor"><i class="fab fa-instagram"></i></a>
  	 				
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </div>
);

export default Footer;