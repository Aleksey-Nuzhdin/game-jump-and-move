import { Sprite } from "./sprite";
import { Animation } from "./anomation";

export class SpriteSheet {
  constructor({imageName, imageWidth, imageHeight, spriteWidth = 64, spriteHeight = 64, spriteDWidth = 64, spriteDHeight = 64}){
    this.imageName = imageName
    this.imageHeight = imageHeight
    this.imageWidth = imageWidth
    this.spriteHeight = spriteHeight
    this.spriteWidth = spriteWidth
    this.spriteDHeight = spriteDHeight
    this.spriteDWidth = spriteDWidth
  }

  getAnimation(indexses, speed, repeat = true, autorun = true){
    return new Animation({
      imageName: this.imageName,
      frames: indexses.map( index => ({sx:this.getSourseX(index), sy: this.getSourseY(index)}) ),
      speed,
      repeat,
      autorun,
      sWidth: this.spriteWidth,
      sHeight: this.spriteHeight,
      dWidth: this.spriteDWidth,
      dHeight: this.spriteDHeight,
    })
  }

  getSprite(index = 1) {
    return new Sprite({
      imageName: this.imageName, 
      sourceX: this.getSourseX(index), 
      sourceY: this.getSourseY(index), 
      sWidth: this.spriteWidth,
      sHeight: this.spriteHeight,
      dWidth: this.spriteDWidth,
      dHeight: this.spriteDHeight,
    })
  }

  getSourseX(index){
    return (--index * this.spriteWidth) % this.imageWidth
  }

  getSourseY(index){
    return Math.floor( (--index * this.spriteWidth) / this.imageWidth ) * this.spriteHeight
  }
}