class Player {
  constructor({x, y, sizeX, sizeY, ctx, color}) {
    this.x = x
    this.y = y
    this.sizeX = sizeX || 10
    this.sizeY = sizeY || 10
    this.ctx = ctx
    this.color = color || "orange"
    this.init()
  }

  walk() {
    if (directions.length === 0) {
      this.draw()
      return
    }

    let dir = directions[directions.length - 1]

    if (dir === "right" && this.x < 490) {
      this.x++
    }
    if (dir === "left" && this.x > 0) {
      this.x--
    }
    if (dir === "up" && this.y > 0) {
      this.y--
    }
    if (dir === "down" && this.y < 290) {
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
