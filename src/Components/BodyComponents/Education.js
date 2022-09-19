import Title from "../Title"


export default function Education(props) {
    return (
        <div ref={props.educationRef} className="flex flex-col gap-10 pb-8 sm:pb-16 md:pb-24 lg:pb-32">
            <Title>education</Title>
            <div className="flex flex-col sm:flex-row">
                <div className="text-white px-2 text-center md:text-left">degree:</div>
                <div className=" text-center md:text-left">Bachelor of Technology in Computer Science and Engineering from IIT Guwahati. (2019 - present)</div>
            </div>
            <div className="flex flex-col sm:flex-row">
                <div className="text-white px-2  text-center md:text-left">keyCoursesUndertaken:</div>
                <div className=" text-center md:text-left">Data Structures and Algorithms, Operating Systems, Networks, Machine Learning, Deep Learning, Probability Theory and Random Processes, Softare Engineering Theory and Lab, AR/VR</div>
            </div>
            <div className="flex flex-col sm:flex-row">
                <div className="text-white px-2  text-center md:text-left">currentCPI:</div>
                <div className=" text-center md:text-left">8.51</div>
            </div>
        </div>
    )
}