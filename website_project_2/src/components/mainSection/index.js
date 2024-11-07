import "./mainSection.css"

import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

import jsImage from "../../images/js-image.jpg"
import website from "../../images/carousel/website.PNG"
import timer from "../../images/carousel/timerReact.PNG"
import rpgGame from "../../images/carousel/rpgGame.PNG"
import snake from "../../images/carousel/snakeGame.PNG"
import githubApp from "../../images/carousel/githubApp.PNG"
import fiflix from "../../images/carousel/fiflixCrop.png"

export default function MainSection() {
  return (
    <div className="main-section">
      <section id="home">
        <h1>Hi, I am Filipe!</h1>
        <h4>A Civil Engineer in career transition to become a web developer</h4>
      </section>

      <section id="about">
        <h1 className="about-title">ABOUT</h1>
        <p className="about-text">
          <img
            className="about-image"
            src={jsImage}
            alt="js coding general images, with if and else"
          ></img>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
          <br></br>
          <br></br>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. <br></br>
          <br></br>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      <section id="projects">
        <h1 className="projects-title">title</h1>
        <div className="cards-container">
          <Card className="card">
            <Card.Img variant="top" src={website} />
            <Card.Body>
              <Card.Title>Portifolio</Card.Title>
              <Card.Text>
                Portfolio website created with vanilla Javascript
              </Card.Text>
              <Button variant="danger">
                <a
                  href="https://github.com/Cancellier27/web-app-fc"
                  target="_blank"
                >
                  Git Repository
                </a>
              </Button>
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Img variant="top" src={timer} />
            <Card.Body>
              <Card.Title>Stopwatch</Card.Title>
              <Card.Text>Stopwatch app created with ReactJs</Card.Text>
              <Button variant="danger">
                <a
                  href="https://github.com/Cancellier27/Timer-React"
                  target="_blank"
                >
                  Git Repository
                </a>
              </Button>
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Img variant="top" src={rpgGame} />
            <Card.Body>
              <Card.Title>RPG Game</Card.Title>
              <Card.Text>
                RPG game, developed using React Js from an existing architecture
                from vanilla Javascript.
              </Card.Text>
              <Button variant="danger">
                <a
                  href="https://github.com/Cancellier27/rpg-game-react"
                  target="_blank"
                >
                  Git Repository
                </a>
              </Button>
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Img variant="top" src={snake} />
            <Card.Body>
              <Card.Title>Snake Game</Card.Title>
              <Card.Text>
                Classic snake game created with vanilla Javascript and HTML
                canvas element.
              </Card.Text>
              <Button variant="danger">
                <a
                  href="https://github.com/Cancellier27/snake-game-test"
                  target="_blank"
                >
                  Git Repository
                </a>
              </Button>
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Img variant="top" src={githubApp} />
            <Card.Body>
              <Card.Title>GitHub Search tool</Card.Title>
              <Card.Text>
                App to search GitHub for users and listing repositories and
                other information about them.
              </Card.Text>
              <Button variant="danger">
                <a
                  href="https://github.com/Cancellier27/github-search-app"
                  target="_blank"
                >
                  Git Repository
                </a>
              </Button>
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Img variant="top" src={fiflix} />
            <Card.Body>
              <Card.Title>Fiflix</Card.Title>
              <Card.Text>
                Netflix clones website, created with ReactJs
              </Card.Text>
              <Button variant="danger">
                <a
                  href="https://github.com/Cancellier27/React-Immersion"
                  target="_blank"
                >
                  Git Repository
                </a>
              </Button>
            </Card.Body>
          </Card>
        </div>
      </section>
    </div>
  )
}
