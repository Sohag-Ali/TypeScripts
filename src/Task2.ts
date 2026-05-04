type Person = {
    name: string;
    age: number;
};

type JobDetails = {
    role: string;
    salary: number;
};

type Employee = Person & JobDetails;

const getProfile = (employee: Employee) => {
    const { name, role } = employee;
    return `Name: ${name}, Role: ${role},`;
};

const employee1: Employee = {
    name: 'sohag',
    age: 30,
    role: 'Software Engineer',
    salary: 90000
};

console.log(getProfile(employee1)); 