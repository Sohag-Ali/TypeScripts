type userRole = 'admin' | 'user' | 'guest';

const getDashboard = (role: userRole) => {
    if (role === 'admin') {
        return 'Admin Dashboard';
    }
    else if (role === 'user') {
        return 'User Dashboard';
    }
    else {
    return 'Guest Dashboard';
    }
};

getDashboard('admin'); // Admin Dashboard
getDashboard('user'); // User Dashboard
getDashboard('guest'); // Guest Dashboard   

//Intersection Type

type Employee = {
    id: number;
    name: string;
    department: string;
};

type Manager = {
    designation: string;
    teamSize: number;
};

type EmployeeManager = Employee & Manager;

const sohagAli: EmployeeManager = {
    id: 123,
    name: 'Sohag Ali',
    department: 'Engineering',
    designation: 'Senior Manager',
    teamSize: 10
};