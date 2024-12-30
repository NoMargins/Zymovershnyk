// Point - - - - - - - - - - - - - - - - - - - -
class Point {
    constructor(x, y) {
      this.x = Number(x);
      this.y = Number(y);
    } // constructor
    copy() {
      return new Point(this.x, this.y);
    }
  
    distance(otherPoint) {
      return mhypot(this.x - otherPoint.x, this.y - otherPoint.y);
    }
  } // class Point

  export default Point;