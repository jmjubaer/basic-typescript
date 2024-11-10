{
// type guard by using instanceof keyword

class Animal {
    name: string;
    species: string
    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }
    makeSound(){
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    constructor (name: string, species: string) {
        super(name, species);
    }
    makeBarkSound(){
        console.log("I am barking");
    }
}
class Cat extends Animal {
    constructor (name: string, species: string) {
        super(name, species);
    }
    makeMeowing(){
        console.log("I am Meowing");
    }
}


const dog = new Dog("Kutta", "Dog");
const cat = new Cat("Billu", "Cat");

const getAnimal = (animal: Animal) => {
    if(animal instanceof Dog){
        dog.makeBarkSound();
    }else if(animal instanceof Cat) {
        cat.makeMeowing();
    }else {
        animal.makeSound();
    }
}

const dogSound = getAnimal(dog);

const catSound = getAnimal(cat);

// more smart way to use type guard 

const isDog = (animal: Animal) : animal is Dog => {
    return animal instanceof Dog;
}
const isCat = (animal: Animal) : animal is Cat => {
    return animal instanceof Cat;
}
const getAnimal_smart = (animal: Animal) => {
    if(isDog(dog)){
        dog.makeBarkSound();
    }else if(isCat(cat)) {
        cat.makeMeowing();
    }else {
        animal.makeSound();
    }
}


const dogSound_smart = getAnimal_smart(dog);

const catSound_smart = getAnimal_smart(cat);

}