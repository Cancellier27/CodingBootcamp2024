class Enemy {
  constructor({x, y, sizeX, sizeY, ctx, color, speed}) {
    this.x = x
    this.y = y
    this.speed = speed || 1
    this.initialPos = {x: x, y: y}
    this.sizeX = sizeX || 10
    this.sizeY = sizeY || 10
    this.ctx = ctx
    this.isMoving = false
    this.color = color || "orange"
    this.init()
  }

  autoMove(direction) {

    if (this.x >= 490 || this.x <= 0 || this.y <= 0 || this.y >= 290) {
      this.x = this.initialPos.x
      this.y = this.initialPos.y
      this.draw()
      return
    }

    if (direction === "right") {
      this.x = this.x + this.speed
    }
    if (direction === "left") {
      this.x = this.x - this.speed
    }
    if (direction === "up") {
      this.y = this.y - this.speed
    }
    if (direction === "down") {
      this.y = this.y + this.speed
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
