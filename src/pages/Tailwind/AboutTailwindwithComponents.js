import React from "react";
import { AboutTailwind } from "./AboutTailwind";
import { TailwindComponents } from "./TailwindComponents";

export const AboutTailwindwithComponents = () => {
  return (
    <section
      className="flex flex-col items-center justify-center h-screen"
      style={{
        backgroundImage: `url('../bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container p-4">
        <div className="grid grid-cols-2 justify-center">
          <div className="flex flex-col justify-center items-center">
            <AboutTailwind />
          </div>

          <div>
            <TailwindComponents />
          </div>
        </div>
      </div>
    </section>
  );
};
