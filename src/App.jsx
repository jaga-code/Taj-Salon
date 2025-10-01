import React from "react";
import "./taj.css";
import Header from "./components/Header";
import Services from "./components/Services";
import Footer from "./components/Footer";


export default function App() {
return (
<div>
<Header />


{/* Hero / Banner (kept inline for now) */}
<section className="con-1" aria-label="Hero banner" />


{/* Video Section */}
<section className="con-2" aria-label="Intro video">
<div className="con-22">
<video
width="80%"
height="30%"
autoPlay
muted
loop
playsInline
style={{ borderRadius: 20, boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}
>
<source src="/images/Tajv.mp4" type="video/mp4" />
Your browser does not support this video tag.
</video>
</div>
</section>


{/* Services (now its own component) */}
<Services />


{/* Locations (kept inline for now) */}
<section className="con-4" id="con-4" aria-label="Our locations">
<div id="map">
<p className="mapp">location of our saloons</p>
<iframe
title="Taj Sultan Saloon Locations"
className="mapp"
src="https://www.google.com/maps/d/u/0/embed?mid=1Hb_IpKz5TRs_uIfdFtU0EzoT-apnNrg&ehbc=2E312F&noprof=1"
width="500"
height="480"
style={{ border: 0 }}
loading="lazy"
referrerPolicy="no-referrer-when-downgrade"
/>
</div>
<div>
<div className="con-41">location 1*</div>
<div className="con-41">location 2*</div>
<div className="con-41">location 3*</div>
</div>
</section>


<Footer />
</div>
);
}