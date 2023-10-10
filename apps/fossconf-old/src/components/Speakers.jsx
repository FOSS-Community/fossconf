import React, { useState } from "react";
import { motion } from "framer-motion";
import nikita from "../assets/nikita.jpg";
import Tushar from "../assets/tushar.jpg";
import Jatin from "../assets/Jatin.jpg";
import TusharGupta from "../assets/TusharGupta.jpg";
import { FaLinkedin, FaTwitter, FaLink } from "react-icons/fa";

const Speakers = () => {
  const [hoveredSpeakers, setHoveredSpeakers] = useState([]);

  const speakersData = [
    {
      name: "Nikita Sobolev ( Никита Соболев )",
      title: "CTO, wemake.services",
      image: nikita,
      link: "https://sobolevn.me/about/", // Link to Nikita's portfolio
      description:
        "Nikita Sobolev, a versatile CTO, mentor, and advocate for open source, with a passion for spreading knowledge and organizing conferences",
    },
    {
      name: "Tushar Sadhwani",
      title: "SDE II at DeepSource",
      image: Tushar,
      twitter: "https://twitter.com/tusharisanerd",
      linkedin: "https://www.linkedin.com/in/tusharsadhwani/",
      description:
        "Long term Python developer, author, technical reviewer and speaker. Writing static analysis tools @ DeepSource.",
    },
    {
      name: "Tushar Gupta",
      title: "SDE @Samagra",
      image: TusharGupta,
      twitter: "https://twitter.com/tushar5526",
      linkedin: "https://www.linkedin.com/in/tushar55/",
      description:
        "SDE at Samagra, GitHub Campus Ambassador, MLH Fellow for Fall'22, and Summer Fellow'22 at Processing Foundation.",
    },
    {
      name: "Jatin K Malik",
      title: "Principle SE @Atlassian",
      image: Jatin,
      twitter: "https://twitter.com/jatinkrmalik",
      linkedin: "https://www.linkedin.com/in/jatinkrmalik/",
      description:
        "Previous Positions Software Architect at Uber, Lead Software Engineer at Uber, SDE III at Synaptic, SDE II at Shuttl and SDE at Adobe.",
    },
  ];

  const sectionAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const speakerAnimation = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    transition: { duration: 0.3 },
  };

  return (
    <motion.section
      className="bg-gradient-to-b pb-36 from-gray-800 via-gray-700 to-gray-900 pt-32"
      variants={sectionAnimation}
      initial="initial"
      animate="animate"
      id="speaker"
    >
      <div className="container mx-auto text-center">
        <h2
          className="text-indigo-400 text-5xl font-extrabold glowing-line mb-12"
          style={{
            color: "#fff",
            textTransform: "uppercase",
            letterSpacing: "2px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Keynotes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakersData.map((speaker, index) => (
            <motion.div
              key={index}
              className={`bg-gray-900 p-6 rounded-lg shadow-lg`}
              variants={speakerAnimation}
              whileHover="hover"
              onMouseEnter={() => {
                setHoveredSpeakers((prevState) => [...prevState, index]);
              }}
              onMouseLeave={() => {
                setHoveredSpeakers((prevState) =>
                  prevState.filter((item) => item !== index)
                );
              }}
            >
              <div className="speaker-image-container relative">
                <motion.img
                  src={speaker.image || nikita}
                  alt={speaker.name}
                  className={`mx-auto mb-4 w-[22rem] ${
                    hoveredSpeakers.includes(index) ? "blur-image" : ""
                  }`}
                />
                {hoveredSpeakers.includes(index) && (
                  <div className="flex flex-row gap-8">
                    {speaker.link ? (
                      <a
                        href={speaker.link}
                        className="link-link-speaker"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLink />
                      </a>
                    ) : (
                      <>
                        <a
                          href={speaker.linkedin}
                          className="linkedin-link-speaker"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLinkedin />
                        </a>
                        <a
                          href={speaker.twitter}
                          className="twitter-link-speaker"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaTwitter />
                        </a>
                      </>
                    )}
                  </div>
                )}
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">
                {speaker.name || "Speaker Name"}
              </h3>
              <p className="text-gray-400 mb-2">{speaker.title || "Title"}</p>
              <p className="text-gray-300 text-sm leading-6">
                {speaker.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Speakers;
