const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")
let animationFrame

const directions = {up: false, down: false, right:false, left: false}

const player = new Player({
  x: 245,
  y: 145,
  sizeX: 10,
  sizeY: 10,
  ctx: ctx
})

const enemy1 = new Enemy({
  x: 200,
  y: 150,
  sizeX: 10,
  sizeY: 10,
  ctx: ctx
})

const coll = new Collision({objects: [Player, Enemy]})

document.addEventListener("keydown", (e) => {
  if(e.key === "ArrowRight") directions.right = true
  if(e.key === "ArrowLeft") directions.left = true
  if(e.key === "ArrowUp") directions.up = true
  if(e.key === "ArrowDown") directions.down = true
})

document.addEventListener("keyup", (e) => {
  if(e.key === "ArrowRight") directions.right = false
  if(e.key === "ArrowLeft") directions.left = false
  if(e.key === "ArrowUp") directions.up = false
  if(e.key === "ArrowDown") directions.down = false
})


function start() {
  let previousMs;
  const step = 1 / 60;

  const tick = (timestampMs) => {
    if (previousMs === undefined) {
      previousMs = timestampMs;
    }

    let delta = (timestampMs - previousMs) / 1000;

    while (delta >= step) {
      ctx.clearRect(0,0,500,300)
      players()
      delta -= step;
    }

    previousMs = timestampMs - delta * 1000;
    //Recapture the callback to be able to shut it off
    animationFrame = requestAnimationFrame(tick);
  };

  // Initial kickoff
  animationFrame = requestAnimationFrame(tick);
}

function players() {
  player.walk();
  enemy1.draw()
}

start()


