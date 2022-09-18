import Intro from "./BodyComponents/Intro"
import AboutMe from "./BodyComponents/AboutMe"
import Education from "./BodyComponents/Education"
import Experience from "./BodyComponents/Experience"
import Cp from "./BodyComponents/Cp"
import Projects from "./BodyComponents/Projects"
import Achievements from "./BodyComponents/Achievements"

export default function Body(props) {
    return (
        <div className="w-full flex-col justify-start pt-40 px-4 md:px-32 text-[#B9B9B9]">
            <Intro />
            <AboutMe aboutMeRef={props.aboutMeRef} />
            <Education educationRef={props.educationRef} />
            <Experience experienceRef={props.experienceRef} />
            <Projects projectsRef={props.projectsRef} />
            <Achievements achievementsRef={props.achievementsRef} />
            <Cp cpRef={props.cpRef} />
        </div>
    )
}