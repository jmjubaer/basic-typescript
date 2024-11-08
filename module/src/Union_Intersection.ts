// union and interception types

type FrontEndDeveloper = {
    skill: string[];
    designation_1: "Frontend Developer" | "Developer";
};
type BackEndDeveloper = {
    skill: string[];
    designation_2: "Backend Developer" | "Developer";
};

// union types, like or methods this or that
type Developer = FrontEndDeveloper | BackEndDeveloper;

// intersection type, like logical and method both required
type FullStackDeveloper = FrontEndDeveloper & BackEndDeveloper;

const developer_1: Developer = {
    skill: ["React", "JavaScript"],
    designation_1: "Frontend Developer",
};

const developer_2: Developer = {
    skill: ["React", "JavaScript"],
    designation_2: "Backend Developer",
};

const fullStackDeveloper_1: FullStackDeveloper = {
    skill: ["React", "JavaScript"],
    designation_1: "Frontend Developer", // this is a union type ("Frontend Developer" | "Developer")
    designation_2: "Backend Developer",
};
const fullStackDeveloper_2: FullStackDeveloper = {
    skill: ["React", "JavaScript"],
    designation_1: "Developer", // this is a union type ("Frontend Developer" | "Developer")
    designation_2: "Backend Developer",
};
