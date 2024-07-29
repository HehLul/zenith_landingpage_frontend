import kobe from "../assets/Zenith/kobe.jpeg";
import thomas from "../assets/Zenith/download.jpeg";
import jocko from "../assets/Zenith/miketyson.jpeg";
import john from "../assets/Zenith/Keanu Reeves.jpeg";
import david from "../assets/Zenith/gogginsnew.jpeg";

function Hero() {
  return (
    <div className="relative overflow-hidden h-screen bg-black text-white">
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="text-6xl font-semibold font-roboto font-serif max-w-3xl text-center">
          Embrace the Mindset of High Achievers Effortlessly
        </h1>
        <h2 className="text-2xl font-semibold max-w-3xl text-center mt-8">
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
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden flex items-center justify-center">
        <div className="relative flex w-full h-full">
          <div className="flex w-full h-full justify-center">
            <img
              className="flex-shrink-0 max-w-lg h-auto mx-4 my-4 sm:hidden block m-auto"
              src={john}
              alt="Jocko Willink"
            />
            <div className="hidden sm:flex md:hidden">
              {[john, thomas, jocko, kobe, david].map((src, index) => (
                <img
                  key={index}
                  className="flex-shrink-0 w-64 h-auto mx-4 opacity-75"
                  src={src}
                  alt={`Image ${index}`}
                />
              ))}
              {[kobe, thomas, jocko, john, david].map((src, index) => (
                <img
                  key={index + 5}
                  className="flex-shrink-0 w-64 h-auto mx-4"
                  src={src}
                  alt={`Image ${index + 5}`}
                />
              ))}
            </div>
            <div className="hidden md:flex lg:hidden justify-center">
              {[jocko, kobe, thomas].map((src, index) => (
                <img
                  key={index}
                  className="flex-shrink-0 w-64 h-auto mx-4"
                  src={src}
                  alt={`Image ${index}`}
                />
              ))}
            </div>
            <div className="hidden lg:flex">
              {[john, thomas, jocko, kobe, david].map((src, index) => (
                <img
                  key={index}
                  className="flex-shrink-0 w-64 h-auto mx-4 opacity-75"
                  src={src}
                  alt={`Image ${index}`}
                />
              ))}
              {[kobe, thomas, jocko, john, david].map((src, index) => (
                <img
                  key={index + 5}
                  className="flex-shrink-0 w-64 h-auto mx-4"
                  src={src}
                  alt={`Image ${index + 5}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
