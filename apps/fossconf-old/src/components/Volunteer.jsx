import React from "react";
import logo from "../assets/fosscu.png";
import back from "../assets/back.png";

const Volunteer = () => {
  return (
    <div>
      <div className="bg-green-900 ">
        <div className="w-56 ml-60 pt-6 flex flex-row items-center justify-center">
          <a href="/" className="mb-4">
            <img src={logo} alt="pydelhi logo" className="w-16"/>
          </a>
        </div>
      </div>
      <a href="/" className="flex gap-2 ml-4 text-blue-800 mt-1 text-lg hover:underline">
        <img src={back} className="w-6" alt="" />
        <span> Get back to Homepage</span>
      </a>
      <div className="flex mt-12 flex-row justify-center items-center">
        <ul className="list-disc  text-lg font-Montserrat font-semibold">
          <li className="cursor-grab">Kanishk Pachauri</li>
          <li className="cursor-grab">Shivam Yadav</li>
        </ul>
      </div>
    </div>
  );
};

export default Volunteer;
