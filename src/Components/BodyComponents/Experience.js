import Title from "../Title"

export default function Experience(props) {
    return (
        <div ref={props.experienceRef} className="flex flex-col gap-10 pb-8 sm:pb-16 md:pb-24 lg:pb-32">
            <Title>experience</Title>
            <div>
                <div className="text-zinc-200 text-lg pb-4">
                    Summer Internship at DevRev (May 2022 - July 2022)
                </div>
                <div className="flex py-2 gap-2  flex-col sm:flex-row">
                    <div className="text-zinc-200">title:</div>
                    <div>Member of Technical Staff Intern</div>
                </div>
                <div className="flex py-2 gap-2  flex-col sm:flex-row">
                    <div className="text-zinc-200">workDone:</div>
                    <div>
                        <div> - Developed and deployed an end-to-end video call feature in app, using React.js for frontend and Golang for
                            the backend. </div> <div> - The feature was deployed in app, and helped the users in real-time interaction without leaving the context of the
                                application.</div>
                    </div>

                </div>
                <div className="flex py-2 gap-2  flex-col sm:flex-row">
                    <div className="text-zinc-200">techStackUsed:</div>
                    <div>React, TypeScript, Cypress, Go</div>

                </div>
            </div>
        </div>
    )
}