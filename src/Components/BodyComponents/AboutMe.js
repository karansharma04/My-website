
import myImage from "../../karan.jpg"
import Title from "../Title"
export default function AboutMe(props) {
    return (
        <div ref={props.aboutMeRef} className="flex flex-col gap-10 pb-96">
            <Title>aboutMe</Title>
            <div className="flex">
                <div>
                    <img src={myImage} alt="Karan Sharma" width="620"/>
                </div>
                <div className="px-10 leading-7">
                    <div className="pt-10">Hi all! My name is Karan, and I'm a final year B.Tech undergrad student pursuing Computer Science and Engineering from IIT Guwahati.
                    </div>
                    <div>
                        Last summer I interned at DevRev, where I developed and deployed a video call feature and it's corresponding frameworks end-to-end in app, working on various technologies like React Typescript and Cypress for front-end and Golang for backend.
                    </div>
                    <div className="pt-10">
                        I'm currently continuing my internship at DevRev part-time as a Member of Technical Staff intern along with my degree.
                    </div>
                    <div>
                       In my free time, I love to watch f1, and give competitive programming contests.
                    </div>
                </div>
            </div>
        </div>
    )
}