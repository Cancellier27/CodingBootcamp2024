class Enemy {
  constructor({x, y, sizeX, sizeY, ctx, color, speed}) {
    this.x = x
    this.y = y
    this.sizeX = sizeX || 10
    this.sizeY = sizeY || 10
    this.ctx = ctx
    this.color = color || "orange"
    this.isDestroyed = false
    this.repositioning = false
    this.init()
  }

  getPosition() {
    return [this.x, this.y]
  }

  draw() {
    if(!this.isDestroyed) {
      this.ctx.fillStyle = this.color
      this.ctx.fillRect(this.x, this.y, this.sizeX, this.sizeY)
    } else if (!this.repositioning) {
      // start repositioning
      this.replacing()
      this.repositioning = true
    }
  }

  replacing() {
    setTimeout( () => {
      this.x = Math.random() * 490 + 1
      this.y = Math.random() * 290 + 1
      this.isDestroyed = false
      this.repositioning = false
    } ,4000)
  }



  init() {
    this.draw()
  }
}
