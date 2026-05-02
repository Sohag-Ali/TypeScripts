
type GenericArray<T> = Array<T>;


const friends : Array<string> = ['Alice', 'Bob', 'Charlie'];

const rollNumbers : Array<number> = [1, 2, 3, 4, 5]; 

const isEligible : Array<boolean> = [true, false, true];

type Coordinate <X, Y> = [X, Y];

const coordinate1: Coordinate<number, number> = [10, 20];
const coordinate2: Coordinate<string, string> = ['10', '20'];

const userList: GenericArray<{ name: string; age: number }> = [
    {
        name: 'Sohag',
        age: 25,
        
    },
    {
        name: 'Ali',
        age: 23,
    },
];