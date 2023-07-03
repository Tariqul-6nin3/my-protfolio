import React from "react";

const FrontEnd = () => {
  return (
    <div className="grid my-8 grid-cols-1 md:grid-cols-3  gap-16">
      <div className="main-container py-5 shadow-2xl shadow-slate-400 rounded-md">
        <div className="project-picture-container rounded-md">
          <img
            className="w-full"
            src="https://i.postimg.cc/G343WxKd/earnest-bubblegum-c5b4e2-netlify-app.png"
            alt=""
          />
        </div>
        <div className="text-white relative py-8">
          <div className="text-center">
            <h1 className="text-gradient-primary inline text-2xl md:text-4xl  font bold ">
              Geometry Genius
            </h1>
            <p className="text-slate-300 mt-2 text-lg ">
              Calculation the area of any geometrical shape by geometric formula
              easily.
            </p>
          </div>
          <div className="info-container space-y-4 text-center  top-0 left-0 opacity-0 text absolute transition duration-1000 text-white bg-black w-full h-full py-4 px-2 z-20">
            <p className="text-gradient-primary text-xl md:text-2xl font-bold inline ">
              Technologies
            </p>
            <p>HTML CSS Tailwind Javascript DOM</p>
            <div className="flex justify-between ">
              <a
                href="https://github.com/Tariqul-6nin3/Geometry_Genius"
                className="px-4 py-2 bg-slate-900 text-white rounded-full ">
                Github
              </a>
              <a
                href="https://earnest-bubblegum-c5b4e2.netlify.app/"
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
            src="https://i.postimg.cc/DwkqJZ04/parched-oatmeal-surge-sh.png"
            alt=""
          />
        </div>
        <div className="text-white relative py-8">
          <div className="text-center">
            <h1 className="text-gradient-primary inline text-2xl md:text-4xl  font bold ">
              AI UNIVERSE HUB
            </h1>
            <p className="text-slate-300 mt-2 text-lg ">
              Most usages AI tools is displayed here as per ascending and
              descending. Also details about particular tools also shown in
              modal.
            </p>
          </div>
          <div className="info-container space-y-4 text-center  top-0 left-0 opacity-0 text absolute transition duration-1000 text-white bg-black w-full h-full py-4 px-2 z-20">
            <p className="text-gradient-primary text-xl md:text-2xl font-bold inline ">
              Technologies
            </p>
            <p>HTML CSS Tailwind Javascript</p>
            <div className="flex justify-between ">
              <a
                href="https://github.com/Tariqul-6nin3/Geometry_Genius"
                className="px-4 py-2 bg-slate-900 text-white rounded-full ">
                Github
              </a>
              <a
                href="http://parched-oatmeal.surge.sh/"
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
            src="https://i.postimg.cc/c1cRgZYF/musing-pig-surge-sh.png"
            alt=""
          />
        </div>
        <div className="text-white relative py-8">
          <div className="text-center">
            <h1 className="text-gradient-primary inline text-2xl md:text-4xl  font bold ">
              Quiz Hero
            </h1>
            <p className="text-slate-300 mt-2 text-lg ">
              A quiz related website , where any student can give a quiz test.
              After submitting he will be able to his result.
            </p>
          </div>
          <div className="info-container space-y-4 text-center  top-0 left-0 opacity-0 text absolute transition duration-1000 text-white bg-black w-full h-full py-4 px-2 z-20">
            <p className="text-gradient-primary text-xl md:text-2xl font-bold inline ">
              Technologies
            </p>
            <p>HTML CSS Tailwind Javascript DOM Manipulation</p>
            <div className="flex justify-between ">
              <a
                href="https://github.com/Tariqul-6nin3/Quiz_Hero"
                className="px-4 py-2 bg-slate-900 text-white rounded-full ">
                Github
              </a>
              <a
                href="https://amusing-pig.surge.sh/"
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

export default FrontEnd;
