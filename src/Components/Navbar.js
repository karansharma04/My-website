import { useCallback } from "react";
import NavElement from "./NavbarComponents/NavElement";
import karanResume from "../karanresume.pdf";
import { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { BsArrowUp } from "react-icons/bs";
import NavIcon from "./NavbarComponents/NavIcon";
import NavMenuItem from "./NavbarComponents/NavMenuItem";

export default function NavBar(props) {
  const AboutMeHandler = useCallback(() => {
    props.aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
    setShowSideMenu(false);
  }, [props.aboutMeRef]);

  const EducationHandler = useCallback(() => {
    props.educationRef.current?.scrollIntoView({ behavior: "smooth" });
    setShowSideMenu(false);
  }, [props.educationRef]);

  const ExperienceHandler = useCallback(() => {
    props.experienceRef.current?.scrollIntoView({ behavior: "smooth" });
    setShowSideMenu(false);
  }, [props.experienceRef]);

  const ProjectsHandler = useCallback(() => {
    props.projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    setShowSideMenu(false);
  }, [props.projectsRef]);
  const AchievementsHandler = useCallback(() => {
    props.achievementsRef.current?.scrollIntoView({ behavior: "smooth" });
    setShowSideMenu(false);
  }, [props.achievementsRef]);
  const CpHandler = useCallback(() => {
    props.cpRef.current?.scrollIntoView({ behavior: "smooth" });
    setShowSideMenu(false);
  }, [props.cpRef]);

  const [showUpArrow, setShowUpArrow] = useState(false);
  const arrowRef = useRef(null);

  useEffect(() => {
    window.onscroll = () =>
      window.pageYOffset <= 440 ? setShowUpArrow(false) : setShowUpArrow(true);
    return () => (window.onscroll = null);
  });

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize.innerWidth]);

  const [showSideMenu, setShowSideMenu] = useState(false);

  return (
    <div className="fixed z-10 top-0 left-0 text-black w-full">
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
            className="transition-all hover:scale-125  hover:text-yellow-100 text-white hover:-translate-y-1"
            size="3em"
          />
        </div>
      </CSSTransition>
      {windowSize.innerWidth > 1000 ? (
        <div className="flex justify-end bg-black text-[#B9B9B9] font-ibmMono">
          <NavElement onClick={AboutMeHandler}>aboutMe</NavElement>
          <NavElement onClick={EducationHandler}>education</NavElement>
          <NavElement onClick={ProjectsHandler}>projects</NavElement>
          <NavElement onClick={ExperienceHandler}>experience</NavElement>
          <NavElement onClick={AchievementsHandler}>achievements</NavElement>
          <NavElement onClick={CpHandler}>competitiveProgramming</NavElement>
          <NavElement className="underline underline-offset-2">
            <a href={karanResume} rel="noopener noreferrer" target="_blank">
              resume
            </a>
          </NavElement>
        </div>
      ) : (
        <>
          <div
            onClick={() => setShowSideMenu(!showSideMenu)}
            className="flex justify-end bg-black text-[#B9B9B9]font-ibmMono"
          >
            <NavIcon close={showSideMenu} />
          </div>

          <div
            className={`fixed z-auto top-[44px] md:top-[88px] bg-zinc-800 gap-5 md:gap-10 w-full flex flex-col justify-start items- overflow-scroll ${
              showSideMenu ? "h-full pt-5 md:pt-10 " : "top-0 h-0"
            } transition-all duration-500`}
          >
            <NavMenuItem onClick={AboutMeHandler}>aboutMe</NavMenuItem>
            <NavMenuItem onClick={EducationHandler}>education</NavMenuItem>
            <NavMenuItem onClick={ProjectsHandler}>projects</NavMenuItem>
            <NavMenuItem onClick={ExperienceHandler}>experience</NavMenuItem>
            <NavMenuItem onClick={AchievementsHandler}>
              achievements
            </NavMenuItem>
            <NavMenuItem onClick={CpHandler}>
              competitiveProgramming
            </NavMenuItem>
            <NavMenuItem className="underline underline-offset-2">
              <a href={karanResume} rel="noopener noreferrer" target="_blank">
                resume
              </a>
            </NavMenuItem>
          </div>
        </>
      )}
    </div>
  );
}
