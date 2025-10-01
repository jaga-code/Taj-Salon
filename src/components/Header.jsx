import React from "react";


export default function Header() {
return (
<header>
<nav>
<a href="#top" aria-label="Home">Home</a>
<a href="#con-3">Services</a>
<a href="#con-4">Location</a>
<a href="#footer-contact">Contact</a>
</nav>
<div className="bnow">
<a href="#" onClick={(e)=>{e.preventDefault(); alert("Booking coming soon!");}}>Book Now</a>
</div>
</header>
);
}