//  Access modifiers================================================================

class BankAccount {
    // by default all key is public
    readonly id: number; // readonly is never changeable after its define
    name: string;
    protected balance: number; // protected is only accessible within the class and its child class.
    private transactions: number[] = []; // private is only accessible within the class

    constructor(
        id: number,
        name: string,
        balance: number,
        transactions: number[]
    ) {
        this.id = id;
        this.name = name;
        this.balance = balance;
        this.transactions = transactions;
    }

    makeTransaction(amount: number) {
        this.transactions.push(amount);
    }
}
class HandleBalance extends BankAccount {
    constructor(
        id: number,
        name: string,
        balance: number,
        transactions: number[]
    ) {
        super(id, name, balance, transactions);
    }
    addBalance(amount: number) {
        this.balance += amount;
    }
}

const poorAccount = new BankAccount(155, "jm", 57, [1, 2, 3]);

const addBalance = new HandleBalance(45, "jm",57, [1, 2, 3]);

addBalance.addBalance(45);