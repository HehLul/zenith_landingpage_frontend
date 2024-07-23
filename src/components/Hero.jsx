import React from "react";
import kobe from "../assets/Zenith/kobe.jpeg";
import thomas from "../assets/Zenith/download.jpeg";
import jocko from "../assets/Zenith/jockomain.webp";
import john from "../assets/Zenith/Keanu Reeves.jpeg";
import david from "../assets/Zenith/e9c72fb6c3c84c8cf60e8fa31bec41b3.jpg";

function Hero() {
  return (
    <div className="hero">
      <div className="content">
        <h1>Embrace the Mindset of High Achievers Effortlessly</h1>
        <h2>
          Transform your beliefs and achieve your goals effortlessly with our
          app. Embrace the mindset of peak performers. Start living up to your
          potential today.
        </h2>
        <form action="https://hi" method="post">
          <input name="email" type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </form>
        <h3>Enter your best email to be first in line for Zenith's launch.</h3>
      </div>
      <img className="kobe" src={kobe} alt="Kobe Bryant" />
      <img className="thomas" src={thomas} alt="Thomas Edison" />
      <img className="jocko" src={jocko} alt="Jocko Willink" />
      <img className="john" src={john} alt="John Wick" />
      <img className="david" src={david} alt="David Goggins" />
    </div>
  );
}

export default Hero;
