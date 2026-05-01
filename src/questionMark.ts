// ? : ternary operator : decision making operator
// ?? : nullish coalescing operator : default value operator

// ?. : optional chaining operator : safe navigation operator

//const userAge = 21;

const biyerJonnoEligible = (age: number) => {

    // if (age >= 21) {
    //     console.log("you are eligible");
    // }
    // else {
    //     console.log("you are not eligible");
    // }
    //ternary operator
    const result = age >=21 ? "you are eligible" : "you are not eligible";
    console.log(result);
};

biyerJonnoEligible(15);

//const userTheme = undefined;
//const userTheme = null;
const userTheme = "dark";

const selectedTheme = userTheme ?? "light"; // default value

console.log(selectedTheme); // light

const isauthenticated = null;

const resultWithTernary = isauthenticated ? "User is authenticated" : "User is not authenticated";
console.log(resultWithTernary); 

const resultWithNullish = isauthenticated ?? "User is not authenticated";
console.log(resultWithNullish);


//optional chaining

const user: {
    address: {
        city: string,
        country: string,
        postalCode?: string;

    }
} = {
    address: {
        city: "Dhaka",
        country: "Bangladesh",
       // postalCode: "1200"
    }
};

const postalCode = user?.address?.postalCode;
console.log(postalCode); // 1200
