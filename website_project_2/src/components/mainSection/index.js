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
        <h1 className="about-title">ABOUT ME</h1>
        <p className="about-text">
          <img
            className="about-image"
            src={jsImage}
            alt="js coding general images, with if and else"
          ></img>
          Born and raised in Urussanga, Santa Catarina, Brazil, I have over 7
          years of experience as a civil engineer, specializing in construction.
          Throughout my career, I honed soft skills like teamwork, leadership,
          and problem-solving, and faced significant challenges, such as
          adapting to work abroad with different languages and standards.
          <br></br>
          <br></br>
          In 2019, I pivoted toward coding, fueled by my passion for technology,
          games, and programming. Starting with Python and transitioning to web
          development with JavaScript, I fell in love with creating interactive
          web experiences using JS, HTML, and CSS. I pursued self-learning
          through platforms like Udemy, RocketSeat, and coding challenges on
          Codewars and HackerRank. <br></br>
          <br></br>
          In 2022, I began a Master's in Computer Science in London but had to
          pause due to financial constraints. Despite this, I continued studying
          independently. In 2023, I became a father, which delayed my career
          shift to prioritize family needs.
          <br></br>
          <br></br>
          In 2024, I reignited my tech aspirations by completing a Full-Stack
          Web Development Bootcamp at HyperionDev. I deepened my knowledge in
          React, MongoDB, SQL, Bootstrap, and other technologies, renewing my
          motivation to secure a role in the tech industry.
        </p>
      </section>

      <section id="projects">
        <h1 className="projects-title"> PROJECTS I HAVE DEVELOPED</h1>
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
