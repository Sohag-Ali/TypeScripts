class Bankaccount {
    public readonly userID: number;
    public userName: string;
    protected _userBalance: number;
    constructor(userID: number, userName: string, userBalance: number) {
        this.userID = userID;
        this.userName = userName;
        this._userBalance = userBalance;
    }

//    

set addBalance(amount: number) {
    this._userBalance += amount;
}

// getBalance() {
//  return this._userBalance;
// }

get getBalance() {
    return this._userBalance;
}

}



const sohagAccount = new Bankaccount(1, "sohag", 5000);
sohagAccount.addBalance = 100;
console.log(sohagAccount.getBalance);

