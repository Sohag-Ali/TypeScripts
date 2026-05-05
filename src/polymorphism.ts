class Person {
    getSleep(){
        console.log("Person is sleeping");
    }
}

class Student extends Person {
    getSleep() {
        console.log("Student is studying");
    }
}

class NextLevelStudent extends Student {
    getSleep() {
        console.log("Next level student is doing research");
    }
}

const getSleepingInfo = (person: Person) => {
    person.getSleep();
}

const person1 = new Person();
const student1 = new Student();
const nextLevelStudent1 = new NextLevelStudent();

getSleepingInfo(person1);
getSleepingInfo(student1);
getSleepingInfo(nextLevelStudent1);

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
    getArea(): number {
        return Math.PI * this.radius ** 2;
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
        return this.height * this.width;
    }
}

const getArea = (shape: Shape) => {
    console.log(`Area: ${shape.getArea()}`);
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 20);

getArea(circle);
getArea(rectangle);
