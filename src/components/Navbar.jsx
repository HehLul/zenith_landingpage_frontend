import logo from "../assets/zenith-thin-2.png";

function Navbar() {
  return (
    <div className="flex flex-col items-center p-1 md:p-5 lg:p-5">
      <img className="h-20 " src={logo} alt="Logo" />
      <div className="w-full  border-b-2 p-1"></div>
    </div>
  );
}

export default Navbar;
