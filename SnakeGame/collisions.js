class Collision {
  constructor(props) {
    this.player = props.player
    this.enemies = props.enemies
  }

  collisionCheck() {
    let pp = this.player.getPosition()
    
    this.enemies.forEach(enemy => {
      let ep = enemy.getPosition()
      
      if(!enemy.isDestroyed) {
        if(pp[0] >= ep[0] && pp[0] <= ep[0]+10 && pp[1] >= ep[1] && pp[1] <= ep[1]+10 ||
          pp[0]+10 >= ep[0] && pp[0]+10 <= ep[0]+10 && pp[1] >= ep[1] && pp[1] <= ep[1]+10 ||
          pp[0] >= ep[0] && pp[0] <= ep[0]+10 && pp[1]+10 >= ep[1] && pp[1]+10 <= ep[1]+10 ||
          pp[0]+10 >= ep[0] && pp[0]+10 <= ep[0]+10 && pp[1]+10 >= ep[1] && pp[1]+10 <= ep[1]+10
        ) {
          // Colliding!
          this.player.size++
          enemy.isDestroyed = true
        } 
      }
    });
  }

  itselfCollision() {
    let posCheck = this.player.xyPrevLocation.slice(10, this.player.size * 6)
    let plaPorString = `${this.player.x},${this.player.y}`
    

     
    if(posCheck.includes(plaPorString)) {
      console.log(posCheck.length)
      console.log(this.player.xyPrevLocation.length)
      // colliding itself
      alert("GameOver!")
    }
  }

  init() {
    this.collisionCheck()
    this.itselfCollision()
  }
}