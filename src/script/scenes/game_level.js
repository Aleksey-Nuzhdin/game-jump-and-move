import { Scene } from "../scene";
import { SpriteSheet } from "../sprite-sheet";

export class GameLevel extends Scene {
  constructor(game){
    super(game)
    this.tiles = new SpriteSheet({
      imageName: 'tiles',
      imageWidth: 640,
      imageHeight: 640
    })
    this.tree = this.tiles.getSprite(11)
    this.tree.setXY(10, 10)

    this.playerTiles = new SpriteSheet({
      imageName:'player',
      imageWidth: 832,
      imageHeight: 1344,
    })

    this.player = this.playerTiles.getAnimation([1,2,3,4,5,6,7], 100)
    this.player.setXY(50,50)

    this.jojoTail = new SpriteSheet({
      imageName:'jojo',
      imageHeight: 1627,
      imageWidth: 750,
      spriteWidth: 75,
      spriteHeight: 75,
      spriteDWidth: 100,
      spriteDHeight: 100
    })

    this.isKyeDownFire = false

    this.jojoFightTiels = new SpriteSheet({
      imageName:'oraPunch',
      imageHeight: 300,
      imageWidth: 1630,
      spriteWidth: 163,
      spriteHeight: 100,
      spriteDWidth: 100,
      spriteDHeight: 100
    })


    this.showJojo = {}
    this.jojoPosition = {x:250, y:250}

    this.isJojoFight = false
    this.fightTime = 0
    this.setJojoAnimation('stay')
  }
  init(){
    
    super.init()
    console.log(this);
  }

  setJojoAnimation(type){
    if( type === 'fight' ){
      this.showJojo = this.jojoFightTiels.getAnimation([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 1)
      this.showJojo.setXY( this.jojoPosition.x+32 ,this.jojoPosition.y-10 )
      this.showJojo.statusAnimation = 'fight'
      return
    }
    if( type = 'stay' ){
      this.showJojo = this.jojoTail.getAnimation([1,2,3,4,5,6], 100)
      this.showJojo.setXY(this.jojoPosition.x,this.jojoPosition.y)
      this.showJojo.statusAnimation = 'stay'
      return
    }
  }

  update(time){
    this.player.update(time)
    if( this.showJojo.statusAnimation !== 'fight' ){
      this.showJojo.update(time)
    }

    if(time - this.fightTime > 200 && this.showJojo.statusAnimation === 'fight'){
      this.setJojoAnimation('stay')
    }
    if(this.game.control.fire){
      if( !this.isKyeDownFire ){
        if( this.showJojo.statusAnimation !== 'fight'){
          this.setJojoAnimation('fight')
        }

        this.fightTime = time
        this.showJojo.update(time)
      }
      this.isKyeDownFire = true
    }
    if(!this.game.control.fire){
      this.isKyeDownFire = false
    }

    if(this.game.control.left){
      this.jojoPosition.x-=2
      this.showJojo.setXY(this.jojoPosition.x,this.jojoPosition.y)
    }
    if(this.game.control.right){
      this.jojoPosition.x+=2
      this.showJojo.setXY(this.jojoPosition.x,this.jojoPosition.y)
    }
    if(this.game.control.up){
      this.jojoPosition.y-=2
      this.showJojo.setXY(this.jojoPosition.x,this.jojoPosition.y)
    }
    if(this.game.control.dowm){
      this.jojoPosition.y+=2
      this.showJojo.setXY(this.jojoPosition.x,this.jojoPosition.y)
    }
  }

  render(time){
    this.update(time)
    this.game.screen.fill('#000000')
    this.game.screen.drawSprite(this.tree)
    this.game.screen.drawSprite(this.player)
    this.game.screen.drawSprite(this.showJojo)
    super.render(time)



  }
}