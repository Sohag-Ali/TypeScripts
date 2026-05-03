type Student = {
    id: number;
    name: string;
    
}

const addStudentToCourse = <T extends Student> (studentInfo: T) => {
    return {
        course: 'TypeScript',
        ...studentInfo
    }
}

const student1 = {
    id: 1,
    name: 'Sohag',
    hasPen: true,
}
const student2 = {
    id: 2,
    name: 'Sohag',
    hasCar: true,
    isMarried: false,
}

const student3 = {
    id: 3,
    name: 'Sohag',
    hasWatch: true,
}


const result2 = addStudentToCourse(student3);

console.log(result2);