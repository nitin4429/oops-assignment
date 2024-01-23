class Circle{
    constructor(radius,length,base){
        this.radius = radius;
        this.length=length;
        this.base = base;
    }
    calculateArea(){
        return Math.PI*this.radius*this.radius;
    }
    calculatePerimeter(){
        return 2*Math.PI*this.radius;
    }
}
class rectangle extends Circle{
    constructor(length,breadth){
        super();
       this.length=length;
       this.breadth=breadth;
    }
    calculateArea(){
        return this.length * this.breadth;
    }
    calculatePerimeter(){
        return 2*(this.length+this.breadth);
    }
}
class triangle extends Circle{
    constructor(base,height,perpendicular){
        super();
       this.base=base;
        this.height = height;
        this.perpendicular = perpendicular;
    }
    calculateArea(){
        return (1/2 * this.base*this.height)
    }
    calculatePerimeter(){
        return this.base+this.height+this.perpendicular;
    }
}
let circle = new Circle(5);
console.log(`Area of circle ${circle.calculateArea()} and Perameter of circle ${circle.calculatePerimeter()}`);
let rectangles = new rectangle(5,6);
console.log(`Area of rectangle ${rectangles.calculateArea()} and Perameter of rectangle ${rectangles.calculatePerimeter()}`);
let triangles = new triangle(2,3,4);
console.log(`Area of triangle ${triangles.calculateArea()} and Perameter of triangle ${triangles.calculatePerimeter()}`);