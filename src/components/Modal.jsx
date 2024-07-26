// src/components/Modal.jsx
import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-50">
      <div className="bg-white text-black p-6 rounded-lg shadow-lg w-80 max-w-sm">
        <h2 className="text-xl font-semibold mb-4">
          Thank you for subscribing!
        </h2>
        <p className="mb-4">
          You have successfully subscribed to Zenith. Please check your inbox
          for a welcome email.
        </p>
        <button
          onClick={onClose}
          className="bg-purple text-white p-2 px-4 rounded-lg font-medium"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
