import { useEffect, useState, useRef } from "react";
import atomicHabits from "../assets/Zenith/AtomicHabits_IdentityDiagram2.png";

function Why() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "0px", // Adjust margin if neededs
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`flex flex-col md:flex-row gap-10 items-center justify-center mt-8 md:mt-24 lg:mt-32 px-4 md:px-8 ${
        visible ? "fade-in-up" : ""
      }`}
    >
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl md:text-4xl font-bold">
          Why Start Your Journey with Zenith?
        </h2>
        <h4 className="text-lg md:text-lg font-medium mt-5">
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
        className="w-full md:w-1/2 h-auto"
        src={atomicHabits}
        alt="Atomic Habits Identity Diagram"
      />
    </div>
  );
}

export default Why;
