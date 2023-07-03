import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GrServices } from "react-icons/gr";

const Services = () => {
  return (
    <div id="service" className="max-w-7xl mx-auto py-5 md:py-10 ">
      <h1 className="md:text-4xl text-gradient-primary text-3xl py-8 mx-auto font-bold">
        __What I Provide?__
      </h1>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2023 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<GrServices />}>
          <h3 className="vertical-timeline-element-title text-2xl md:text-4xl font-bold">
            Interactive UI Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Dhaka, Bangladesh
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          date="2022 - current"
          iconStyle={{ background: "#3ae374", color: "#fff" }}
          icon={<GrServices />}>
          <h3 className="vertical-timeline-element-title text-2xl md:text-4xl font-bold">
            FrontEnd Devloper
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Dhaka, Bangladesh
          </h4>
          <p>
            Created several FronEnd projects. I have hand on experience making
            pictorial website.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          date="2019 - 2022"
          iconStyle={{ background: "#5758BB", color: "#fff" }}
          icon={<GrServices />}>
          <h3 className="vertical-timeline-element-title text-2xl md:text-4xl font-bold">
            Web Designer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Dhaka, Bangladesh
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          date="2018-2020"
          iconStyle={{ background: "#A3CB38", color: "#fff" }}
          icon={<GrServices />}>
          <h3 className="vertical-timeline-element-title text-2xl md:text-4xl font-bold">
            Responsive UI
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Dhaka, Bangladesh
          </h4>
          <p>Making website responsive for any devices.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          date="April 2018"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<GrServices />}>
          <h3 className="vertical-timeline-element-title text-2xl md:text-4xl font-bold">
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Services;
