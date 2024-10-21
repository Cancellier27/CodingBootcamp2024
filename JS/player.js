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

      if(directions.right && this.x < 490) {
      this.x++
    }
    if(directions.left && this.x > 0) {
      this.x--
    }
    if(directions.up && this.y > 0) {
      this.y--
    }
    if(directions.down && this.y < 290) {
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