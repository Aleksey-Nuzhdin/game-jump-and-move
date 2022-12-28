interface Constructor{
  width: string,
  height: string,
}

class Game {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private width: string
  private height: string

  constructor({width, height}:Constructor){
    this.width = width || '700'
    this.height = height || '700'
  }

  frame(time:number){
    requestAnimationFrame(time => this.frame(time))
  }

  init(){
    let canvas = document.getElementById('game') as HTMLCanvasElement
    canvas.setAttribute('width', this.width)
    canvas.setAttribute('height', this.height)
    canvas.setAttribute('style', 'border: 1px solid black')
    
    
    this.canvas = canvas
    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  }
}

export default Game
