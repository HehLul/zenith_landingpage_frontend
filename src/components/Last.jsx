import logo from "../assets/zenith-thin-2.png";

function Last() {
  return (
    <div className="mt-20 pb-24">
      <div className="flex items-center justify-around">
        <div className="mt-8">
          <img className="w-40" src={logo} alt="Zenith" />
          <div className="ml-2">
            {" "}
            <h4 className="text-3xl font-semibold mt-4">
              Join the Transformation!
            </h4>
            <p className="max-w-xl text-lg font-semibold mt-4">
              Ready to elevate your life with Zenith? Subscribe to stay updated
              on our launch and receive transformative insights straight to your
              inbox.
            </p>
          </div>
        </div>
        <form className="flex gap-2 mt-auto " action="https://hi" method="post">
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-lg text-black w-60 text-lg"
          />
          <button className="bg-purple p-3 px-5 rounded-lg text-center font-semibold text-lg">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Last;
