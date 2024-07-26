import kobe from "../assets/Zenith/kobe.jpeg";
import thomas from "../assets/Zenith/download.jpeg";
import jocko from "../assets/Zenith/jockomain.webp";
import john from "../assets/Zenith/Keanu Reeves.jpeg";
import david from "../assets/Zenith/mcgregor2.png";

function Hero() {
  return (
    <div className="relative overflow-hidden h-screen bg-black text-white">
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
        <h1 className="text-6xl font-semibold font-roboto font-serif max-w-3xl text-center mb-4">
          Awaken the Giant Within Today
        </h1>
        <h2 className="text-2xl font-semibold max-w-3xl text-center mt-4">
          Leverage our curated tools to gain an unfair advantage amongst high
          achievers. Start your journey today and redefine your limits.
        </h2>
        <form className="flex flex-col sm:flex-row gap-2 mt-8">
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-lg text-black w-full sm:w-60 text-lg"
          />
          <button className="bg-purple p-3 px-5 rounded-lg text-center font-medium text-lg transform transition-transform duration-300 hover:scale-110">
            Subscribe
          </button>
        </form>
        <h3 className="text-left font-light text-base mt-2 sm:max-w-screen-sm">
          Enter your best email to be first in line for Zenith's launch.
        </h3>
      </div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="relative w-full h-full flex">
          <div className="absolute top-0 left-0 flex w-full h-full animate-scroll">
            <img className="w-64 h-auto mx-5" src={kobe} alt="Kobe Bryant" />
            <img
              className="w-64 h-auto mx-5"
              src={thomas}
              alt="Thomas Edison"
            />
            <img className="w-64 h-auto mx-5" src={jocko} alt="Jocko Willink" />
            <img className="w-64 h-auto mx-5" src={john} alt="John Wick" />
            <img className="w-64 h-auto mx-5" src={david} alt="David Goggins" />
            <img className="w-64 h-auto mx-5" src={kobe} alt="Kobe Bryant" />
            <img
              className="w-64 h-auto mx-5"
              src={thomas}
              alt="Thomas Edison"
            />
            <img className="w-64 h-auto mx-5" src={jocko} alt="Jocko Willink" />
            <img className="w-64 h-auto mx-5" src={john} alt="John Wick" />
            <img className="w-64 h-auto mx-5" src={david} alt="David Goggins" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
