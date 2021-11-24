import { SpriteSheet } from "../sprite-sheet";

export class PersonBody {
  constructor({imageName, imageWidth, imageHeight, sourseWidth, sourseHeight, spriteDWidth, spriteDHeight, speedX, speedY}){
    this.tiles = new SpriteSheet({
      imageName,
      imageWidth, 
      imageHeight,
      spriteWidth: sourseWidth,
      spriteHeight: sourseHeight,
      spriteDWidth,
      spriteDHeight,
    })
    this.animations = {}
    this.currentAnimations = {}
    this.position = {x:0 , y:0}
    this.speedX = speedX
    this.speedY = speedY
    this.body = this.tiles.getAnimation([1], 1)
  }

  getAnimation(){
    return this.currentAnimations
  }

  setAnimation(animationName){
    this.body = this.animations[animationName]
  }

  addAnimation( animationName, animation){
    this.animations[animationName] = animation
  }

  move(direction){
    if(direction = 'top'){ this.position.y -= speed }
    if(direction = 'down'){ this.position.y += speed }
    if(direction = 'right'){ this.position.x += speed }
    if(direction = 'left'){ this.position.x -= speed }
  }

  run(time){
    this.body.update(time)
    this.body.setXY( this.position.x, this.position.y )
  }
}