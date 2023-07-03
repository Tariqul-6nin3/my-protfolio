import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className=" text-white max-w-6xl mx-auto py-5 md:py-0 md:pt-10">
      <h1 className="md:text-4xl mx-auto  md:py-8 text-gradient-primary text-3xl font-bold">
        __About Me__🚩
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3  md:gap-7  ">
        <div className=" md:scale-90 scale-75 px-8 -my-5 md:my-0 bottom-0 md:bottom-20  md:px-3 about-img-container bg-gradient-to-b from-[#f3004b] to-transparent  about-img-container overflow-hidden relative">
          <img
            className="md:scale-90 scale-90"
            src="https://i.postimg.cc/QtmTN32V/283258224-1728639784136158-225571196255140995-n-removebg-preview.png"
            alt=""
          />
        </div>

        <div className=" space-y-4 col-span-2">
          <p className=" text-sm  text-slate-100 px-3 md:px-0  md:py-0 md:text-lg md:tracking-wider md:leading-8 leading-6">
            Hello guys!! I am Md. Tariqul Islam from Bangladesh. Currently I'm a
            student of BBA (Bachelor of Business Administration) under BOU
            (Bangladesh Open University). I'm a passionate web developer with a
            keen eye for detail, and a drive to create elegant, efficient, and
            user-friendly web app. With over 1+ years of experience in web
            development, I've honed my skills in a variety of technologies,
            including ReactJs, Nodejs,ExpressJs,Firebase, Javascript es6+ and
            MongoDb. Now I am learning NextJs.
          </p>
          <div className="flex flex-col mb-0 md:mb-7 md:flex-row justify-start  gap-5">
            <div className="border w-11/12 mx-auto md:mx-0 md:w-full  px-5 py-3">
              <h3>Name:</h3>
              <p className="text-slate-400">Md. Tariqul Islam</p>
              <h3>Email:</h3>
              <p className="text-slate-400">tariqul.islam9665@gmail.com</p>
              <h3>Phone:</h3>
              <p className="text-slate-400">+8801772216496</p>
            </div>
            <div className="border w-11/12 mb-7 md:mb-0 mx-auto md:mx-0 md:w-full px-5 py-3">
              <h3>Address:</h3>
              <p className="text-slate-400">Dhaka, Bangladesh</p>
              <h3>Study:</h3>
              <p className="text-slate-400">BBA (1st year)</p>
              <h3>Current Address:</h3>
              <p className="text-slate-400">Chittagoang, Bangladesh</p>
            </div>
          </div>
          <div className="">
            <a
              href="#_"
              class="relative top-5  px-8 py-3 font-bold text-white rounded-lg group">
              <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
              <span class="relative">Get In Touch</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// w-full brightness-110 left-2 scale-90 md:scale-105 absolute bottom-0  h-full rounded-xl
