import kobe from "../assets/Zenith/kobe.jpeg";
import thomas from "../assets/Zenith/download.jpeg";
import jocko from "../assets/Zenith/jockomain.webp";
import john from "../assets/Zenith/Keanu Reeves.jpeg";
import david from "../assets/Zenith/mcgregor2.png";

function Hero() {
  return (
    <div className="hero">
      <div className="flex flex-col">
        <h1 className="text-6xl font-semibold font-roboto font-serif">
          Awaken your Hidden Untapped Potential Today
        </h1>
        <h2 className="text-2xl font-semibold">
          Leverage our curated tools to gain an unfair advantage amongst high
          achievers. Start your journey today and redefine your limits.
        </h2>
        <form action="https://hi" method="post">
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="p-5 "
          />
          <button>Subscribe</button>
        </form>
        <h3 className="text-left font-light text-base">
          Enter your best email to be first in line for Zenith's launch.
        </h3>
      </div>
      <div className="images">
        <img className="kobe" src={kobe} alt="Kobe Bryant" className="w-60" />
        <img className="thomas" src={thomas} alt="Thomas Edison" />
        <img className="jocko" src={jocko} alt="Jocko Willink" />
        <img className="john" src={john} alt="John Wick" />
        <img className="david" src={david} alt="David Goggins" />
      </div>
    </div>
  );
}

export default Hero;
