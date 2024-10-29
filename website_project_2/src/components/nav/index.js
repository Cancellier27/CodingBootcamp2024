import "./nav.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLinkedin, faSquareGithub} from "@fortawesome/free-brands-svg-icons"

export default function () {
  return (
    <nav className="nav-section">
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
      <ul>
        <li>
          <a className="standard-link" href="#home">Home</a>
        </li>
        <li>
          <a className="standard-link" href="#about">About</a>
        </li>
        <li>
          <a className="standard-link" href="#projects">Projects</a>
        </li>
        <li>
          <a className="standard-link" href="#footer">Contact</a>
        </li>
      </ul>
    </nav>
  )
}
