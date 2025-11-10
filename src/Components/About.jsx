import React from "react";
import { PiLineVerticalBold } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import { FaArrowCircleRight } from "react-icons/fa";
export const About = () => {
  return (
    <div className="container mx-auto min-h-screen overflow-x-hidden">
      <div className="flex flex-col gap-7 md:gap-0 md:flex-row justify-between items-center mt-20 ">
        <div className="flex  justify-center ">
          <div className="flex flex-col items-center justify-center text-orange-400">
            <PiLineVerticalBold className="h-10 w-10 md:h-16 md:w-16" />
            <GoDotFill />
            <PiLineVerticalBold className="h-10 w-10 md:h-16 md:w-16" />
            <GoDotFill />
            <PiLineVerticalBold className="h-10 w-10 md:h-16 md:w-16" />
          </div>
          <div className="flex flex-col justify-around items-start md:text-2xl">
            <div className="flex items-center gap-3">
              <FaArrowCircleRight className="transition-transform delay-100 hover:scale-110 hover:text-orange-400" />
              <h1>Website Design</h1>
            </div>
            <div className="flex items-center gap-3">
              <FaArrowCircleRight className="transition-transform delay-100 hover:scale-110 hover:text-orange-400" />
              <h1>Website Development</h1>
            </div>
            <div className="flex items-center gap-3">
              <FaArrowCircleRight className="transition-transform delay-100 hover:scale-110 hover:text-orange-400" />
              <h1>Deployment</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-start md:w-1/2">
          <h1 className="text-4xl font-bold">About me</h1>
          <p className="text-sm my-3">
            Creative and detail-oriented Front-End Web Developer with a strong
            command of React.js, modern JavaScript (ES6+), and responsive design
            principles. Passionate about building intuitive, high-performance
            user interfaces that elevate user experience and meet business
            goals. Seeking to contribute to a forwardthinking development team
            where I can apply my skills, grow professionally, and help craft
            seamless, scalable, and dynamic web applications.
          </p>
          <div className="flex justify-start items-center gap-20">
            <div className="flex flex-col">
              <p className="text-5xl font-bold">
                10 <span className="text-orange-400">+</span>
              </p>
              <p className="text-xs">Completed Projects</p>
            </div>
            <div className="flex flex-col">
              <p className="text-5xl font-bold">
                0 <span className="text-orange-400">+</span>
              </p>
              <p className="text-xs">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
