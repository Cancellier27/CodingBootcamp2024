import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

import Footer from "./components/footer"
import Nav from "./components/nav"
import MainSection from "./components/mainSection"

function App() {
  return (
    <div id="general-container">
      <Nav />
      <MainSection />
      <Footer />
    </div>
  )
}

export default App
