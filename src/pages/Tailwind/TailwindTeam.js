import React from "react";
import { Link } from "react-router-dom";

const AvatarIcon = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "5%",
        left: "90%",
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
        bottom: "10%",
        right: "90%",
      }}
    >
      <img src="/Checkbox.png" alt="Moving Image" />
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
        to="/pros-and-cons-tailwind"
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
export const TailwindTeam = () => {
  return (
    <section
      className="flex justify-center items-center h-screen"
      style={{
        backgroundImage: `url('../bg2.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <ButtonIcon />
      <div>
        <AvatarIcon />
        <CheckboxIcon />
        <div className="container">
          <div className=" text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-7xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Meet the Creator
            </h2>
            <h2 className="mb-4 text-md tracking-tight font-extrabold text-gray-900 dark:text-white">
              Adam Wathan
            </h2>
          </div>
          <div className="bg-white p-8 rounded-lg">
            <div className="flex flex-row justify-center items-center">
              <div className=" ">
                <div className="p-8" sx={{ width: 300 }}>
                  <p className="mb-2 text-xl font-bold  text-gray-900 dark:text-white">
                    "I created Tailwind CSS and built a multi-million dollar <br/>
                    business around it."
                  </p>

                  <p className=" font-normal text-gray-700 dark:text-gray-400">
                    "We launched Tailwind UI in 2020 which is doing seven
                    figures
                    <br />
                    per year and growing, and have grown to a small team of 7
                    that
                    <br />
                    splits our time between working on our open source projects
                    <br />
                    and the commercial templates we release under the Tailwind
                    UIs
                    <br />
                    brand."
                  </p>
                </div>
              </div>
              <div className="max-w-sm">
                <img className="rounded-t-lg" src="\Adam.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
