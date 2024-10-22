class Collision {
  constructor(props) {
    this.player = props.player
    this.enemies = props.enemies
  }

  collisionCheck() {
    let pp = this.player.getPosition()
    
    this.enemies.forEach(enemy => {
      let ep = enemy.getPosition()
      
      if(pp[0] >= ep[0] && pp[0] <= ep[0]+10 && pp[1] >= ep[1] && pp[1] <= ep[1]+10 ||
        pp[0]+10 >= ep[0] && pp[0]+10 <= ep[0]+10 && pp[1] >= ep[1] && pp[1] <= ep[1]+10 ||
        pp[0] >= ep[0] && pp[0] <= ep[0]+10 && pp[1]+10 >= ep[1] && pp[1]+10 <= ep[1]+10 ||
        pp[0]+10 >= ep[0] && pp[0]+10 <= ep[0]+10 && pp[1]+10 >= ep[1] && pp[1]+10 <= ep[1]+10
      ) {
        // Colliding!
        player1.color = "cyan"
      } 
    });
  }

  init() {
  }
}