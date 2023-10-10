import React from "react";
import logo from "../assets/fosscu.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div>
      <footer className="mt-12 bg-[#000300] sm:p-6  p-4">
        <div className="mx-auto max-w-screen-xl">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="" className="flex items-center">
                <a
                  href=""
                  className="flex flex-row justify-center items-center"
                >
                  <img src={logo} className="w-16" alt="pydelhi Logo" />
                  <h1 className="pl-4 text-2xl font-semibold tracking-wide">
                    FOSSCU
                  </h1>
                </a>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-1 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold  uppercase ">
                  Contact us
                </h2>
                <ul className=" ">
                  <li className="mb-4 hover:underline hover:">
                    <a href="" target="blank" rel="noopener noreferrer">
                      {" "}
                      Discord
                    </a>
                  </li>
                  <li className="hover:underline hover:">
                    <a href="" target="blank" rel="noopener noreferrer">
                      {" "}
                      Telegram
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold  uppercase ">
                  Follow us
                </h2>
                <ul className=" ">
                  <li className="mb-4 hover:underline hover:">
                    <a href="" target="blank" rel="noopener noreferrer">
                      Github
                    </a>
                  </li>
                  <li className="hover:underline hover:">
                    <a href="" target="blank" rel="noopener noreferrer">
                      Youtube
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold  uppercase ">
                  Legal
                </h2>
                <ul className=" ">
                  <li className="mb-4 hover:underline hover: cursor-pointer">
                    <a
                      onClick={() => scrollToSection("community")}
                      target="blank"
                      rel="noopener noreferrer"
                    >
                      Community Partnership
                    </a>
                  </li>
                  <li className="hover:underline hover: cursor-pointer">
                    <a
                      onClick={() => scrollToSection("code")}
                      target="blank"
                      rel="noopener noreferrer"
                    >
                      Code of Conduct
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
          <div className="-translate-y-6 font-Montserrat tracking-tight font-medium">
            <p>
              Made with 💚 &
              <a
                href="https://fosscu.org/"
                target="blank"
                rel="noopener noreferrer"
              >
                <span className="font-semibold cursor-pointer text-blue-700 hover:no-underline underline">
                  {" "}
                  FOSSCU
                </span>
              </a>
            </p>
            <Link
              to={"/volunteer"}
              className="text-blue-700 font-semibold underline hover:no-underline"
            >
              Volunteers
            </Link>
          </div>
          <div className="lg:w-1/2 md:w-2/3  mx-auto mb-8">
            <div className="flex sm:-translate-y-5 justify-center  md:space-x-12 lg:space-x-14 xl:space-x-20 space-x-6">
              <div className="w-12 h-10 hover:fillc  flex flex-col items-center">
                <a
                  href="https://twitter.com/fosscuk"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-8  hover:fill-current hover:w-12 hover:h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>

              <div className="w-12 h-10 hover:fillc  flex flex-col items-center">
                <a
                  href="https://github.com/FOSS-Community/"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-8  hover:fill-current hover:w-12 hover:h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>

              <div className="w-12 h-10 hover:fillc  flex flex-col items-center">
                <a href="" target="blank" rel="noopener noreferrer">
                  <svg
                    className="w-12  hover:fill-current hover:w-14 hover:h-14"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
                      fill="white"
                    ></path>{" "}
                  </svg>
                </a>
              </div>

              <div className="w-12 h-10 hover:fillc  flex flex-col items-center">
                <a
                  href="https://www.instagram.com/fosscu/"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-10  hover:fill-current hover:w-12 hover:h-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />{" "}
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
