import Title from "../Title"


export default function Achievements(props) {
    return (
        <div ref={props.achievementsRef} className="flex flex-col gap-10 pb-32">
            <Title>achievements</Title>
            <div className="flex flex-col sm:flex-row">
                <div className="text-white px-2">jeeAdvanced2019:</div>
                <div>Secured All India Rank of 510 among 1.6 million contesting candidates, one of the most prestigious competitive exams of India.</div>
            </div>
            <div className="flex flex-col sm:flex-row">
                <div className="text-white px-2">jeeMains2019:</div>
                <div>Secured 99.76 percentile among ~10 million contesting candidates.</div>
            </div>
            <div className="flex flex-col sm:flex-row">
                <div className="text-white px-2">codeforcesDiv2:</div>
                <div>Got a global rank of 470 particicpating in Codeforces Div 2 round among ~30000 particicpants.</div>
            </div>
            <div className="flex flex-col sm:flex-row">
                <div className="text-white px-2">codeChef:</div>
                <div>Got a global rank of 70 in CodeChef Lunchtime.</div>
            </div>
        </div>
    )
}