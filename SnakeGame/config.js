const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")
let animationFrame

const directions = []

const player1 = new Player({
  x: 245,
  y: 150,
  sizeX: 10,
  sizeY: 10,
  ctx: ctx,
  speed: 1,
  size: 1,
  color: "red"
})

const enemy1 = new Enemy({
  x: 130,
  y: 50,
  sizeX: 10,
  sizeY: 10,
  ctx: ctx,
  color: "blue"
})

const enemy2 = new Enemy({
  x: 230,
  y: 20,
  sizeX: 10,
  sizeY: 10,
  ctx: ctx,
  color: "blue"
})

const enemy3 = new Enemy({
  x: 99,
  y: 250,
  sizeX: 10,
  sizeY: 10,
  ctx: ctx,
  color: "blue"
})
const enemy4 = new Enemy({
  x: 339,
  y: 150,
  sizeX: 10,
  sizeY: 10,
  ctx: ctx,
  color: "blue"
})

const coll = new Collision({
  player: player1,
  enemies: [enemy1, enemy2, enemy3, enemy4]
})

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    if (!directions.includes("right")) {
      directions.push("right")
    }
  }
  if (e.key === "ArrowLeft") {
    if (!directions.includes("left")) {
      directions.push("left")
    }
  }
  if (e.key === "ArrowUp") {
    if (!directions.includes("up")) {
      directions.push("up")
    }
  }
  if (e.key === "ArrowDown") {
    if (!directions.includes("down")) {
      directions.push("down")
    }
  }
})

document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowRight") {
    if (directions.includes("right")) {
      directions.splice(directions.indexOf("right"), 1)
    }
  }
  if (e.key === "ArrowLeft") {
    if (directions.includes("left")) {
      directions.splice(directions.indexOf("left"), 1)
    }
  }
  if (e.key === "ArrowUp") {
    if (directions.includes("up")) {
      directions.splice(directions.indexOf("up"), 1)
    }
  }
  if (e.key === "ArrowDown") {
    if (directions.includes("down")) {
      directions.splice(directions.indexOf("down"), 1)
    }
  }
})

function start() {
  let previousMs
  const step = 1 / 60

  const tick = (timestampMs) => {
    if (previousMs === undefined) {
      previousMs = timestampMs
    }

    let delta = (timestampMs - previousMs) / 1000

    while (delta >= step) {
      ctx.clearRect(0, 0, 500, 300)
      loop()
      delta -= step
    }

    previousMs = timestampMs - delta * 1000
    //Recapture the callback to be able to shut it off
    animationFrame = requestAnimationFrame(tick)
  }

  // Initial kickoff
  animationFrame = requestAnimationFrame(tick)
}

function changeScore() {
  document.querySelector(".score-text").innerHTML = player1.size - 1
}

function loop() {
  player1.walk()
  enemy1.init()
  enemy2.init()
  enemy3.init()
  enemy4.init()
  changeScore()
  coll.init()
}

start()
