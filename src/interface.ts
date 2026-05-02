type User = {
    name: string;
    age: number;
};

interface IUser {
    name: string;
    age: number;
};

type Role = {
    role: 'admin' | 'user' | 'guest';
};

type UserWithRole = User & Role;

interface IUserWithRole extends IUser {
    role: 'admin' | 'user' | 'guest';
}

const User1: IUserWithRole = {
    name: "Sohag",
    age: 25,
    role: "admin"
};

const User2: IUser = {
    name: "Ali",
    age: 23
};

type isAdmin = boolean;
const isAdmin: isAdmin = true;


//Function interface
type Add = (a: number, b: number) => number;
const add: IAdd = (a, b) => a + b;

interface IAdd {
    (a: number, b: number): number;
}