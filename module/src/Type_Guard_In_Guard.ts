{
    // Type guard
    // use typeGuard by using  "typeof" method
    type NormalType = number | string;
    // const add = (param_1: number | string, param_2: number | string): number | string => {
    const add = (param_1:NormalType, param_2: NormalType):NormalType => { // more clean
        if (typeof param_1 === 'number' && typeof param_2 === 'number') {
            return param_1 + param_2
        }else{
            return param_1.toString() + param_2.toString()
        }
    };

    const result_1 = add(10, 20); // result_1: number
    const result_2 = add('10', '20'); // result_2: string

    console.log(result_1, result_2);

// In guard 

    type NormalUser = {
        name: string;
        age: number;
    }
    type AdminUser = {
        name: string;
        age: number;
        role: 'admin';
    }
// In guard use for checking the specific field type and make decision base on it
    const getUserIdentity = (user: AdminUser| NormalUser) => {
        if ('role' in user) {
            console.log("I am admin");
            return 'Admin User'
        } else {
            console.log("I am a user");
            return 'Normal User'
        }
    }
    const normalUser: NormalUser = {
        name: 'John Doe',
        age: 30,
    }
    const adminUser: AdminUser = {
        name: 'Jane Doe',
        age: 35,
        role: 'admin',
    }

    console.log(getUserIdentity(normalUser)); // I am a user
    console.log(getUserIdentity(adminUser)); // I am admin

}
