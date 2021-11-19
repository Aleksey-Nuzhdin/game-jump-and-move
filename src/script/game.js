import { Screen } from './screen'
import { Loading } from './scenes/loading'
import { Menu } from './scenes/menu'
import { GameLevel } from './scenes/game_level'
import { Scene } from './scene'
import { ControlState } from './control-state'

export class Game{
  constructor({width = 720, height = 720} = {}){
    this.screen = new Screen(width, height)
    this.screen.loadImages({
			player: 'img/player.png',
      menuBG: 'img/menuBG.jpg',
			//title: 'img/title.jpg',
      oraPunch: 'img/ora_punch.png',
      jojo: 'img/jojo.png',
			tiles: 'img/tiles.png'            
        });
    this.scenes = {
      loading: new Loading(this),
      menu: new Menu(this),
      game: new GameLevel(this),
    }
    this.control = new ControlState()
    this.currentScene = this.scenes.loading
    this.currentScene.init()

    
  }
  changeScene(status) {
    switch (status) {
      case Scene.LOADED:
        return this.scenes.menu;
      case Scene.START_GAME:
        return this.scenes.game;
      
      default:
        return this.scenes.menu;
    }
  } 
  frame(time){
    if(this.currentScene.status != Scene.WORKING) {
      this.currentScene = this.changeScene(this.currentScene.status);
      this.currentScene.init()
    }
    this.currentScene.render(time)
    requestAnimationFrame(time => {this.frame(time)})
  }
  run(){
    requestAnimationFrame(time => {this.frame(time)})
    
  }
}