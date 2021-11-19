import { Sprite } from "./sprite";

export class SpriteSheet {
  constructor({imageName, imageWidth, imageHeight, spriteWidth = 64, spriteHeight = 64}){
    this.imageName = imageName
    this.imageHeight = imageHeight
    this.imageWidth = imageWidth
    this.spriteHeight = spriteHeight
    this.spriteWidth = spriteWidth
  }

  getSprite(indexX = 1, indexY = 1) {
    return new Sprite({
      imageName: this.imageName, 
      sourceX: this.getSourseX(indexX), 
      sourceY: this.getSourseY(indexY), 
      width: this.spriteWidth, 
      height: this.spriteHeight
    })
  }

  getSourseX(index){
    return (--index * this.spriteWidth)
  }

  getSourseY(index){
    return (--index * this.spriteWidth)
  }
}