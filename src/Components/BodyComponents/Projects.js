import Title from "../Title"


export default function Projects(props) {
    return (
        <div ref={props.projectsRef} className="flex flex-col gap-10">
            <Title>projects</Title>
        </div>
    )
}