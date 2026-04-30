let bazarList: string[] = ['rice', 'lentil', 'oil', 'salt', 'sugar'];

bazarList.push('tea');

let mixedArr: (number | string | boolean | { name: string } | number[])[] = [1, 'hello', true, { name: 'sohag' }, [1, 2, 3]];

let couple: [string, number] = ['sohag', 12345];

let nameAndRoll: [string, number][] = [['sohag', 12345], ['ali', 54321]];

//object type 

const user: { firstName: string; lastName?: string; age: number; isStudent: boolean } = {
    firstName: 'sohag',
    // lastName: 'ali',
    age: 25,
    isStudent: true
}

const user2: {
    readonly organization: string;
    firstName: string;
    lastName: string;
    isMarried: boolean;
} = {
    organization: 'LAVEL 2',
    firstName: 'sohag',
    lastName: 'ali',
    isMarried: false,
}

// user2.organization = 'LAVEL 3'; // This will cause a compile error
console.log(user2);