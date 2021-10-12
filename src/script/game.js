import {Screen} from './screen'
import {Loading} from './scenes/loading'
import {Scene} from './scene'
import {Menu} from './scenes/menu'

export class Game{
  constructor({height = 720, width = 720} = {}){
    this.screen = new Screen(width, height)
    this.scenes = {
      loading: new Loading(this),
      menu: new Menu(this)
    }
    this.screen.loadImages({
			orc: 'img/orc.png',
			player: 'img/player.png',
			title: 'img/title.jpg',
			tiles: 'img/tiles.png'
    })
    this.currentScene = this.scenes.loading
    this.currentScene.init()
  }

  changeScene(status) {
    switch (status) {
        case Scene.LOADED:
            return this.scenes.menu;
        
        default:
            return this.scenes.menu;
    }
  }

  frame(time){
    console.log('game frame');
    if(this.currentScene.status != Scene.WORKIN ){
      this.currentScene = this.changeScene(this.currentScene.status)
      this.currentScene.init()
    }
    this.currentScene.render(time)
    requestAnimationFrame(time => {this.frame(time)})
  }
  run(){
    requestAnimationFrame(time => {this.frame(time)})
    
  }
}