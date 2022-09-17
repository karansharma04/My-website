import Title from "../Title"


export default function Education(props) {
    return (
        <div ref={props.educationRef} className="flex flex-col gap-10">
            <Title>education</Title>
            <div className="flex">
                <div className="text-white px-2">degree:</div>
                <div>Bachelor of Technology in Computer Science and Engineering from IIT Guwahati. (2019 - present)</div>
            </div>
            <div className="flex">
                <div className="text-white px-2">keyCoursesUndertaken:</div>
                <div>Data Structures and Algorithms, Operating Systems, Networks, Machine Learning, Deep Learning, Probability Theory and Random Processes, Softare Engineering Theory and Lab, AR/VR</div>
            </div>
            <div className="flex">
                <div className="text-white px-2">currentCPI:</div>
                <div>8.51</div>
            </div>
        </div>
    )
}