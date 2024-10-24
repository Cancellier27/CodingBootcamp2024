class Player {
  constructor({x, y, sizeX, sizeY, ctx, color, speed, size}) {
    this.x = x
    this.y = y
    this.sizeX = sizeX || 10
    this.sizeY = sizeY || 10
    this.ctx = ctx
    this.color = color || "orange"
    this.speed = speed || 1
    this.size = size
    this.xyPrevLocation = []
    this.lastDirection = null
    this.init()
  }

  walk() {
    if (directions.length === 0) {
      this.draw()
      return
    }

    let dir = directions[directions.length - 1]

    if (
      (dir === "right" && this.lastDirection === "left") ||
      (dir === "left" && this.lastDirection === "right") ||
      (dir === "up" && this.lastDirection === "down") ||
      (dir === "down" && this.lastDirection === "up")
    ) {
      // Not allow go to walk behind
      this.draw()
      return
    }

    if (dir === "right") {
      this.lastDirection = "right"
      if (this.x >= 499) {
        this.x = -9
      } else {
        this.x = this.x + this.speed
      }
    }
    if (dir === "left") {
      this.lastDirection = "left"
      if (this.x <= -9) {
        this.x = 499
      } else {
        this.x = this.x - this.speed
      }
    }
    if (dir === "up") {
      this.lastDirection = "up"
      if (this.y <= -9) {
        this.y = 299
      } else {
        this.y = this.y - this.speed
      }
    }
    if (dir === "down") {
      this.lastDirection = "down"
      if (this.y >= 299) {
        this.y = -9
      } else {
        this.y = this.y + this.speed
      }
    }

    this.xyPrevLocation.unshift(`${this.x},${this.y}`)
    if (this.xyPrevLocation.length > 1000) {
      this.xyPrevLocation.length = 1000
    }
    this.draw()
  }

  getPosition() {
    return [this.x, this.y]
  }

  draw() {
    this.ctx.fillStyle = this.color
    this.ctx.fillRect(this.x, this.y, this.sizeX, this.sizeY)

    if (this.size > 1) {
      this.ctx.fillStyle = "orange"
      for (let i = 1; i < this.size; i++) {
        // 120,230
        this.ctx.fillRect(
          Number(this.xyPrevLocation[i * 10].split(",")[0]),
          Number(this.xyPrevLocation[i * 10].split(",")[1]),
          this.sizeX,
          this.sizeY
        )
        
      }
    }
  }

  init() {
    this.draw()
  }
}
