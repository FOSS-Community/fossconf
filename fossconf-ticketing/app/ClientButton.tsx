"use client";
import { useState } from 'react';

const ClientButton = () => {
  const [loading, setLoading] = useState(false);

  const handleButtonClick = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/tickets", { method: "POST" });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.payment_url) {
        window.location.href = data.payment_url;
      } else {
        throw new Error('Payment URL not provided');
      }
    } catch (error) {
      console.error("Error:", error.message);
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleButtonClick}
      disabled={loading}
      className="px-4 py-2 border border-gray-400 bg-opacity-70 bg-gray-700 text-gray-100 rounded hover:bg-gray-600 active:bg-gray-800 focus:outline-none focus:border-gray-500 focus:ring focus:ring-gray-200"
    >
      {loading ? 'Processing...' : 'Buy Ticket'}
    </button>
  );
};

export default ClientButton;