{

type AreaType = {
    width: number;
    height: number;

}
// look up type ==================================
type HeightType = AreaType["height"]; // Look up type 

// Mapped type =================================
type AreaTypeString_1 = {
    [key in "width" | "height"]: string;
}

type AreaTypeString_2 = { // more dynamic by use keyof method
    [key in keyof AreaType]: string;
}

type AreaTypeString_3<T> = { // more dynamic and by use Generic
    [key in keyof T]: string;
}
type  AreaType_1 = AreaTypeString_3<AreaType>


type AreaTypeString_4<T> = { // more dynamic and by use Generic abd Look up type
    [key in keyof T]: T[key];
}


type  AreaType_3 = AreaTypeString_4<{height: number; width: string}>  // more dynamic and by use Generic abd Look up type. Now we can pass any type of data type or as much as we need.

}