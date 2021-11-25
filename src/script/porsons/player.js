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
    this.addAnimation( 'stay', this.getDirectionAnimate([1,2,3,4,5,6], 100) )
    this.addAnimation( 'fight_hend', this.getDirectionAnimate([96,97,98,99,100], 100, false, false) )
    this.addAnimation( 'fight_foot', this.getDirectionAnimate([106,107,108,109, 110, 111], 2) )
    this.addAnimation( 'run', this.getDirectionAnimate([14,13,12,11,40,39,38,37], 100) )
    this.setAnimation('stay')

    this.isAnimated = false
    this.timerAnimation

    this.direction = 0
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
      this.setAnimation('run')
      this.body.run()
      this.endAnimation(5,99)
      return
    }
    if(this.game.control.left){
      this.isAnimated = true
      this.setAnimation('run')
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
      this.direction = 10
    }
    if(this.game.control.right){
      this.direction = 0
    }
  }

  getDirectionAnimate(arrSprite, speed, replay, autorun){
    console.log(arrSprite);
    let arr = arrSprite.map( el => {
      return el + (this.direction ? this.direction : 0)
    } )
    console.log(arr);
    return this.tiles.getAnimation(arr, speed, replay, autorun)
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