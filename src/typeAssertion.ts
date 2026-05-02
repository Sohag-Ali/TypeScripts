let anything: any;

anything = "sohag";


const kgToGram = (input: number | string): number | string | undefined => {
 if ( typeof input === "number") {
    return input * 1000;
 }
 else if (typeof input === "string") {
    const [value] = input.split(" ");
    return `Converted output is : ${Number(value) * 1000} grams`;
 }
};

const result1 = kgToGram(5) as number;
result1.toFixed(2);
console.log(result1);
const result2 = kgToGram("10 Kg") as string;

console.log(result2);

type CustomError = {
    message: string;
}
try{

}catch(error) {
    console.log((error as CustomError).message);
}