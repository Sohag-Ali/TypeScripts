class Bankaccount {
    public readonly userID: number;
    public userName: string;
    protected userBalance: number;
    constructor(userID: number, userName: string, userBalance: number) {
        this.userID = userID;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    addBalance(amount: number) {
    this.userBalance += amount;
}
}

class StudentAccount extends Bankaccount {
   
    test() {
        console.log(this.userID); // Accessible because it's public
        console.log(this.userName); 
        console.log(this.userBalance); // Accessible because it's protected
    }
}

const sohagAccount = new Bankaccount(1, "sohag", 5000);
const studentAccount = new StudentAccount(2, "student", 3000);

console.log(sohagAccount.userID);
sohagAccount.addBalance(1000);
console.log(sohagAccount); 
