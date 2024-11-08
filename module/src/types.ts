// Typescript data types

// string types===============================
const STRING_TYPES: string = "string";
// number types==========================
const NUMBER_TYPES: number = 12;

// boolean type==========================
const BOOLEAN_TYPES: boolean = true;

// undefined type=============================
const UNDEFINED_TYPES: undefined = undefined;

// null type====================================
const NULL_TYPES: null = null;

// string array types======================================
const STRING_ARRAY_TYPES: string[] = ["string", "number", "boolean"];
// number array types=================================
const NUMBER_ARRAY_TYPES: number[] = [45, 45, 1];

// you can not define more than whats you define in tuple array
// tuple type===============================
const TUPLE_NUMBER_TYPES: [number, number] = [45, 85];
const TUPLE_STRING_TYPES: [string, string] = ["string", "number"];

// object types=====================================

const OBJECT_TYPES: {
    name: "jm"; // string literal type
    age: number;
    isMarried?: boolean; // optional type
    readonly nationality: string; // literal type: literal type can not reassign or change
} = {
    name: "jm",
    nationality: "American",
    age: 30,
};




// Nullable types==========================================

const searchItem = (key: string | null) => {
    if(key){
        console.log(`Searching for item with key: ${key}`);
    }else{
        console.log("no key available for search");
    }
}

searchItem("item1");
searchItem(null) // we can use null type for searching

// unknown types================================

// we can use unknown type when we not know what type be returned or get
const getType = (key: unknown) => {
    if(typeof key === "string"){
        console.log("key is a string");
    }else if(typeof key === "number"){
        console.log("key is a number");
    }else{
        console.log("key is not a string or number");
    }
}
getType("5")
getType(5)


// Never type===================================

// we can use never type when we know it's never return any value.
const throwError = (arg:string):never => {
    throw new Error("Something went wrong");
}
throwError("something went wrong")
