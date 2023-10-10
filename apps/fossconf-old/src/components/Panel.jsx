import React from "react";
import { motion } from "framer-motion";
import Shreya from "../assets/Shreya.png";
import Swastika from "../assets/Swastika.png";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useState } from "react";

const PanelTitle = ({ title }) => {
  return (
    <div className="text-center mb-8">
      <h3 className="text-3xl font-semibold text-white">{title}</h3>
    </div>
  );
};

const Panel = () => {
  const [hoveredSpeakers, setHoveredSpeakers] = useState([]);

  const panelData = {
    title: "INNOVATING LIKE ADA: WOMEN IN TECH BREAKTHROUGHS",
    description:
      "Join us for an inspiring panel discussion on the incredible breakthroughs and innovations made by women in the tech industry. Our esteemed panelists will share their experiences, insights, and success stories.",
    speakers: [
      {
        name: "Shreya Prasad",
        title: "SDE @Atlassian",
        description:
          "Software Development Engineer @Atlassian | Prev: Intuit, BNY Mellon | GitHub Campus Expert'21 | GSoC’21, GCI’19 Mentor @CircuitVerse",
        image: Shreya,
        linkedin: "https://www.linkedin.com/in/-shreya-prasad/",
        twitter: "https://twitter.com/shreyacasmalert",
      },
      {
        name: "Swastika Yadav",
        title: "Developer Advocate @Rig_dev",
        description:
          "Prev: @tursodatabase | Tweeting about Javascript, Web Development, Communities, Remote jobs, Travel",
        image: Swastika,
        linkedin: "https://www.linkedin.com/in/swastika15/",
        twitter: "https://twitter.com/swastika0015",
      },
    ],
  };

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
      className="bg-gradient-to-b pb-24 from-gray-800 via-gray-700 to-gray-900 pt-32"
      variants={sectionAnimation}
      initial="initial"
      animate="animate"
      id="panel"
    >
      <div className="container mx-auto text-center">
        <h2
          className="text-indigo-400 text-5xl font-extrabold glowing-line mb-6"
          style={{
            color: "#fff",
            textTransform: "uppercase",
            letterSpacing: "2px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Panel
        </h2>

        {/* Use the PanelTitle component for each panel discussion */}
        <PanelTitle title={panelData.title} />

        <p className="text-gray-300 text-lg leading-7 mb-8">
          {panelData.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {panelData.speakers.map((speaker, index) => (
            <motion.div
              key={index}
              className={` p-6 rounded-lg shadow-lg`}
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
              <div className="speaker-image-container">
                <motion.img
                  src={speaker.image || nikita}
                  alt={speaker.name}
                  className={`mx-auto mb-4 w-[22rem] rounded-full ${
                    hoveredSpeakers.includes(index) ? "blur-image" : ""
                  }`}
                />
                {hoveredSpeakers.includes(index) && (
                  <div className="flex flex-row gap-8">
                    <a
                      href={speaker.linkedin}
                      className="linkedin-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href={speaker.twitter}
                      className="twitter-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter />
                    </a>
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

export default Panel;
