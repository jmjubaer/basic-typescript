class Counter {
    static count: number = 0; // static keyword make the class constructor like as a object. it store the data in specific memory location. if i create multiple new instance all save the data in same memory location.
    increment() {
        // return this.count++;
        return Counter.count++; // if i use static keyword need to use the main class constructor name instead of "this" keyword.
    }
    static decrement() {
        // If we make a method static need to use the main class constructor name instead of instance name

        
        // return this.count--;
        return Counter.count--; // if i use static keyword need to use the main class constructor name instead of "this" keyword.
    }
}

const counter_1 = new Counter();
console.log(counter_1.increment());

const counter_2 = new Counter();
console.log(counter_1.increment());
console.log(Counter.decrement()); // If we make a method static need to use the main class constructor name instead of instance nam
