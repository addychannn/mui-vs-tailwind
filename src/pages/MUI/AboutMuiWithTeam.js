import React from "react";
import { AboutMui } from "./AboutMui";
import { MuiTeam } from "./MuiTeam";
import { MuiComponents } from "./MuiComponents";

export const AboutMuiWithTeam = () => {
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
          <div>
            {/* <MuiTeam /> */}
            <MuiComponents />
          </div>
          <div className="flex flex-col justify-center items-center">
            <AboutMui />
          </div>
        </div>
      </div>
    </section>
  );
};
