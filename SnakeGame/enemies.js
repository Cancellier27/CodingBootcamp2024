class Enemy {
  constructor({x, y, sizeX, sizeY, ctx, color, speed}) {
    this.x = x
    this.y = y
    this.sizeX = sizeX || 10
    this.sizeY = sizeY || 10
    this.ctx = ctx
    this.color = color || "orange"
    this.init()
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
