import React from "react";
import "../../src/root.css";
import { HiHome } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { FaProjectDiagram } from "react-icons/fa";
import { SiReact } from "react-icons/si";
import { BiSolidContact } from "react-icons/bi";
import { MdMiscellaneousServices } from "react-icons/md";
import { Link } from "react-scroll";
import animationData from "../../src/assets/programmer.json";
import Lottie from "react-lottie";
import { Typewriter } from "react-simple-typewriter";
import resume from "../../public/Resume12.pdf";

const MyTitle = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div id="home" className="md:h-[100vh] pb-14 md:pb-0 ">
      <div className="md:w-16 w-12 py-2 md:py-0 z-10 rotate-90 md:rotate-0 h-80   md:h-3/5 bg-slate-900 shadow-slate-400 md:bg-slate-900 shadow-md fixed top-[297px] left-[135px]  md:top-28 rounded-xl md:left-5">
        <div className="flex flex-col-reverse md:flex-col gap-3 justify-evenly  w-full h-full items-center">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            delay={500}>
            <HiHome className="md:text-4xl text-xl text-gray-400 -rotate-90 md:rotate-0 font-semibold"></HiHome>
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            delay={500}>
            <CgProfile className="md:text-4xl text-xl text-gray-400 -rotate-90 md:rotate-0 font-semibold"></CgProfile>
          </Link>
          <Link
            activeClass="active"
            to="service"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            delay={500}>
            {" "}
            <MdMiscellaneousServices className="md:text-4xl text-xl text-gray-400 -rotate-90 md:rotate-0 font-semibold"></MdMiscellaneousServices>
          </Link>
          <Link
            activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            delay={500}>
            {" "}
            <SiReact className="md:text-4xl text-xl text-gray-400 -rotate-90 md:rotate-0 font-semibold"></SiReact>
          </Link>
          <Link
            activeClass="active"
            to="protfolio"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            delay={500}>
            {" "}
            <FaProjectDiagram className="md:text-4xl text-xl text-gray-400 -rotate-90 md:rotate-0 font-semibold"></FaProjectDiagram>
          </Link>

          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            delay={500}>
            <BiSolidContact className="md:text-4xl text-xl text-gray-400 -rotate-90 md:rotate-0 font-semibold"></BiSolidContact>
          </Link>
        </div>
      </div>
      <div className="title-upper-box  h-[5vh] md:h-[15vh] bg-gradient-to-r from-cyan-800 via-pink-700 to-blue-600"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl  gap-2 mx-auto relative top-6 ">
        <div className="text-white w-11/12 md:mx-0 mx-auto col-span-2">
          <div className="md:space-y-4">
            <h3 className="md:text-3xl text-xl font-semibold md:font-bold">
              Hi I'm
            </h3>

            <h1 className="md:text-6xl text-gradient-primary text-xl font-bold">
              Md. Tariqul Islam
            </h1>

            <h2 className="md:text-4xl  text-xl font-bold">
              <Typewriter
                words={[
                  "Mern Stack Developer",
                  "FrontEnd Developer",
                  "Expertise In ReactJS",
                  "Hand-on Exprience with several projects",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={500}
              />
            </h2>
          </div>
          <p className="md:mt-4 mt-2 text-xs md:text-lg md:tracking-wider md:leading-8">
            As a self-taught programmer, I have acquired proficiency in the MERN
            stack and possess a strong grasp of JavaScript, HTML, and CSS. My
            dedication to ongoing learning ensures that I remain up-to-date with
            current industry trends. I excel at crafting responsive user
            interfaces and developing RESTful APIs.
          </p>
          <div>
            <div className="flex justify-center gap-3  mt-8">
              <a
                href="#_"
                class="relative md:px-8 px-4 py-3 font-bold text-white rounded-lg group">
                <span class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
                <span class="relative">About Me</span>
              </a>
              <a href={resume} download="resume">
                <button className="btn btn-outline text-white ">
                  Download Resume
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <div className=" mx-auto ">
            <Lottie options={defaultOptions} />
          </div>
        </div>
      </div>
      <div className="title-lower-box  h-[5vh] md:h-[15vh] bg-gradient-to-r from-cyan-800 via-pink-700 to-blue-600 relative top-[50px] md:top-[135px]"></div>
    </div>
  );
};

export default MyTitle;
