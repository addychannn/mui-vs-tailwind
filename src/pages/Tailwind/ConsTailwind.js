import React from "react";

import * as SolarIconSet from "solar-icon-set";

export const ConsTailwind = () => {
  return (
    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-500">
      <div className="flex justify-center pb-4 ">
        <img src="\cons.png" />
      </div>

      <div className=" text-center align-center bg-red-500 p-2 rounded-lg">
        <h5 className=" text-LG font-medium text-white dark:text-gray-400">
          CONS
        </h5>
      </div>

      <ul role="list" className="space-y-5 my-7">
        <li className="flex items-center">
          <SolarIconSet.CloseCircle
            iconStyle="BoldDuotone"
            color="#F04C4C"
            size={24}
          />
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
            Cross-platform incompatibility
          </span>
        </li>
        <li className="flex">
          <SolarIconSet.CloseCircle
            iconStyle="BoldDuotone"
            color="#F04C4C"
            size={24}
          />
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
           Manual work
          </span>
        </li>
        <li className="flex">
          <SolarIconSet.CloseCircle
            iconStyle="BoldDuotone"
            color="#F04C4C"
            size={24}
          />
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
            Pay for components
          </span>
        </li>
      </ul>
    </div>
  );
};
