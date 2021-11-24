export class ControlState {
  constructor() {
    this.up = false
    this.dowm = false
    this.left = false
    this.right = false
    this.space = false
    this.fire = false
    this.keyMap = new Map([
      [37,'left'],[39,'right'],[38,'up'],[40,'dowm'],[32,'space']
    ])
    document.addEventListener('keydown', event => { this.update(event, true) })
    document.addEventListener('keyup', event => { this.update(event, false) })
    document.addEventListener('mousedown', _=>{ this.fire = true})
    document.addEventListener('mouseup', _=>{ this.fire = false})
  }
  update(event, pressed){
    if(this.keyMap.has(event.keyCode)){
      event.preventDefault()
      event.stopPropagation()
      this[ this.keyMap.get(event.keyCode) ] = pressed
    }
  }
}