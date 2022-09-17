import { FaLinkedinIn, FaGithub } from 'react-icons/fa'


export default function Intro() {
    return (
        <div className="">
            <div><span className="bg-black">Hi all,</span></div>
            <div><span className="bg-black">I am</span></div>
            <div>
                <div className="py-4 text-6xl text-zinc-200">Karan Sharma,</div>
                <div className="text-4xl pb-2 text-zinc-350">IIT Guwahati Undergrad,</div>
                <div className="text-4xl pb-4 text-zinc-350">Developer and Competitive Programmer</div>
                <div className="pb-6 text-zinc-450 leading-7">I'm a final year B.Tech undergrad pursuing <span className=" text-sky-600">Computer Science and Engineering</span> from IIT Guwahati.
                    I'm naturally inclined towards problem solving and am interested in CS fundamentals, web development with special focus on UI/UX, and competitive programming.</div>
            </div>
            <div className="flex">
                <div><a href="https://www.linkedin.com/in/karansharma04/">
                    <FaLinkedinIn className="transition-all hover:scale-105 hover:-translate-y-0.5" size="2em" color="white" />
                </a></div>
                <div className="px-4"><a href="https://www.github.com/karansharma04/">
                    <FaGithub className="transition-all hover:scale-105 hover:-translate-y-0.5" size="2em" color="white" />
                </a></div>
            </div>
        </div>
    )
}