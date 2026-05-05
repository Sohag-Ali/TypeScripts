class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

     getSleep(numHours: number) {
        console.log(`${this.name} is sleeping for ${numHours} hours.`);
    }
}

class Student extends Person {
    roll: number;

    constructor(name: string, age: number, address: string, roll: number) {
        super(name, age, address);
        this.roll = roll;
    }
}

const student1 = new Student("Alice", 20, "123 Main St", 12345);
console.log(student1.name);
console.log(student1.roll);
student1.getSleep(15);

class Teacher extends Person {
    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address);
        this.designation = designation;
    }
    takeClass(numClasses: number) {
        console.log(`${this.name} is taking ${numClasses} classes.`);
    }
}
const teacher1 = new Teacher("Mr. Smith", 40, "456 Elm St", "Math Teacher");
console.log(teacher1.name);
teacher1.getSleep(8);
teacher1.takeClass(5);