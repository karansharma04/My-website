import Title from "../Title";
import { BsPlusLg } from "react-icons/bs";
import { useState, useCallback, useRef } from "react";
import "../../App.css";

export default function Projects(props) {
  const [showInterviewTrackerContent, setShowInterviewTrackerContent] =
    useState(false);
  const [showVisualizerContent, setShowVisualizerContent] = useState(false);

  const toggleShowInterviewTrackerContent = useCallback(() => {
    setShowInterviewTrackerContent(!showInterviewTrackerContent);
  }, [showInterviewTrackerContent]);

  const toggleShowVisualizerContent = useCallback(() => {
    setShowVisualizerContent(!showVisualizerContent);
  }, [showVisualizerContent]);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  return (
    <div ref={props.projectsRef} className="flex flex-col gap-10 pb-8 sm:pb-16 md:pb-24 lg:pb-32">
      <Title>projects</Title>
      <div>
        <div className="flex gap-2 align-middle cursor-pointer">
          <div
            className="align-middle pt-1 text-white"
            onClick={toggleShowInterviewTrackerContent}
          >
            <div
              className={`${
                showInterviewTrackerContent && "rotate-45 text-yellow-500"
              } transition-all duration-400 ease-linear`}
            >
              <BsPlusLg />
            </div>
          </div>
          <div
            className="underline underline-offset-2"
            onClick={toggleShowInterviewTrackerContent}
          >
            Interview Preparation Tracker (Coding Club, IITG)
          </div>
        </div>
        <div
          className={`bg-black overflow-hidden px-6 ${
            showInterviewTrackerContent ? "h-96 sm:h-80 md:h-56 lg:h-48 xl:h-32 pt-4" : "h-0 bg-transparent text-transparent"
          } transition-all duration-400 ease-linear`}
          ref={firstRef}
        >
          <div>
            - Developed a Node.js-based web application project to help users
            prepare for interviews by practising and adding topics and
            questions,and read and write interview experiences.
          </div>
          <div>
            - The user database was stored in the MongoDB database and multiple
            dependencies including Express.js, Mongoose, EJS, Admin-bro and
            Multer were used.
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-2 align-middle cursor-pointer">
          <div
            className="align-middle pt-1 text-white"
            onClick={toggleShowVisualizerContent}
          >
            <div
              className={`${
                showVisualizerContent && "rotate-45 text-yellow-500"
              } transition-all duration-400 ease-linear`}
            >
              <BsPlusLg />
            </div>
          </div>
          <div
            className="underline underline-offset-2"
            onClick={toggleShowVisualizerContent}
          >
            A* Pathfinding Visualizer (Personal Project)
          </div>
        </div>
        <div
          className={`bg-black overflow-hidden px-6 ${
            showVisualizerContent ? "h-60 sm:h-56 md:h-48 lg:h-42 xl:h-24  pt-4" : "h-0"
          } transition-all duration-400 ease-linear`}
          ref={secondRef}
        >
          - Developed a python visualization of the A* pathfinding algorithm
          using Pygame and TKinter, which allows users to pick a start and end
          location and view the process of finding the shortest path.
        </div>
      </div>
    </div>
  );
}
