import React from "react";
import logo from "../assets/Zenith-removebg-preview.png";

function Last() {
  return (
    <div className="last">
      <div className="content">
        <img src={logo} alt="Zenith" />
        <h4>Join the Transformation!</h4>
        <p>
          Ready to elevate your life with Zenith? Subscribe to stay updated on
          our launch and receive transformative insights straight to your inbox.
        </p>
      </div>
      <form action="https://hi" method="post">
        <input name="email" type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </form>
    </div>
  );
}

export default Last;
