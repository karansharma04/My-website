import Title from "../../Title";
import { Project } from "./project";
import "../../../App.css";

export default function Projects(props) {
  return (
    <div
      ref={props.projectsRef}
      className="flex flex-col gap-10 pb-8 sm:pb-16 md:pb-24 lg:pb-32"
    >
      <Title>projects</Title>
      <Project
        title={
          "Page Migration Simulator (Dr. T. Venkatesh, Dept of CSE, IIT Guwahati)"
        }
        body={
          <div id="page-migration">
            <div>
              - Implemented a simulator for simulating migration of pages
              between local and remote memories from scratch, with a novel hot
              page detection algorithm in remote memory, and LRU for victim page
              selection in local memory.
            </div>
            <div>- Implemented the entire simulator in C++.</div>
          </div>
        }
        bodyId="page-migration"
      />
      <Project
        title={"Interview Preparation Tracker (Coding Club, IITG)"}
        body={
          <div id="interview">
            <div>
              - Developed a Node.js-based web application project to help users
              prepare for interviews by practising and adding topics and
              questions,and read and write interview experiences.
            </div>
            <div>
              - The user database was stored in the MongoDB database and
              multiple dependencies including Express.js, Mongoose, EJS,
              Admin-bro and Multer were used.
            </div>
          </div>
        }
        bodyId="interview"
      />
      <Project
        title={"A* Pathfinding Visualizer (Personal Project)"}
        body={
          <div id="visualizer">
            - Developed a python visualization of the A* pathfinding algorithm
            using Pygame and TKinter, which allows users to pick a start and end
            location and view the process of finding the shortest path.
          </div>
        }
        className={"h-60 sm:h-56 md:h-48 lg:h-42 xl:h-24  pt-4"}
        bodyId="visualizer"
      />
    </div>
  );
}
