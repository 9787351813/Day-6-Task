 class circle{
    constructor(radius = 1.0, color="red"){
        this.radius=radius;
        this.color=color;
    }
      
     getRadius(shape){
        return this.radius;
    }
    setRadius(radius){
        return this.radius = radius;
     }
    getColor(){
        return this.color;
    }
    setColor(color){
        return this.name;
    }
    toString() { return `Circle[radius=${this.radius},color=${this.color}]`;
}
    getArea(){
        return  Math.PI*this.radius*this.radius;
    }
    getCircumference(){
        return 2*Math.PI*this.radius;
    }

 }
const shape =new circle(1.0,"red");
    console.log("Radius:",shape.getRadius());   
 radius=2;
 console.log("Radius:",radius);
 console.log("color:",shape.getColor());
 color="blue";
 console.log("color:",color);
const myCircle = new circle(5.0,"blue");
console.log("Area of the circle:",myCircle.getArea());
const circumference = myCircle.getCircumference();
console.log("Circumference of the circle:", circumference);


const circleDescription = myCircle.toString();
console.log("Description of the circle:", circleDescription);