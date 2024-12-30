import Point from "./Point";

class Side {
    constructor() {
      this.type = ""; // "d" pour straight line or "z" pour classic
      this.points = []; // real points or Bezier curve points
    } // Side
  
    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  
    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    reversed() {
      // returns a new Side, copy of current one but reversed
      const ns = new Side();
      ns.type = this.type;
      ns.points = this.points.slice().reverse();
      return ns;
    } // Side.reversed
  
    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  
    scale(puzzle) {
    
      const coefx = puzzle.scalex;
      const coefy = puzzle.scaley;
      this.scaledPoints = this.points.map(p => new Point(p.x * coefx, p.y * coefy));
  
    } //
  
    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  
  
    drawPath(ctx, shiftx, shifty, withoutMoveTo) {
  
      if (!withoutMoveTo) {
        ctx.moveTo(this.scaledPoints[0].x + shiftx, this.scaledPoints[0].y + shifty);
      }
      if (this.type == "d") {
        ctx.lineTo(this.scaledPoints[1].x + shiftx, this.scaledPoints[1].y + shifty);
      } else { // edge zigzag
        for (let k = 1; k < this.scaledPoints.length - 1; k += 3) {
          ctx.bezierCurveTo(this.scaledPoints[k].x + shiftx, this.scaledPoints[k].y + shifty,
            this.scaledPoints[k + 1].x + shiftx, this.scaledPoints[k + 1].y + shifty,
            this.scaledPoints[k + 2].x + shiftx, this.scaledPoints[k + 2].y + shifty);
        } // for k
      } // if jigsaw side
  
    } // Side.drawPath
  } // class Side
  
  export default Side;