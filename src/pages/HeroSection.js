import React from "react";
import { Link } from "react-router-dom";
import AboutMui from "./MUI/AboutMui";

// MovingImage component
const ButtonIcon = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "80%",
        left: "70%",
        transform: "translate(-50%, -50%)",
        animation: "moveImage 3s infinite alternate",
      }}
    >
      <img src="/button.png" alt="Moving Image" />
    </div>
  );
};

const AvatarIcon = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "20%",
        left: "80%",
        transform: "translate(-50%, -50%)",
        animation: "pulse 1.5s infinite",
      }}
    >
      <img src="/Avatar.png" alt="Moving Image" />
    </div>
  );
};

const CheckboxIcon = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "60%",
        right: "80%",
        transform: "translate(-50%, -50%)",
        animation: "pulse 1.5s infinite",
      }}
    >
      <img src="/Checkbox.png" alt="Moving Image" />
    </div>
  );
};

const Snackbar = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "20%",
        right: "60%",
        transform: "translate(-50%, -50%)",
        animation: "moveImage 3s infinite alternate",
      }}
    >
      <img src="/Snackbar.png" alt="Moving Image" />
    </div>
  );
};

// HeroSection component
const HeroSection = () => {
  return (
    <>
      <style>
        {`
          @keyframes moveImage {
            0% { transform: translate(-50%, -50%); }
            100% { transform: translate(-50%, 0); }
          }
        `}
      </style>
      <section
        className="flex h-screen justify-center "
        style={{
          backgroundImage: `url('../bg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* MovingImage component */}
        <ButtonIcon />
        <AvatarIcon />
        <CheckboxIcon />
        <Snackbar />

        <div className="flex justify-center items-center">
          <div className="py-8 px-4 mx-auto  text-center lg:py-16 lg:px-12">
            <div className="flex justify-center">
              <div className="block max-w-xl mx-auto">
                <div className="grid grid-cols-3 gap-1">
                  <div>
                    <img src="/MUILogo.png" alt="MUI Logo" />
                  </div>
                  <div className="flex items-center justify-center">
                    <h3 className="text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                      vs
                    </h3>
                  </div>
                  <div className="flex items-center justify-center">
                    <img src="/tailwingLogo.png" alt="Tailwind Logo" />
                  </div>
                </div>
              </div>
            </div>

            <p className="mb-8 text-3xl font-normal text-gray-500  dark:text-gray-400">
              Which one is better?
            </p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
             
              <Link
                to="/about-mui"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-gray-300 hover:bg-blue-800 focus:ring-4 focus:ring-blue-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 bg-blue-500 "
              >
                Learn more
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
