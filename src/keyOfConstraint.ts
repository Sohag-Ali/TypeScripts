type RichPeoplesVehicle = {
    car: string;
    bike: string;
    cng: string;
}

type MyVehicle1 = "car" | "bike" | "cng";
type MyVehicle2 = keyof RichPeoplesVehicle;

const myVehicle1: MyVehicle2 = "car";

type User = {
    id: number;
    name: string;
    address: {
        city: string;
        country: string;
    }
}
const user: User = {
    id: 222,
    name: 'Sohag',
    address: {
        city: 'Dhaka',
        country: 'Bangladesh',
    }
}

const myId = user.id;
const myName = user['name'];
const myCity = user.address.city;
const myCountry = user['address']['country'];

//console.log(myId, myName, myCity, myCountry);

const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
    return obj[key];
}

const result = getPropertyFromObj(user, 'name');

console.log(result);

const product = {
    brand: 'Apple',
    model: 'iPhone 14 Pro Max',
    price: 120000,
    color: 'Silver',
}

const result2 = getPropertyFromObj(product, 'brand');

console.log(result2);