{
    // polymorphism
    // polymorphism means same properties change base on placement

    // role of polymorphism we can not change the parent class method shape. I means if we not take any parameters in parent class, we can not take any parameters in child class.
    class Shape {
        getArea(): number {
            return 0;
        }
    }
    class Circle extends Shape {
        radius: number;
        constructor(radius: number) {
            super();
            this.radius = radius;
        }
        getArea(): number { // role of polymorphism we can not change the parent class method shape. I means if we not take any parameters in parent class, we can not take any parameters in child class.
            return Math.PI * this.radius * this.radius;
        }
    }

    class Rectangle extends Shape {
        width: number;
        height: number;
        constructor(width: number, height: number) {
            super();
            this.width = width;
            this.height = height;
        }
        getArea(): number {
            return this.width * this.height;
        }
    }

    const getShape = (shape: Shape) => {
        console.log(shape.getArea());
    };

    const shape_1 = new Shape();
    const shape_2 = new Circle(45);
    const shape_3 = new Rectangle(10, 20);

    // polymorphism means same properties change base on placement

    console.log(shape_1.getArea(), shape_2.getArea(), shape_3.getArea());
    // more clean
    getShape(shape_1);
    getShape(shape_2);
    getShape(shape_3);
}
