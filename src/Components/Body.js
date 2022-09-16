import Intro from "./BodyComponents/Intro"
import AboutMe from "./BodyComponents/AboutMe"

export default function Body({aboutMeRef}) {
    return (
        <div className="w-full flex-col justify-start pt-40 px-32 bg-slate-900 text-[#B9B9B9]">
            <Intro/>
            <AboutMe aboutMeRef={aboutMeRef}/>
        </div>
    )
}