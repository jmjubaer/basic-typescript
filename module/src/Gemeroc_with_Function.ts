{
    //
    // Generic method

    const createArray = (param: string): string[] => {
        // type define in normal way
        return [param];
    };

    const createArrayWithGeneric = <T>(param: T): T[] => {
        // type define by generic method
        return [param];
    };

    const array_1 = createArrayWithGeneric<number>(45);
    const array_2 = createArrayWithGeneric<string>("45");
    const array_3 = createArrayWithGeneric<{name: string,seem: number}>({name: "pinik",seem: 5}); // pass object in generic 

    type User  = {name: string,seem: number} // More clean way
    const array_4 = createArrayWithGeneric<User>({name: "pinik",seem: 5}); /// More clean way to type define user

    const createTupleWithGeneric = <T,P>(param_1: T, param_2: P): [T,P] => {
        return [param_1, param_2];
    };

    const tuple_1 = createTupleWithGeneric<number, string>(45, "string"); 
    
    const tuple_2 = createTupleWithGeneric<number, {name: string,seem: number}>(5, {name: "pinik",seem: 5}); // we can pass here object as parameter and define type



    //
}
