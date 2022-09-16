import { useCallback } from "react"
import NavElement from "./NavbarComponents/NavElement"

export default function NavBar(props) {

    const AboutMeHandler = useCallback(() =>{
        props.aboutMeRef.current?.scrollIntoView();
    }
        , [props.aboutMeRef]);

    return (
        <div className="fixed top-0 left-0 w-full">
            <div className="flex justify-end bg-black text-[#B9B9B9] font-ibmMono">
                <NavElement onClick={AboutMeHandler}>aboutMe</NavElement>
                <NavElement>education</NavElement>
                <NavElement>experience</NavElement>
                <NavElement>projects</NavElement>
                <NavElement>achievements</NavElement>
                <NavElement>competitiveProgramming</NavElement>
                <NavElement className="underline underline-offset-2">resume</NavElement>
            </div>
        </div>

    )
}