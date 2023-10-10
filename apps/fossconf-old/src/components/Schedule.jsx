import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Schedule = () => {
  const scheduleRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true, 
    });
  }, []);

  return (
    <div className="pt-8">
      <section
        id="schedule"
        className="bg-[#000300] text-white antialiased"
        ref={scheduleRef}
        data-aos="fade-up"
      >
        <div className="max-w-screen-xl mx-auto py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold leading-tight text-[#0dff1c] tracking-tight">
              Event Schedule <span className="font-semibold">(Hall 1)</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto mt-8 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {" "}
              <div className="schedule-list-item p-4 bg-blue-900 hover:bg-blue-700 rounded-md shadow-md transition duration-300">
                <p className="schedule-time">11:00 AM - 11:30 AM</p>
                <h3 className="schedule-text">
                  <a className="cursor-pointer">Opening remarks</a>
                </h3>
              </div>
              <div className="schedule-list-item p-4 bg-green-900 hover:bg-green-700 rounded-md shadow-md transition duration-300">
                <p className="schedule-time">11:30 AM - 12:00 PM</p>
                <h3 className="schedule-text">
                  <a className="cursor-pointer">Panel Discussion on Topic Q</a>
                </h3>
              </div>
              <div className="schedule-list-item p-4 bg-purple-900 hover:bg-purple-700 rounded-md shadow-md transition duration-300">
                <p className="schedule-time">12:00 PM - 12:30 PM</p>
                <h3 className="schedule-text">
                  <a className="cursor-pointer">Workshop on Topic R</a>
                </h3>
              </div>
              <div className="schedule-list-item p-4 bg-red-900 hover:bg-red-700 rounded-md shadow-md transition duration-300">
                <p className="schedule-time">12:30 PM - 01:00 PM</p>
                <h3 className="schedule-text">
                  <a className="cursor-pointer">Lunch Break</a>
                </h3>
              </div>
              <div className="schedule-list-item p-4 bg-orange-900 hover:bg-orange-700 rounded-md shadow-md transition duration-300">
                <p className="schedule-time">01:00 PM - 01:30 PM</p>
                <h3 className="schedule-text">
                  <a className="cursor-pointer">Keynote Address</a>
                </h3>
              </div>
              <div className="schedule-list-item p-4 bg-yellow-900 hover:bg-yellow-700 rounded-md shadow-md transition duration-300">
                <p className="schedule-time">01:30 PM - 02:00 PM</p>
                <h3 className="schedule-text">
                  <a className="cursor-pointer">
                    Panel Discussion on Emerging Technologies
                  </a>
                </h3>
              </div>
              <div className="schedule-list-item p-4 bg-cyan-900 hover:bg-cyan-700 rounded-md shadow-md transition duration-300">
                <p className="schedule-time">02:00 PM - 02:30 PM</p>
                <h3 className="schedule-text">
                  <a className="cursor-pointer">
                    Updates from the Open Source Multimedia community
                  </a>
                </h3>
              </div>
              <div className="schedule-list-item p-4 bg-pink-900 hover:bg-pink-700 rounded-md shadow-md transition duration-300">
                <p className="schedule-time">02:30 PM - 03:00 PM</p>
                <h3 className="schedule-text">
                  <a className="cursor-pointer">Keynote Speech by Speaker B</a>
                </h3>
              </div>
              <div className="schedule-list-item p-4 bg-indigo-900 hover:bg-indigo-700 rounded-md shadow-md transition duration-300">
                <p className="schedule-time">03:00 PM - 03:30 PM</p>
                <h3 className="schedule-text">
                  <a className="cursor-pointer">Workshop on Topic X</a>
                </h3>
              </div>
              <div className="schedule-list-item p-4 bg-teal-900 hover:bg-teal-700 rounded-md shadow-md transition duration-300">
                <p className="schedule-time">03:30 PM - 04:00 PM</p>
                <h3 className="schedule-text">
                  <a className="cursor-pointer">Closing Remarks</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
