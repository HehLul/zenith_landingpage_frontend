import logo from "../assets/zenith-updated-removebg-preview.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="line"></div>
      <img className="logo" src={logo} alt="Logo" />
      <div className="line"></div>
    </div>
  );
}

export default Navbar;
