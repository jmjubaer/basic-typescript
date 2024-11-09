{
    //
    // constraints ======================================

    const addToCourse = <T extends { name: string; emil: string }>(
        student: T
    ) => {
        // we can extend the type with Generic type declaration. it's called Constraints
        return {
            tile: "Next level developer",
            ...student,
        };
    };

    const student_1 = addToCourse<{ name: string; emil: string, address: string }>({
        name: "Jm",
        emil: "jm@gmail.com",
        address: "Dhaka",
    });

    type Student = { name: string; emil: string, mobile: string }

    const student_2 = addToCourse<Student>({ name: "Jm", emil: "jm@gmail.com" , mobile: "Iphone" }); // More clean way to type handle



    // keyof =================================================================
    // keyof method use ot get the object key name not value. we know that the object contain a key and value pair.
    const getPropertyValue = <X , Y extends keyof X>(obj:X,key:Y) =>  {
        return obj[key];
    }

    const user = {
        name: "John Doe",
        age: 30,
    }
    const car = {
        make: "Toyota",
        model: "Camry",
        year: 2020,
    }
    const name = getPropertyValue(user, "name"); // get property value suggestion name. 
    const model = getPropertyValue(car, "model");








    //
}
