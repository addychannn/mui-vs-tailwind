import React from "react";
import { Link } from "react-router-dom";
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
const ButtonNext = () => {
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
        to="/comparison-page"
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

export const QuestionPage = () => {
  return (
    <section
      className="flex justify-center h-screen"
      style={{
        backgroundImage: `url('../bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <ButtonIcon />
      <AvatarIcon />
      <CheckboxIcon />
      <Snackbar />
      <ButtonNext />

      <div class="py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12">
        <img src="\Thinking.png" />
        <h1 class="mb-4 text-4xl font-bold tracking-tight leading-none ">
          Which one is better though?
        </h1>
        <p class="font-light text-gray-500 md:text-lg xl:text-xl dark:text-gray-400">
          Or should we even compare them?
        </p>
      </div>
    </section>
  );
};
