import "./App.css"
import Footer from "./components/footer"
import Nav from "./components/nav"

function App() {
  return (
    <div id="general-container">
      <Nav />
      <div className="main-section">
        <section id="home" >HOME</section>
        <section id="about"  >ABOUT</section>
        <section id="projects"  >PROJECT</section>
      </div>
      <Footer />
    </div>
  )
}

export default App
