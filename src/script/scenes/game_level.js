import { Scene } from "../scene";
import { SpriteSheet } from "../sprite-sheet";
import { Jojo } from "../porsons/player";

export class GameLevel extends Scene {
  constructor(game){
    super(game)
    this.tiles = new SpriteSheet({
      imageName: 'tiles',
      imageWidth: 640,
      imageHeight: 640
    })
    this.tree = this.tiles.getSprite(7)
    this.tree.setXY(10, 10)

    this.player = new Jojo( this.game )
  }
  init(){
    super.init()
    console.log(this);
  }

  update(time){
    this.player.update(time)
  }

  render(time){
    this.update(time)
    this.game.screen.fill('#000000')
    this.game.screen.drawSprite(this.tree)
    this.game.screen.drawSprite(this.player.body)
  
    super.render(time)



  }
}