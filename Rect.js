export default class Rect { 
  constructor( x,y, width, height ) {
    Object.assign(this, {x,y,width,height})
  }
  draw(ctx) {
    const {x,y,width, height} = this;
    ctx.strokeRect(x,y,width, height);
  }
  easeTo(rect, dump = 0.1) {
    ["x","y","width","height"].forEach( key => {
      this[key] += (rect[key] - this[key]) * dump
    } )
  }
  standardize() {
    if(this.width < 0) {
      this.x += this.width;
      this.width *= -1;
    }
    if(this.height < 0) {
      this.y += this.height;
      this.height *= -1;
    }

  }
}
