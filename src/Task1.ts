type CartItem = {
    name: string;
    price: number;
    quantity?: number;
}

const calculateTotal = (item: CartItem) => {
    const { price, quantity = 1 } = item;
    return price * quantity;
};

const item1: CartItem = {
    name: 'Book',
    price: 15,
    quantity: 2
};

const item2: CartItem = {
    name: 'Pen',
    price: 5
};

console.log(calculateTotal(item1)); 
console.log(calculateTotal(item2)); 