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
        to="/about-tailwind"
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
export const MuiTeam = () => {
  return (
    <section
      className="flex justify-center items-center h-screen"
      style={{
        backgroundImage: `url('../bg2.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <ButtonIcon/>
      <div>
        <AvatarIcon />
        <CheckboxIcon />
        <div className="container">
          <div className=" text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Meet the
              <span className="pl-2  text-blue-500">MUIers</span>
            </h2>
            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              Contributing from all corners of the world, MUI is a global,
              fully-remote team & community.
            </p>
          </div>
          <div className="grid gap-2 mb-6 lg:mb-16 md:grid-cols-4">
            <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg" src="MuiTeam/oliver.jpeg" alt="" />

              <div className="p-5 ">
                <p className="mb-2 text-md font-bold  text-gray-900 dark:text-white">
                  Oliver Tassinari
                </p>

                <p className=" font-normal text-gray-700 dark:text-gray-400">
                  Co-founder, CEO
                </p>
              </div>
            </div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg" src="MuiTeam/matt.png" alt="" />

              <div className="p-5 ">
                <p className="mb-2 text-md font-bold  text-gray-900 dark:text-white">
                  Matt Brookes
                </p>

                <p className=" font-normal text-gray-700 dark:text-gray-400">
                  Co-founder
                  <br />
                  Head of Sales
                </p>
              </div>
            </div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg" src="MuiTeam/marija.png" alt="" />

              <div className="p-5 ">
                <p className="mb-2 text-md font-bold  text-gray-900 dark:text-white">
                  Marija Najdova
                </p>

                <p className=" font-normal text-gray-700 dark:text-gray-400">
                  Engineering Manager
                </p>
              </div>
            </div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg" src="MuiTeam/marija.png" alt="" />

              <div className="p-5 ">
                <p className="mb-2 text-md font-bold  text-gray-900 dark:text-white">
                  Marija Najdova
                </p>

                <p className=" font-normal text-gray-700 dark:text-gray-400">
                  Engineering Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
