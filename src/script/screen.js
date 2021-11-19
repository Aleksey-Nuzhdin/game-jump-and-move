import {ImageLoader} from './image-loader'

export class Screen{
  constructor(width, height){
    this.width = width;
    this.height = height;
    this.canvas = this.createCanvas(width, height);
    this.context = this.canvas.getContext('2d')
    this.images = {};
    this.isImagesLoaded = false;
  };

  createCanvas(width, height){
    let canvas = document.querySelector('canvas')
    canvas.width = width
    canvas.height = height
    return canvas
  };

  fill(color){
    this.context.fillStyle = color
    this.context.fillRect(0, 0, this.width, this.height)
  };

  loadImages(imagePaths){
    let loader = new ImageLoader(imagePaths)
    loader.load().then( names => {
      this.images = Object.assign(this.images, loader.images);
      this.isImagesLoaded = true;
    })
  };

  print(x, y, text) {
    this.context.fillStyle = "#FFFFFF";
    this.context.font = "22px Georgia";
    this.context.fillText(text, x, y);
  };

  drawImage(x, y, imageName){
    this.context.drawImage(this.images[imageName], x, y);
  }

  drawSprite(sprite){
    this.context.drawImage(
      this.images[sprite.imageName],
      sprite.sourceX,
      sprite.sourceY,
      sprite.width,
      sprite.height,
      sprite.x,
      sprite.y,
      sprite.width,
      sprite.height
    )
  }
}