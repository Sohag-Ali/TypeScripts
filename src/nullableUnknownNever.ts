const getUser= (input: string | null) => {
    if(input){
        console.log(`From DB: ${input}`);
    }
    else{
        console.log("From DB: ALL uSER");
    }
};

getUser(null);

// unknown type

const discountCalculator = (input:unknown) => {
    if(typeof input === "number"){
        const discountPrice = input * 0.1;
        console.log(`Discounted price: ${discountPrice}`);
    }    else if(typeof input === "string"){
        const [discountedPrice] = input.split(" ");
        const price = Number(discountedPrice)* 0.1;
        console.log(`Discounted price: ${price}`);

    }  else if(input === null){
        console.log("No price provided");
    }  else{
        console.log("Invalid input");
    }
}

discountCalculator(100);
discountCalculator("100 TK");
discountCalculator(null);
