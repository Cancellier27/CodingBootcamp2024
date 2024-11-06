import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

import Footer from "./components/footer"
import Nav from "./components/nav"
import jsImage from "./images/js-image.jpg"
import Carousel from "react-bootstrap/Carousel"

import website from "./images/carousel/website.PNG"
import timer from "./images/carousel/timerReact.PNG"
import rpgGame from "./images/carousel/rpgGame.PNG"
import snake from "./images/carousel/snakeGame.PNG"
import githubApp from "./images/carousel/githubApp.PNG"
import fiflixCrop from "./images/carousel/fiflixCrop.png"

function App() {
  return (
    <div id="general-container">
      <Nav />
      <div className="main-section">
        <section id="home">
          <h1>Hi, I am Filipe!</h1>
          <h4>
            A Civil Engineer in career transition to become a web developer
          </h4>
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            <br></br>
            <br></br>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. <br></br>
            <br></br>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </section>
        <section id="projects">


          <div className="carousel-container">
            {/* <div className="bottom-white-strip" ></div> */}
            <Carousel >
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={website}
                  alt="First slide"
                />
                <div className="front">
                  <h5 >Portfolio website</h5>
                  <p >
                    Website created with vanilla Javascript HTML and CSS.
                  </p>
                </div>
              </Carousel.Item>
              {/* <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={website}
                  alt="First slide"
                />
                <Carousel.Caption className="front">
                  <h5 >Portfolio website</h5>
                  <p >
                    Website created with vanilla Javascript HTML and CSS.
                  </p>
                </Carousel.Caption>
              </Carousel.Item> */}
              {/* <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={timer}
                  alt="Second slide"
                />
                <Carousel.Caption className="front">
                  <h5>Timer app</h5>
                  <p>
                    Timer app created with ReactJs.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={rpgGame}
                  alt="Third slide"
                />
                <Carousel.Caption className="front">
                  <h5>RPG game</h5>
                  <p>
                    RPG game project created with ReactJs.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={snake}
                  alt="fourth slide"
                />
                <Carousel.Caption className="front">
                  <h5>Snake game</h5>
                  <p>
                    Snake game creted with vanilla Javascript, canvas tag from HTML and CSS
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={githubApp}
                  alt="fifth slide"
                />
                <Carousel.Caption className="front">
                  <h5>GitHub Search</h5>
                  <p>
                    App to search GitHub users from GitHub Api and bring information about repositories quantity.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={fiflixCrop}
                  alt="fourth slide"
                />
                <Carousel.Caption className="front">
                  <h5>Fiflix</h5>
                  <p>
                    Netflix clone website to display movies and videos, creted with ReactJs.
                  </p>
                </Carousel.Caption>
              </Carousel.Item> */}
            </Carousel>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default App
