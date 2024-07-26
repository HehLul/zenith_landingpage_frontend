// src/App.js
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Why from "./components/Why";
import Features from "./components/Features";
import Last from "./components/Last";
import Footer from "./components/Footer";
import Modal from "./components/Modal"; // Import the Modal component
import ReactGa from "react-ga";
import.meta.env;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    ReactGa.initialize("G-8J3NQ53M00");
    ReactGa.pageview("/");
  }, []);

  useEffect(() => {
    const handleFormSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const emailInput = form.querySelector('input[name="email"]');
      const email = emailInput ? emailInput.value : "";

      console.log(email);

      const emailApi = process.env.VITE_API_URL + "/email";

      fetch(emailApi, {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
        .then(() => {
          setIsModalOpen(true); // Open the modal on successful submission
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    const forms = document.querySelectorAll("form");
    forms.forEach((form) => {
      form.addEventListener("submit", handleFormSubmit);
    });

    return () => {
      forms.forEach((form) => {
        form.removeEventListener("submit", handleFormSubmit);
      });
    };
  }, []);

  useEffect(() => {
    const options = { threshold: 0.1 };
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    const targets = document.querySelectorAll(
      ".why > .text, .features > h2, .features-container > .feature"
    );
    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, []);

  return (
    <div className="bg-black text-white px-4 lg:px-16">
      <Navbar />
      <Hero />
      <Why />
      <Features />
      <Last />
      <Footer />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Subscription Success"
      >
        <p>
          Thank you for subscribing to Zenith! Please check your inbox for a
          welcome email.
        </p>
      </Modal>
    </div>
  );
}

export default App;
