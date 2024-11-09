{
    //handle type in custom promises\
    // declare type in promises handle
// declare data type when call any async function use "Promise<type>"
    const createPromise = (): Promise<string> => {
        // we can pass "<string>" object type like {name: string}
        // return new Promise<{name: string}>((resolve, reject) => { // example
        return new Promise<string>((resolve, reject) => {
            const something: string = "This is a string data";
            if (something) {
                resolve(something);
            } else {
                reject(new Error("No string data"));
            }
        });
    };

    const resolvePromise = async (): Promise<string> => {
        const data: string = await createPromise();
        console.log("Data resolved:", data);
        return data;
    };

    resolvePromise();

// Use data type when call any outside data
// declare data type when call any async function use "Promise<type>"
    type Todo = {
        id: number;
        userId: number;
        title: string;
        complete: boolean;
    };
    const getTodo = async (): Promise<Todo> => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );
        const data: Todo = await response.json();
        console.log("Todo fetched:", data);
        return data;
    };
    getTodo()
}
