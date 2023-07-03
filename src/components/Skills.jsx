import React from "react";
import Marquee from "react-fast-marquee";
import { Icon } from "@iconify/react";
import { ImHtmlFive } from "react-icons/im";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
import { FaReact, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiMongodb } from "react-icons/si";
import ProgressBar from "@ramonak/react-progress-bar";
import "../../src/root.css";

const Skills = () => {
  return (
    <div
      id="skill"
      className="max-w-6xl mx-auto py-5 md:py-0 px-3 md:px-2 md:pb-8">
      <div className="">
        <h1 className="md:text-4xl mx-auto py-8 text-gradient-primary text-3xl font-bold">
          __What I know__
        </h1>
      </div>

      <Marquee
        className="rounded-t-xl px-5 py-5"
        pauseOnHover={true}
        speed={100}>
        <div className="mx-4 md:mx-8">
          <ImHtmlFive className="w-12 md:w24 md:h-36 h-16 text-cyan-500" />
        </div>
        <div className="mx-4 md:mx-8">
          <IoLogoJavascript className="w-12 md:w24 md:h-36 h-16 text-amber-400" />
        </div>
        <div className="mx-4 md:mx-8">
          <DiCss3 className="w-12 md:w24 md:h-36 h-16 text-[#146eb0]" />
        </div>
        <div className="mx-4 md:mx-8">
          <FaReact className="w-12 md:w24 md:h-36 h-16 text-sky-500" />
        </div>
        <div className="mx-4 md:mx-8">
          <SiTailwindcss className="w-12 md:w24 md:h-36 h-16 text-teal-400" />
        </div>
        <div className="mx-4 md:mx-8">
          <FaBootstrap className="w-12 md:w24 md:h-36 h-16 text-[#7811f7]" />
        </div>
        <div className="mx-4 md:mx-8">
          <SiFirebase className="w-12 md:w24 md:h-36 h-16 text-orange-500" />
        </div>
        <div className="mx-4 md:mx-8">
          <FaNodeJs className="w-12 md:w24 md:h-36 h-16 text-[#56a53e]" />
        </div>
        <div className="mx-4 md:mx-8">
          <SiMongodb className="w-12 md:w24 md:h-36 h-16 text-[#00e661]" />
        </div>
        <div className="mx-4 md:mx-8">
          <AiFillGithub className="w-12 md:w24 md:h-36 h-16 text-slate-400" />
        </div>
        <div className="mx-4 md:mx-8">
          <Icon
            className="w-12 md:w24 md:h-36 h-16 "
            icon="skill-icons:expressjs-light"
          />
        </div>
      </Marquee>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h1 className="md:text-4xl text-xl text-gradient-primary font-bold">
              __Frontend__
            </h1>

            <div className="md:mt-8 mt-4">
              <div className="mt-2 md:mt-5">
                <label htmlFor="html">HTML 5</label>
                <ProgressBar
                  id="html"
                  completed={95}
                  bgColor="#747c87"
                  height="20px"
                  labelAlignment="outside"
                  baseBgColor=""
                  labelColor="#0e7e77"
                />
              </div>
              <div className="mt-2 md:mt-5">
                <label htmlFor="html">CSS 3</label>
                <ProgressBar
                  id="html"
                  completed={95}
                  bgColor="#747c87"
                  height="20px"
                  labelAlignment="outside"
                  baseBgColor=""
                  labelColor="#0e7e77"
                />
              </div>
              <div className="mt-2 md:mt-5">
                <label htmlFor="html">Tailwind</label>
                <ProgressBar
                  id="html"
                  completed={95}
                  bgColor="#747c87"
                  height="20px"
                  labelAlignment="outside"
                  baseBgColor=""
                  labelColor="#0e7e77"
                />
              </div>
              <div className="mt-2 md:mt-5">
                <label htmlFor="html">Bootstrap 5</label>
                <ProgressBar
                  id="html"
                  completed={90}
                  bgColor="#747c87"
                  height="20px"
                  labelAlignment="outside"
                  baseBgColor=""
                  labelColor="#0e7e77"
                />
              </div>
              <div className="mt-2 md:mt-5">
                <label htmlFor="html">JavaScript</label>
                <ProgressBar
                  id="html"
                  completed={85}
                  bgColor="#747c87"
                  height="20px"
                  labelAlignment="outside"
                  baseBgColor=""
                  labelColor="#0e7e77"
                />
              </div>
              <div className="mt-2 md:mt-5">
                <label htmlFor="html">React Js</label>
                <ProgressBar
                  id="html"
                  completed={80}
                  bgColor="#747c87"
                  height="20px"
                  labelAlignment="outside"
                  baseBgColor=""
                  labelColor="#0e7e77"
                />
              </div>
              <div className="mt-2 md:mt-5">
                <label htmlFor="html">Firebase Authentication</label>
                <ProgressBar
                  id="html"
                  completed={70}
                  bgColor="#747c87"
                  height="20px"
                  labelAlignment="outside"
                  baseBgColor=""
                  labelColor="#0e7e77"
                />
              </div>
              <div className="mt-2 md:mt-5">
                <label htmlFor="html">DOM Manipulation</label>
                <ProgressBar
                  id="html"
                  completed={80}
                  bgColor="#747c87"
                  height="20px"
                  labelAlignment="outside"
                  baseBgColor=""
                  labelColor="#0e7e77"
                />
              </div>
              <div className="mt-2 md:mt-5">
                <label htmlFor="html">ES-6</label>
                <ProgressBar
                  id="html"
                  completed={88}
                  bgColor="#747c87"
                  height="20px"
                  labelAlignment="outside"
                  baseBgColor=""
                  labelColor="#0e7e77"
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="md:text-4xl text-gradient-primary text-xl font-bold">
              __Backend__
            </h1>

            <div className="mt-4 md:mt-8">
              <div className="mt-2 md:mt-5">
                <label htmlFor="html">Express Js</label>
                <ProgressBar
                  id="expressjs"
                  completed={80}
                  bgColor="#747c87"
                  height="20px"
                  labelAlignment="outside"
                  baseBgColor=""
                  labelColor="#0e7e77"
                />
              </div>
              <div className="mt-2 md:mt-5">
                <label htmlFor="html">Node Js</label>
                <ProgressBar
                  id="nodejs"
                  completed={65}
                  bgColor="#747c87"
                  height="20px"
                  labelAlignment="outside"
                  baseBgColor=""
                  labelColor="#0e7e77"
                />
              </div>
              <div className="mt-2 md:mt-5">
                <label htmlFor="mongodb">MongoDB</label>
                <ProgressBar
                  id="mongodb"
                  completed={80}
                  bgColor="#747c87"
                  height="20px"
                  labelAlignment="outside"
                  baseBgColor=""
                  labelColor="#0e7e77"
                />
              </div>
              <div className="mt-2 md:mt-5">
                <label htmlFor="mongoose">Mongoose</label>
                <ProgressBar
                  id="mongoose"
                  completed={40}
                  bgColor="#747c87"
                  height="20px"
                  labelAlignment="outside"
                  baseBgColor=""
                  labelColor="#0e7e77"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
