const arrayOfNum : number[] = [1, 2, 3, 4, 5];

const arrayOfStr : string[] = ['a', 'b', 'c', 'd', 'e'];

const arrayOfStrUsingMap: string[] = arrayOfNum.map(num => num.toString());
console.log(arrayOfStrUsingMap);

type AreaOfNum = {
    height: number;
    width: number;
}

type height = AreaOfNum['height']; // height is of type number

type AreaOfStr = {
    [key in "height" | "width"]: string;
}

type Area<T> = {
    [key in keyof T]: T[key];
}


