class Person {
    name: string
    constructor(name: string) {
        this.name = name
    }
    getSleepHours(numberOfHours: number) {
        console.log(`${this.name} is sleeping for ${numberOfHours} hours.`);
    }
}

class Student extends Person {
   
    constructor(name: string) {
        super(name)
    }

    doStudy(numberOfHours: number) {
        console.log(`${this.name} is studying for ${numberOfHours} hours.`);
    }
}

class Teacher extends Person {
    constructor(name: string) {
        super(name)
    }

    takeClass(numberOfHours: number) {
        console.log(`${this.name} is taking class for ${numberOfHours} hours.`);
    }
}

const isStudent = (user: Person) => {
    return user instanceof Student;
};

const isTeacher = (user: Person) => {
    return user instanceof Teacher;
}

const getUserInfo = (user: Person) => {
    if(isStudent(user)) {
        user.doStudy(5);
    }
    else if(isTeacher(user)) {
        user.takeClass(3);
    }
    else {
        user.getSleepHours(8);
    }
};

const student1 = new Student("sohag");
const teacher1 = new Teacher("jankar");
getUserInfo(student1); // Output: sohag is studying for 5 hours.
getUserInfo(teacher1); // Output: Bob is taking class for 3 hours.      