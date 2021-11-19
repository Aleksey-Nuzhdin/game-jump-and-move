export class Sprite{
  constructor({imageName, sourceX, sourceY, dWidth = 64, dHeight = 64, sWidth = 64, sHeight = 64}){
    this.imageName = imageName
    this.sourceY = sourceY
    this.sourceX = sourceX
    this.dWidth = dWidth
    this.dHeight = dHeight
    this.sWidth = sWidth
    this.sHeight = sHeight
    this.x = 0
    this.y = 0
  }

  setXY(x, y){
    this.x = x
    this.y = y
  }
}