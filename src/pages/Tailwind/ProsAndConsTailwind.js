import React from "react";
import { Link } from "react-router-dom";
import { ProsTailwind } from "./ProsTailwind";
import { ConsTailwind } from "./ConsTailwind";

const AvatarIcon = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "10%",
        left: "80%",
        transform: "translate(-50%, -50%)",
        animation: "pulse 1.5s infinite",
      }}
    >
      <img src="/Avatar.png" alt="Moving Image" />
    </div>
  );
};

const Snackbar = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "10%",
        right: "60%",
        transform: "translate(-50%, -50%)",
        animation: "moveImage 3s infinite alternate",
      }}
    >
      <img src="/Snackbar.png" alt="Moving Image" />
    </div>
  );
};
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
        to="/question-page"
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

const CheckboxIcon = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "90%",
        right: "80%",
        transform: "translate(-50%, -50%)",
        animation: "pulse 1.5s infinite",
      }}
    >
      <img src="/Checkbox.png" alt="Moving Image" />
    </div>
  );
};

const RadioIcon = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "10%",
        right: "90%",
        transform: "translate(-50%, -50%)",
        animation: "pulse 1.5s infinite",
      }}
    >
      <img src="/Radio.png" alt="Moving Image" />
    </div>
  );
};

export const ProsAndConsTailwind = () => {
  return (
    <section
      className="flex justify-center h-screen"
      style={{
        backgroundImage: `url('../bg2.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <ButtonIcon />
      <AvatarIcon />
      <CheckboxIcon />
      <Snackbar />
      <div className="container">
        <div className="grid grid-cols-2 justify-center h-screen">
          <div className="flex flex-col justify-center items-center ">
            <ProsTailwind />
          </div>

          <div className="flex flex-col justify-center items-center">
            <ConsTailwind />
          </div>
        </div>
      </div>
    </section>
  );
};
