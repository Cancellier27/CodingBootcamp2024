class Collision {
  constructor({objects}) {
    this.objects = objects
  }

  collisionCheck() {
    let pp = player1.getPosition()
    let ep = enemy1.getPosition()

    if(pp[0] >= ep[0] && pp[0] <= ep[0]+10 && pp[1] >= ep[1] && pp[1] <= ep[1]+10 ||
      pp[0]+10 >= ep[0] && pp[0]+10 <= ep[0]+10 && pp[1] >= ep[1] && pp[1] <= ep[1]+10 ||
      pp[0] >= ep[0] && pp[0] <= ep[0]+10 && pp[1]+10 >= ep[1] && pp[1]+10 <= ep[1]+10 ||
      pp[0]+10 >= ep[0] && pp[0]+10 <= ep[0]+10 && pp[1]+10 >= ep[1] && pp[1]+10 <= ep[1]+10
    ) {
      // Colliding!
      player1.color = "cyan"
    } 
 
  }

  init() {
  }
}