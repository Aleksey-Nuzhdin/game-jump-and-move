import { Sprite } from "./sprite";

export class Animation extends Sprite {
  constructor({imageName, frames, speed, repeat = true, autorun =  true, dWidth = 64, dHeight = 64, sWidth = 64, sHeight = 64}){
    super({
      imageName,
      sourceX: frames[0].sx,
      sourceY: frames[0].sy,
      dWidth,
      dHeight,
      sWidth,
      sHeight,
    })
    this.frames = frames
    this.speed = speed
    this.repeat = repeat
    this.running = autorun
    this.lastTime = 0
    this.currnetFrame = 0
    this.totalFrames = this.frames.length
  }

  setFrame(index){
    this.currnetFrame = index
    this.sourceX = this.frames[index].sx
    this.sourceY = this.frames[index].sy
  }

  run(){
    this.setFrame(0)
    this.running = true
  }

  stop(){
    this.running = false
  }
  nextFrame(){
    if( (this.currnetFrame + 1) === this.totalFrames ){
      if( this.repeat ){
        this.run()
      }else{
        this.stop()
      }
      return
    }
    this.setFrame(this.currnetFrame + 1);
  }

  update(time){
    if( !this.running ){
      return
    }
    if( this.lastTime === 0 ){
      this.lastTime = time
      return 
    }
    if( (time - this.lastTime) > this.speed ){
      this.nextFrame()
      this.lastTime += this.speed
    }
  }
}