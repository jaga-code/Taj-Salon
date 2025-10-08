import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header>
			<nav>
				<Link to="/" aria-label="Home">Home</Link>
				<a href="#con-3">Services</a>
				<a href="#con-4">Location</a>
				<a href="#footer-contact">Contact</a>
			</nav>
			<div className="bnow">
				<Link to="/book">Book Now</Link>
			</div>
		</header>
	);
}