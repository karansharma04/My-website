import NavBar from "./Components/Navbar";
import Body from "./Components/Body";
import { useRef } from "react";

function App() {
  const aboutMeRef = useRef(null);
  return (
    <div className="font-ibmMono">
      <NavBar aboutMeRef={aboutMeRef}/>
      <Body aboutMeRef={aboutMeRef}/>
    </div>
  );
}

export default App;
