const friend = ["sohag", "ali", "sabbir", 'somrat'];

const schoolFriends = [ 'rakib', 'sharif'];

const collageFriends = ['sajid', 'delowar'];

friend.push(...schoolFriends);
friend.push(...collageFriends);

console.log(friend);

const user = {
    name: 'sohag',
    age: 25,
    profession: 'student'
};
const otherInfo = {
    hobby: 'coding',
    favouriteLanguage: 'typescript'
};

const completeInfo = { ...user, ...otherInfo };
console.log(completeInfo);


//rest parameter

const sendInvite = (...friends: string[]) => {
    friends.forEach((friend: string) => {
        console.log(`Dear ${friend}, you are invited to the party!`);
    });
}

sendInvite('sohag', 'ali', 'sabbir', 'somrat', 'rakib', 'sharif', 'sajid', 'delowar');