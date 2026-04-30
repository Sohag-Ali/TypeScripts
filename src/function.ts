function add(num1: number, num2: number) : number {
    return num1 + num2;
}

add(5, 4);

const addArrow = (num1: number, num2: number) : number => {
    return num1 + num2;
}

addArrow(10, 20);

const poorUser = {
    name: 'sohag',
    balance: 5000,
    addBalance(money: number) : number {
        const totalBalance = this.balance + money;
        return totalBalance;
    }
}

poorUser.addBalance(1000);

const arr: number[] = [1, 2, 3, 4, 5];

const doubledArr = arr.map((num: number) => num * 2);