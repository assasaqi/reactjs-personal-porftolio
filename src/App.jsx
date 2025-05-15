import { BrowserRouter} from "react-router-dom"
import Navbar from "./components/Navbar"
import AboutPage from "./page/AboutPage"
import Footer from "./components/Footer"
import Experience from "./page/Experience"
import Projects from "./page/Projects"
import Contact from "./page/Contact"

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <AboutPage />
    <Experience />
    <Projects   />
    <Contact />
    <Footer />
    </BrowserRouter>
  )
}

export default App
