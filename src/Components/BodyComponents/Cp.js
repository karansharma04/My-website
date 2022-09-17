import Title from "../Title";
import { SiCodeforces, SiCodechef } from "react-icons/si"

export default function Cp(props) {
    return (
        <div ref={props.cpRef} className="flex flex-col gap-10 pb-96">
            <Title>competitiveProgamming</Title>
            <div>
                I give competitive programming contests in my free time. I'm a <span className="text-zinc-200">5 star rated coder</span> on CodeChef and <span className="text-zinc-200">Expert</span> on Codeforces.
            </div>
            <div className="flex gap-2 leading-8">
                <div className="align-baseline">My Handles:</div>
                <div><a href="https://codeforces.com/profile/_karan">
                    <SiCodeforces className="transition-all hover:scale-105 hover:-translate-y-0.5" size="2em" color="white" />
                </a></div>
                <div className="px-4"><a href="https://www.codechef.com/users/karan_04">
                    <SiCodechef className="transition-all hover:scale-105 hover:-translate-y-0.5" size="2em" color="white" />
                </a></div>
            </div>
        </div>
    )
}