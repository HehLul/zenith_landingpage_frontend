import kobe from "../assets/Zenith/kobe.jpeg";
import thomas from "../assets/Zenith/download.jpeg";
import jocko from "../assets/Zenith/jockomain.webp";
import john from "../assets/Zenith/Keanu Reeves.jpeg";
import david from "../assets/Zenith/mcgregor2.png";

function Hero() {
  return (
    <div className="flex flex-col items-center pt-12 pb-28 h-full">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-semibold font-roboto font-serif max-w-3xl text-center">
          Awaken the Giant Within Today
        </h1>
        <h2 className="text-2xl font-semibold max-w-3xl text-center mt-8">
          Leverage our curated tools to gain an unfair advantage amongst high
          achievers. Start your journey today and redefine your limits.
        </h2>
        <form className="flex gap-1 mt-5" action="https://hi" method="post">
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-lg"
          />
          <button className="bg-purple p-3 px-5 rounded-lg text-center">
            Subscribe
          </button>
        </form>
        <h3 className="text-left font-light text-base mt-2">
          Enter your best email to be first in line for Zenith's launch.
        </h3>
      </div>
      <div className="hidden">
        <img className="kobe" src={kobe} alt="Kobe Bryant" />
        <img className="thomas" src={thomas} alt="Thomas Edison" />
        <img className="jocko" src={jocko} alt="Jocko Willink" />
        <img className="john" src={john} alt="John Wick" />
        <img className="david" src={david} alt="David Goggins" />
      </div>
    </div>
  );
}

export default Hero;
