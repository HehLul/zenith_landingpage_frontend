import atomicHabits from "../assets/Zenith/AtomicHabits_IdentityDiagram2.png";

function Why() {
  return (
    <div className="flex gap-10 items-center justify-center mt-2 md:mt-24 lg:mt-60">
      <div className="w-1/2">
        <h2 className="text-4xl font-bold">
          Why Start Your Journey with Zenith?
        </h2>
        <h4 className="text-lg font-medium mt-5">
          Many ambitious men struggle with discipline and focus.
          Self-improvement attempts often lead to temporary success, but old
          habits soon resurface.
          <br />
          <br />
          At Zenith, our mission is to transform your identity, not just your
          habits.
          <br />
          <br />
          This idea, inspired by James Clear, emphasizes that real change begins
          with reshaping who you are. Our curated tools help you uncover the
          hidden high achiever within, accelerating your journey to high
          performance and success.
        </h4>
      </div>
      <img
        className="h-1/3"
        src={atomicHabits}
        alt="Atomic Habits Identity Diagram"
      />
    </div>
  );
}

export default Why;
