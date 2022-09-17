import Title from "../Title"


export default function Achievements(props) {
    return (
        <div ref={props.achievementsRef} className="flex flex-col gap-10">
            <Title>achievements</Title>
        </div>
    )
}