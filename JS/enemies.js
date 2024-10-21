class Enemy {
  constructor({x, y, sizeX, sizeY, ctx, color}) {
    this.x = x
    this.y = y
    this.sizeX = sizeX || 10
    this.sizeY = sizeY || 10
    this.ctx = ctx
    this.isMoving = false
    this.color = color || "orange"
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

  getPosition() {
    return [this.x, this.y]
  }

  draw() {
    this.ctx.fillStyle = this.color
    this.ctx.fillRect(this.x, this.y, this.sizeX, this.sizeY)
  }

  init() {
    this.draw()
  }
}
