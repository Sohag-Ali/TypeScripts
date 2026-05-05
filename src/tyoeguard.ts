const add = (a: number | string, b: number | string): number => {
    if (typeof a === "number" && typeof b === "number") {
       return a + b;
    }
    else{
        return parseFloat(a.toString()) + parseFloat(b.toString());
    }
}

console.log(add(5, 10)); // Output: 15
console.log(add("5", 10)); // Output: 15f