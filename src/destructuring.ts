//object destructuring

const user = {
    id: 1233,
    name: {
        firstName: 'sohag',
        middleName: 'ali',
        lastName: 'ali'
    },
    gender: 'male',
    age: 25,
    profession: 'student'
};
    
//const myProfession = user.profession;
//const myName = user.name.firstName;

const {profession: studentProfession,
    name: {firstName: studentFirstName},
} = user; //object destructuring


console.log(studentProfession);
console.log(studentFirstName);



const friends = ['sohag', 'sabbir', 'somrat'];

const [, bestFriend, ] = friends; //array destructuring

console.log(bestFriend);

