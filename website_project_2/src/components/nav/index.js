import "./nav.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLinkedin, faSquareGithub} from "@fortawesome/free-brands-svg-icons"
import {faBars} from "@fortawesome/free-solid-svg-icons"
import {useEffect, useState} from "react"

export default function () {
  const [isHamburger, setIsHamburger] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      console.log("aaa")
      if(window.innerWidth > 1171) {
        document.querySelector(".standard-link-container").style.display = "block"
      } else {
        document.querySelector(".standard-link-container").style.display = "none"
      }
    })
  }, [])

  function toggleNavBar() {
    if (!isHamburger) {
      setIsHamburger(true)
      document.querySelector(".nav-section").classList.add("click-nav-section")
      document.querySelector(".standard-link-container").style.display = "block"
    } else {
      setIsHamburger(false)
      document.querySelector(".nav-section").classList.remove("click-nav-section")
      document.querySelector(".standard-link-container").style.display = "none"
    }
  }

  return (
    <nav className="nav-section">
      <FontAwesomeIcon
        icon={faBars}
        onClick={toggleNavBar}
        className="font-awesome-icon hamburger"
      />
      <div className="photo-icons-section">
        <img
          src="https://avatars.githubusercontent.com/u/62081060?v=4"
          alt="Image of myself"
        ></img>
        <div className="nav-icons">
          <a href="https://www.linkedin.com/in/filipe-cancellier-da-costa-8459ab160/">
            <FontAwesomeIcon icon={faLinkedin} className="font-awesome-icon" />
          </a>
          <a href="https://github.com/Cancellier27">
            <FontAwesomeIcon
              icon={faSquareGithub}
              className="font-awesome-icon"
            />
          </a>
        </div>
      </div>

      <ul className="standard-link-container">
        <li>
          <a className="standard-link" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="standard-link" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="standard-link" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="standard-link" href="#footer">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
