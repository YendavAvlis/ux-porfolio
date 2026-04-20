import Navbar from "./layout/Navbar"
import CaseStudies from "./sections/CaseStudies"
import Contact from "./sections/Contact"
import Home from "./sections/Home"
import ToolsAndTechs from "./sections/ToolsAndTechs"


function App() {


  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Home />
      <CaseStudies />
      <ToolsAndTechs />
      <Contact />
    </div>
  )
}

export default App
