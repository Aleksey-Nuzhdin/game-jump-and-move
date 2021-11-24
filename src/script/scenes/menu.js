import { Scene } from "../scene";

export class Menu extends Scene{
  constructor(game){
    super(game)
  };

  init(){
    super.init()
  }

  update(time){
    if(this.game.control.space){
      this.finish(Scene.START_GAME)
    }
  }

  render(time){
    this.update(time)
    this.game.screen.drawImage(0 ,0 , 'menuBG')
    this.game.screen.print(200, 350, "Нажми пробел чтобы начать");
    super.render(time)

  }
}