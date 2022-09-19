import NavBar from "./Components/Navbar";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { useRef } from "react";

function App() {
  const aboutMeRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const achievementsRef = useRef(null);
  const cpRef = useRef(null);

  return (
    <div className="bg-slate-900 md:text-lg">
      <div className="font-ibmMono flex-col  text-center sm:text-left">
      <NavBar
        aboutMeRef={aboutMeRef}
        educationRef={educationRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        achievementsRef={achievementsRef}
        cpRef={cpRef}
      />
      <Body
        aboutMeRef={aboutMeRef}
        educationRef={educationRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        achievementsRef={achievementsRef}
        cpRef={cpRef}
      />
      <Footer />
    </div> 
    </div>
  );
}

export default App;
