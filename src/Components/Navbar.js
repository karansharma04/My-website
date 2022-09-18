import { useCallback } from "react";
import NavElement from "./NavbarComponents/NavElement";
import karanResume from "../karanresume.pdf";
import { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { BsArrowUp } from "react-icons/bs";

export default function NavBar(props) {
  const AboutMeHandler = useCallback(() => {
    props.aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [props.aboutMeRef]);

  const EducationHandler = useCallback(() => {
    props.educationRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [props.educationRef]);

  const ExperienceHandler = useCallback(() => {
    props.experienceRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [props.experienceRef]);

  const ProjectsHandler = useCallback(() => {
    props.projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [props.projectsRef]);
  const AchievementsHandler = useCallback(() => {
    props.achievementsRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [props.achievementsRef]);
  const CpHandler = useCallback(() => {
    props.cpRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [props.cpRef]);

  const [showUpArrow, setShowUpArrow] = useState(false);
  const arrowRef = useRef(null);

  useEffect(() => {
    window.onscroll = () =>
      window.pageYOffset <= 440 ? setShowUpArrow(false) : setShowUpArrow(true);
    return () => (window.onscroll = null);
  });

  return (
    <div className="fixed top-0 left-0 text-black w-full">
      <CSSTransition
        classNames="up-arrow"
        in={showUpArrow}
        mountOnEnter={true}
        unmountOnExit={true}
        timeout={400}
        nodeRef={arrowRef}
        className="fixed cursor-pointer rounded-full p-3"
      >
        <div
          ref={arrowRef}
          className="px-4"
          onClick={() =>
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            })
          }
        >
          <BsArrowUp
            className="transition-all hover:scale-125 hover:-translate-y-1"
            size="3em"
          />
        </div>
      </CSSTransition>
      <div className="flex justify-end bg-black text-[#B9B9B9] font-ibmMono">
        <NavElement onClick={AboutMeHandler}>aboutMe</NavElement>
        <NavElement onClick={EducationHandler}>education</NavElement>
        <NavElement onClick={ExperienceHandler}>experience</NavElement>
        <NavElement onClick={ProjectsHandler}>projects</NavElement>
        <NavElement onClick={AchievementsHandler}>achievements</NavElement>
        <NavElement onClick={CpHandler}>competitiveProgramming</NavElement>
        <NavElement className="underline underline-offset-2">
          <a href={karanResume} rel="noopener noreferrer" target="_blank">
            resume
          </a>
        </NavElement>
      </div>
    </div>
  );
}
