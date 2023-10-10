import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Faq = ({ data }) => {
  const [isOpen, setIsOpen] = useState(Array(data.length).fill(false));

  const toggleContent = (index) => {
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[index] = !updatedIsOpen[index];
    setIsOpen(updatedIsOpen);
  };

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <section
      id="faq"
      className="text-white py-16 lg:py-24"
      data-aos="fade-up" // Specify the desired AOS animation type for the entire section
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold leading-tight text-[#0dff1c] mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {data.map((datas, index) => {
            return (
              <div
                key={index}
                className="border rounded-lg p-4 hover:shadow-lg transition duration-300 bg-[#1F2937]"
                data-aos="fade-up" // Specify the desired AOS animation type for each question
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">{datas.question}</h3>
                  <button onClick={() => toggleContent(index)}>
                    <svg
                      className={`w-6 h-6 transform transition-transform ${
                        isOpen[index] ? "rotate-180" : ""
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M10 15l5-5H5z" />
                    </svg>
                  </button>
                </div>
                {isOpen[index] && (
                  <p className="mt-4 text-gray-300">{datas.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
