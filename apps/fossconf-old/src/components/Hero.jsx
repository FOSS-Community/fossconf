import React from "react";
import { useSpring, animated } from "react-spring";
import { FaChevronDown } from "react-icons/fa";
import gif from "../assets/foss.gif";

const Hero = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="bg-[#000300] h-screen flex items-center relative"
      style={{
        backgroundImage: `url(${gif})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[rgba(0,50,0,0.6)] to-[rgba(0,50,0,0.6)] backdrop-blur-md z-10"></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col justify-center items-center text-center h-full gray-100 ">
          <animated.div className="w-full cursor-grab -mt-36" style={fadeIn}>
            <h1 className="text-3xl sm:text-6xl md:text-7xl font-Montserrat font-extrabold tracking-tight leading-none mb-4 text- ">
              <span className="bubble-animation">
                <animated.span className="bubble-animation-up">F</animated.span>
                <animated.span className="bubble-animation-down">
                  O
                </animated.span>
                <animated.span className="bubble-animation-up">S</animated.span>
                <animated.span className="bubble-animation-down">
                  S
                </animated.span>
                <animated.span className="bubble-animation-up">C</animated.span>
                <animated.span className="bubble-animation-down">
                  U
                </animated.span>
              </span>
              <span> CONFERENCE 2023</span>
            </h1>
            <p className="text-xl sm:text-2xl font-Montserrat font-bold text-gray-200 tracking-wider ">
              EXPLORING THE WORLD OF OPEN SOURCE: JOIN OUR CONFERENCE TODAY!
            </p>
          </animated.div>
          <div
            className="mt-4 text-center"
            onClick={() => scrollToSection("about")}
          >
            <FaChevronDown className="text-gray-100 text-4xl animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
