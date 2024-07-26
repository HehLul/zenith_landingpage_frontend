import logo from "../assets/zenith-thin-2.png";

function Last() {
  return (
    <div className="mt-20 pb-12 px-4 sm:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between md:justify-around">
        <div className="mt-8 md:mt-0 flex flex-col items-center md:items-start">
          <img className="w-32 md:w-40" src={logo} alt="Zenith" />
          <div className="ml-2 mt-4 text-center md:text-left">
            <h4 className="text-2xl md:text-3xl font-semibold">
              Join the Transformation!
            </h4>
            <p className="max-w-md md:max-w-xl text-lg font-semibold mt-4">
              Ready to elevate your life with Zenith? Subscribe to stay updated
              on our launch and receive transformative insights straight to your
              inbox.
            </p>
          </div>
        </div>
        <form
          className="flex flex-col sm:flex-row gap-2 mt-8 md:mt-0"
          action="https://hi"
          method="post"
        >
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
      </div>
    </div>
  );
}

export default Last;
