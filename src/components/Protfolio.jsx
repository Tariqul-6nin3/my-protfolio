import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import BasicProjects from "./BasicProjects";
import FrontEnd from "./FrontEnd";
import FullStack from "./FullStack";

const Protfolio = () => {
  return (
    <div id="protfolio" className="max-w-6xl mx-auto py-5 px-3 md:px-2 md:py-8">
      <h1 className="md:text-4xl mx-auto py-8 text-gradient-primary text-2xl font-bold">
        __Some Of My Projects__
      </h1>
      <Tabs className="mx-auto w-full space-x-2 md:space-x-6">
        <TabList className="flex justify-center font-bold text-base md:text-xl gap-2 md:gap-4">
          <Tab>Full Stack</Tab>
          <Tab>Basic</Tab>
          <Tab>Frontend</Tab>
        </TabList>

        <TabPanel>
          <FullStack></FullStack>
        </TabPanel>
        <TabPanel>
          <BasicProjects></BasicProjects>
        </TabPanel>
        <TabPanel>
          <FrontEnd></FrontEnd>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Protfolio;
