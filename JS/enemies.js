class Enemy {
  constructor({x, y, sizeX, sizeY, ctx}) {
    this.x = x
    this.y = y
    this.sizeX = 10 || sizeX
    this.sizeY = 10 || sizeY
    this.ctx = ctx
    this.isMoving = false

    this.init()
  }

  autoMove() {
    let n = Math.random()

    if (n <= 0.25 && this.x < 490) {
      this.x++
    }
    if (n > 0.25 || n <= 0.5) {
      if (this.x > 0) {
        this.x--
      }
    }
    if (n > 0.5 || n <= 0.75) {
      if (this.y > 0) {
        this.y--
      }
    }
    if (n > 0.75 && this.y < 290) {
      this.y++
    }

    this.draw()
  }

  move(x, y) {
    this.x = x
    this.y = y
    this.draw()
  }

  draw() {
    this.ctx.fillStyle = "black"
    this.ctx.fillRect(this.x, this.y, this.sizeX, this.sizeY)
  }

  init() {
    this.draw()
  }
}
