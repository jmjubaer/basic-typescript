{


    //  conditional type
    type X = string;
    type Y = number;
    
    type ConditionType_1 = X extends string ? true : false; // conditional type like if else condition. if X = string then its type is true,
    type ConditionType_2 = X extends string ? true : false;

    type My = {
        name : string; 
        age : number;
        like: string;
    }

    type CheckLove<T> = T extends "like" ? true : false;
    type CheckLove_1<T> = T extends keyof My ? true : false; // more dynamic and clean 

    type isLove = CheckLove<"like">
    type isLove_1 = CheckLove<"like">
}
