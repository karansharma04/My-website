import { useCallback } from "react"
import NavElement from "./NavbarComponents/NavElement"
import karanResume from "../karanresume.pdf"

export default function NavBar(props) {

    const AboutMeHandler = useCallback(() => {
        props.aboutMeRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
        , [props.aboutMeRef]);

    const EducationHandler = useCallback(() => {
        props.educationRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
        , [props.educationRef]);

    const ExperienceHandler = useCallback(() => {
        props.experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
        , [props.experienceRef]);

    const ProjectsHandler = useCallback(() => {
        props.projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
        , [props.projectsRef]);
    const AchievementsHandler = useCallback(() => {
        props.achievementsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
        , [props.achievementsRef]);
    const CpHandler = useCallback(() => {
        props.cpRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
        , [props.cpRef]);

    return (
        <div className="fixed top-0 left-0 w-full">
            <div className="flex justify-end bg-black text-[#B9B9B9] font-ibmMono">
                <NavElement onClick={AboutMeHandler}>aboutMe</NavElement>
                <NavElement onClick={EducationHandler}>education</NavElement>
                <NavElement onClick={ExperienceHandler}>experience</NavElement>
                <NavElement onClick={ProjectsHandler}>projects</NavElement>
                <NavElement onClick={AchievementsHandler}>achievements</NavElement>
                <NavElement onClick={CpHandler}>competitiveProgramming</NavElement>
                <NavElement className="underline underline-offset-2">
                    <a href={karanResume} without rel="noopener noreferrer" target="_blank">resume</a>
                </NavElement>
            </div>
        </div>

    )
}