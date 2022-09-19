import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Intro() {
  return (
    <div className="pb-32">
      <div className="text-center sm:text-left">
        <span className="bg-black">Hi all,</span>
      </div>
      <div className="text-center sm:text-left">
        <span className="bg-black">I am</span>
      </div>
      <div>
        <div className="py-6 text-4xl md:text-5xl lg:text-6xl text-zinc-200 text-center sm:text-left">
          Karan Sharma,
        </div>
        <div className="text-2xl md:text-3xl lg:text-4xl pb-4 text-zinc-350 text-center sm:text-left">
          IIT Guwahati Undergrad,
        </div>
        <div className="text-2xl md:text-3xl lg:text-4xl pb-6 text-zinc-350 text-center sm:text-left">
          Developer and Competitive Programmer
        </div>
        <div className="pb-8 text-zinc-450 leading-7 text-center sm:text-left">
          I'm a final year B.Tech undergrad pursuing{" "}
          <span className=" text-sky-600">
            Computer Science and Engineering
          </span>{" "}
          from IIT Guwahati. I'm naturally inclined towards problem solving and
          am interested in CS fundamentals, web development with special focus
          on UI/UX, and competitive programming.
        </div>
      </div>
      <div className="flex px-4 justify-center sm:justify-start">
        <div>
          <a
            href="https://www.linkedin.com/in/karansharma04/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedinIn
              className="transition-all hover:scale-125 hover:text-yellow-100 text-white hover:-translate-y-1"
              size="2em"
            />
          </a>
        </div>
        <div className="px-4">
          <a
            href="https://www.github.com/karansharma04/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub
              className="transition-all hover:scale-125 hover:text-yellow-100 text-white hover:-translate-y-1"
              size="2em"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
