import React from "react";
import cover from "../assets/portfolio-cover.png";
import banner from "../assets/rouded.png";
import { About } from "./About";
import { Link } from "react-router";
import { Skills } from "./Skills";

import { Contact } from "./Contact";

export const Home = () => {
  return (
    <>
      <div className="containter mx-auto overflow-x-hidden ">
        <div className=" hero bg-transparent min-h-screen">
          <div className="hero-content text-white flex-col lg:flex-row-reverse">
           
             <img
  src={cover}
  alt="Portfolio Cover"
  className="rounded-full w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover shadow-lg border-4 border-white transition-transform duration-300 hover:scale-105"
/>

            
           
            <div>
              <h1 className="text-3xl font-bold">
                Hello <span className="text-orange-400">.</span>
              </h1>
              <h1 className="text-3xl pl-7 my-4 font-bold">
                {" "}
                <span className="text-orange-400">....</span> I'm{" "}
                <span className="italic">Hasibul Hasan</span>
              </h1>
              <h1 className="text-4xl font-bold">Frontend Web Developer</h1>
              <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
                <button className="btn bg-orange-400 text-white border-none shadow-none">
                  Veiw Projects
                </button>
                <button className="btn bg-transparent text-white border-orange-400 border-2 shadow-none">
                  My Resume
                </button>
              </div>

              <ul className="grid grid-cols-3 md:grid-cols-6 items-center justify-center gap-10 mt-4">
                <li>HTML5</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Git</li>
                <li>Github</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Skills />
 
      <Contact />
    </>
  );
};
