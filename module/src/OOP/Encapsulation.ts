{//  Encapsulation ================================================================
// Encapsulation means we can control the properties access who can access and can not access. its means we can encapsulate the properties access by using the access keyword (Private, protected).
class BankAccount {
    // by default all key is public
    readonly id: number; // readonly is never changeable after its define
    name: string;
    protected balance: number; // protected is only accessible within the class and its child class.
    private _transactions: number[] = []; // private is only accessible within the class. private value name is start with "_" its naming convention.

    constructor(
        id: number,
        name: string,
        balance: number,
        transactions: number[]
    ) {
        this.id = id;
        this.name = name;
        this.balance = balance;
        this._transactions = transactions;
    }

    makeTransaction(amount: number) {
        this._transactions.push(amount);
    }
}
class HandleBalance extends BankAccount {
    constructor(
        id: number,
        name: string,
        balance: number,
        _transactions: number[]
    ) {
        super(id, name, balance, _transactions);
    }
    addBalance(amount: number) {
        this.balance += amount;
    }
}

const poorAccount = new BankAccount(155, "jm", 57, [1, 2, 3]);

const addBalance = new HandleBalance(45, "jm", 57, [1, 2, 3]);

addBalance.addBalance(45);
}