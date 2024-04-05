import React from "react";
import { Link } from "react-router-dom";
const ButtonIcon = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "4%",
        left: "91%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Link
        to="/pros-and-cons"
        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-gray-300 hover:bg-blue-800 focus:ring-4 focus:ring-blue-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 bg-blue-500 "
      >
        Next
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
  );
};

export const AboutMui = () => {
  return (
    <section>
      <ButtonIcon />
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 flex flex-col items-center justify-center">
        <div className="self-start">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            About Material UI
          </h1>
          <p className="max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Founder: Olivier Tassinari <br />
            When it started: 2014
          </p>

          <p className="max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            - Unify React and Material Design <br />
            - Provides pre-designed component and styles <br />
            - Has a community of two million developers <br />
            - Four million weekly downloads on npm <br />
          </p>

         
        </div>
      </div>
    </section>
  );
};
