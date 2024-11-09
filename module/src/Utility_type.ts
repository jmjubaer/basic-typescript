{
    // Utility types in typeScript

    type Person = {
        name: string;
        age: number;
        email?: string;
        address?: string;
    };
    // Pick type =================================================================
    type PickType = Pick<Person, "name" | "age">; // It's take the passed key type and create a new type. we can pass single or multiple key.

    // Omit type =================================================================
    type OmitType = Omit<Person, "email" | "address">; // It's remove the passed key type and create a new type. we can pass single or multiple key.

    // Required type =================================================================

    type RequiredType = Required<Person>; // It's convert the optional properties to required properties.

    // Partial type =================================================================

    type PartialType = Partial<Person>; // It's convert the required properties to optional properties.

    // Readonly type =================================================================

    type ReadonlyType = Readonly<Person>; // It's make the properties of object as read-only. we can not change the properties value.

    const person_1: ReadonlyType = {
        name: "John",
        age: 30,
        email: "john@example.com",
        address: "123 Main St",
    };

    // person_1.name = "Jane"; // Error: Cannot assign to 'name' because it is a read-only property.

    // Record type ===============================================

    // type RecordType = Record<"id" | "name", string>; // It's create a new type from a key type and value type.
    type RecordType = Record<string, string>; // more dynamic. notes: object key always is a string

    const record_1: RecordType = {
        id: "123",
        name: "John",
    };

    type RecordType_1 = Record<string, unknown>; // more useful. notes: object key always is a string





}
