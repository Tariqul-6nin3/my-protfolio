import React from "react";

const BasicProjects = () => {
  return (
    <div className="grid my-8 grid-cols-1 md:grid-cols-3  gap-16">
      <div className="main-container py-5 shadow-2xl shadow-slate-400 rounded-md">
        <div className="project-picture-container rounded-md">
          <img
            className="w-full"
            src="https://i.postimg.cc/FRnqxY3J/tariqul-6nin3-github-io-Assignment-1.png"
            alt=""
          />
        </div>
        <div className="text-white relative py-8">
          <div className="text-center">
            <h1 className="text-gradient-primary inline text-2xl md:text-4xl  font bold ">
              Myself
            </h1>
            <p className="text-slate-300 mt-2 text-lg ">
              A website about my ambitions
            </p>
          </div>
          <div className="info-container space-y-4 text-center  top-0 left-0 opacity-0 text absolute transition duration-1000 text-white bg-black w-full h-full py-4 px-2 z-20">
            <p className="text-gradient-primary text-xl md:text-2xl font-bold inline ">
              Technologies
            </p>
            <p>HTML CSS</p>
            <div className="flex justify-between ">
              <a
                href="https://github.com/Tariqul-6nin3/Assignment-01"
                className="px-4 py-2 bg-slate-900 text-white rounded-full ">
                Github
              </a>
              <a
                href="https://tariqul-6nin3.github.io/Assignment-01/"
                className="px-4 py-2 bg-white hover:outline-2 outline-red-600 text-black rounded-full">
                Live site
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="main-container py-5 shadow-2xl shadow-slate-400 rounded-md">
        <div className="project-picture-container rounded-md">
          <img
            className="w-full"
            src="https://i.postimg.cc/3wzpTcgQ/tariqul-6nin3-github-io-Assignment-2-g3-architect.png"
            alt=""
          />
        </div>
        <div className="text-white relative py-8">
          <div className="text-center">
            <h1 className="text-gradient-primary inline text-2xl md:text-4xl  font bold ">
              G3 Architects
            </h1>
            <p className="text-slate-300 mt-2 text-lg ">
              A architectchatial website, where you will find everythings about
              architecture and also know about some famous work of architecture.
            </p>
          </div>
          <div className="info-container space-y-4 text-center  top-0 left-0 opacity-0 text absolute transition duration-1000 text-white bg-black w-full h-full py-4 px-2 z-20">
            <p className="text-gradient-primary text-xl md:text-2xl font-bold inline ">
              Technologies
            </p>
            <p>HTML CSS Bootstrap</p>
            <div className="flex justify-between ">
              <a
                href="https://github.com/Tariqul-6nin3/Assignment-02-g3-architect-"
                className="px-4 py-2 bg-slate-900 text-white rounded-full ">
                Github
              </a>
              <a
                href="https://tariqul-6nin3.github.io/Assignment-02-g3-architect-/"
                className="px-4 py-2 bg-white hover:outline-2 outline-red-600 text-black rounded-full">
                Live site
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="main-container py-5 shadow-2xl shadow-slate-400 rounded-md">
        <div className="project-picture-container rounded-md">
          <img
            className="w-full"
            src="https://i.postimg.cc/PxSVXhrF/gregarious-brioche-7806122-netlify-app.png"
            alt=""
          />
        </div>
        <div className="text-white relative py-8">
          <div className="text-center">
            <h1 className="text-gradient-primary inline text-2xl md:text-4xl  font bold ">
              Legal Solution
            </h1>
            <p className="text-slate-300 mt-2 text-lg ">
              This website is about anythings related to law and legal
              solutions.
            </p>
          </div>
          <div className="info-container space-y-4 text-center  top-0 left-0 opacity-0 text absolute transition duration-1000 text-white bg-black w-full h-full py-4 px-2 z-20">
            <p className="text-gradient-primary text-xl md:text-2xl font-bold inline ">
              Technologies
            </p>
            <p>HTML CSS BOOTSTRAP</p>
            <div className="flex justify-between ">
              <a
                href="https://github.com/Tariqul-6nin3/Legal_Solution"
                className="px-4 py-2 bg-slate-900 text-white rounded-full ">
                Github
              </a>
              <a
                href="https://gregarious-brioche-780612.netlify.app/"
                className="px-4 py-2 bg-white hover:outline-2 outline-red-600 text-black rounded-full">
                Live site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicProjects;
