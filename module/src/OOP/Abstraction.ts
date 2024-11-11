{
// Abstraction 

// this is demo more in nex class 
interface Vehicle_1 {
    startEngine(): void;
    stopEngine(): void;
}

// there are main implementations the vehicle type alias data
class Car_1 implements Vehicle_1 { // For use any type alias in a class use "implements" keyword
    startEngine(): void {
        console.log("Car engine started");
    }
    stopEngine(): void {
        console.log("Car engine stopped");
    }
}


// Abstraction by Abstract keywords 

abstract class Car_2 implements Vehicle_1 {  // when we make a class abstract we can define any object by use this class but we can use this for create a child class. Abstract hold a idea data more definition  child class constructor. 
    abstract startEngine(): void 
    abstract stopEngine(): void
}

class ToyotaCar extends Car_2 {
    startEngine(): void {
        console.log("Toyota engine started");
    }
    stopEngine(): void {
        console.log("Toyota engine stopped");
    }
}

const toyotaCar_1 = new ToyotaCar();
 toyotaCar_1.startEngine();





}