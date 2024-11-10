{
    // Getter and setter ===========================
    //Getter and Setter method advantage is we can use the method like a property
    class BankAccount {
        // by default all key is publi
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
        // Setter methods ===============================
        set addMoreBalance(amount: number) {
            this.balance += amount;
        }
        addBalance(amount: number) {
            this.balance += amount;
        }

        // Getter methods ===============================
        get getCurrentBalance(){
            return this.balance;
        }
        getBalance(){
            return this.balance;
        }
    } 

    const poorAccount = new BankAccount(155, "jm", 57, [1, 2, 3]);
    const addBalance = new HandleBalance(45, "jm", 57, [1, 2, 3]);


    addBalance.addBalance(45);
    
    addBalance.addMoreBalance = 45; // this method create by setter method. setter method advantage is we can use the method like a property


    const myBalance = addBalance.getBalance();
    const balance = addBalance.getCurrentBalance;// this is a method which create by Getter method. Getter method advantage is we can use the method like a property
    console.log(myBalance,balance);
}
