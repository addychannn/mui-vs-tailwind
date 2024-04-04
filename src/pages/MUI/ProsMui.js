import React from "react";
import { ProsAndConsMui } from "./ProsAndConsMui";
import * as SolarIconSet from "solar-icon-set";

export const ProsMui = () => {
  return (
    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-500">
      <div className="flex justify-center pb-4 ">
        <img src="\pros.png" />
      </div>

      <div className=" text-center align-center bg-green-500 p-2 rounded-lg">
        <h5 className=" text-LG font-medium text-white dark:text-gray-400">
          PROS
        </h5>
      </div>

      <ul role="list" className="space-y-5 my-7">
        <li className="flex items-center">
          <SolarIconSet.CheckCircle
            iconStyle="BoldDuotone"
            color="#009665"
            size={24}
          />
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
            More component options
          </span>
        </li>
        <li className="flex">
          <SolarIconSet.CheckCircle
            iconStyle="BoldDuotone"
            color="#009665"
            size={24}
          />
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
            Cross platform compatibility
          </span>
        </li>
        <li className="flex">
          <SolarIconSet.CheckCircle
            iconStyle="BoldDuotone"
            color="#009665"
            size={24}
          />
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
            Free
          </span>
        </li>
      </ul>
    
    </div>
  );
};
