import React from "react";

function Footer() {
  return (
    <>
      <div className="w-full  border-b-2 p-1"></div>
      <div className="flex justify-around p-2">
        <p>
          If the form doesn't work, please contact us at{" "}
          <a href="mailto:zenithteamzt@gmail.com" className="border-b-2">
            zenithteamzt@gmail.com
          </a>
        </p>
        <p>&copy;2024 Zenith. All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer;
