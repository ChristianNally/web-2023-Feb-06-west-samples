class Rectangle {
  constructor(length, width){
    this.length = length;
    this.width = width;
  }

  area(){
    return this.length * this.width;
  }
};

const r1 = new Rectangle(3,4);
console.log('r1', r1);

console.log('r1.length', r1.length);


const r2 = new Rectangle(5,6);
console.log('r2', r2);

console.log('r2.area()', r2.area());

const Box = class extends Rectangle {
  constructor(length, width, height){
    super(length, width);
    this.height = height;
  }

  volume(){
    return this.area() * this.height;
  }

}

const b1 = new Box(3,4,5);
console.log('b1', b1);
console.log('b1.volume', b1.volume());


// Here's an example when you would need to write a custom Getter method

// class Point {
//   constructor(x, y){
//     this.r = sqrt(x^2 + y^2);
//     this.angle = arctan(y/x); //
//   }

//   x(){
//     return r*cos(angle);
//   }

// }


// const p1 = new Point(3,4);
// console.log('p1.x', p1.x);
