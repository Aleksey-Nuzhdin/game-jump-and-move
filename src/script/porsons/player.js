import { SpriteSheet } from "../sprite-sheet";
import { PersonBody } from "./body";

export class Jojo extends PersonBody {
  constructor(game){
    super({
      imageName:'jojo',
      imageHeight: 1627,
      imageWidth: 1500,
      sourseWidth: 75,
      sourseHeight: 78,
      spriteDWidth: 75,
      spriteDHeight: 75,
      speedX: 4,
      speedY: 10,
    })

    this.game = game
    this.addAnimation( 'stay', this.tiles.getAnimation([1,2,3,4,5,6], 100) )
    this.addAnimation( 'fight_hend', this.tiles.getAnimation([96,97,98,99,100], 100, false, false) )
    this.addAnimation( 'fight_foot', this.tiles.getAnimation([106,107,108,109, 110, 111], 2) )
    this.addAnimation( 'run_left', this.tiles.getAnimation([14,13,12,11,40,39,38,37], 100) )
    this.addAnimation( 'run_right', this.tiles.getAnimation([7,8,9,10,21,22,23,24], 100) )
    this.setAnimation('stay')

    this.isAnimated = false
    this.timerAnimation
  }

  selectionAnimation(){
    if(this.isAnimated){ return }
    
    if(this.game.control.fire){
      this.isAnimated = true
      this.setAnimation('fight_hend')
      this.body.run()
      this.endAnimation(5,99)
      return
    }
    if(this.game.control.right){
      this.isAnimated = true
      this.setAnimation('run_right')
      this.body.run()
      this.endAnimation(5,99)
      return
    }
    if(this.game.control.left){
      this.isAnimated = true
      this.setAnimation('run_left')
      this.body.run()
      this.endAnimation(5,99)
      return
    }
    if(this.game.control.up){
      
      return
    }
    this.setAnimation('stay')
  }

  setDirection(){
    if(this.game.control.left){
    }
  }

  endAnimation(length, speed){
    clearTimeout(this.timerAnimation)
    this.timerAnimation = setTimeout(()=>{
      this.isAnimated = false
    }, speed*length)
  }

  update(time){
    this.run(time)
    this.selectionAnimation()
    this.setDirection()
  }
}