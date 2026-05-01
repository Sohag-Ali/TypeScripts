
type User = {
    id: number,
    name: {
        firstName: string;
        lastName: string
    },
    gender: 'male' | 'female',
    contract: string,
    address:{
        division: string,
        city: string,
        country: string,
    }
}

const user1: User = {
    id: 123,
    name: {
        firstName: 'Sohag',
        lastName: 'Ali'
    },
    gender: 'male',
    contract: '01728918054',
    address: {
        division: 'Dhaka',
        city: 'Dhaka',
        country: 'Bangladesh'
    }
}

const user2: User = {
    id: 456,
    name: {
        firstName: 'Rezwana',
        lastName: 'Sarkar'
    },
    gender: 'female',
    contract: '01728918055',
    address: {
        division: 'Dhaka',
        city: 'Dhaka',
        country: 'Bangladesh'
    }
}

type IsAdmin = true ;
const isAdmin: IsAdmin = true;

type Name = string;
const myName: Name = "Sohag Ali";
   
//function 

type AddFunc = (num1: number, num2: number) => number;
const add: AddFunc = (num1, num2) => num1 + num2;


