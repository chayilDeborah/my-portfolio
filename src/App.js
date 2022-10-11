import About from "./components/About"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"

const App = () => {
  return (
    <>
    <main className="text-gray-400 bg-gray-900 body-font">
    <Navbar />
    <About />
    <Projects />
    </main>
    </>
  )
}
export default App 
