class Player {
  constructor({x, y, sizeX, sizeY, ctx}) {
    this.x = x
    this.y = y
    this.sizeX = 10 || sizeX
    this.sizeY = 10 || sizeY
    this.ctx = ctx
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

  move(x, y) {
    this.x = x 
    this.y = y
    this.draw()
  }

  draw() {
    this.ctx.fillStyle = "red"
    this.ctx.fillRect(this.x, this.y, this.sizeX, this.sizeY)
  }

  init() {
    this.draw()
  }
}