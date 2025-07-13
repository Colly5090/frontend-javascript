interface Teacher {
    readonly firstName: string;   // Cannot be changed after initialization
    readonly lastName: string;    // Cannot be changed after initialization
    fullTimeEmployee: boolean;    // Must always be defined
    yearsOfExperience?: number;   // Optional property
    location: string;             // Must always be defined
    [key: string]: any;           // Allows additional arbitrary properties
    }

    // To extend the properties in teachers into directors

interface Directors extends Teacher {
    numberOfReports: number;
    }

// Function interface and function to print a name 

interface printTeacherFunction {
    (firstName: string, lastName: string): string
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
    }

//Create class with method and constructor interface

interface studentConstructor {
    firstName: string;
    lastName: string;
}

interface studentMethods {
    workOnHomework(): string;
    displayName(): string;
}


class StudentClass implements studentMethods {
    firstName: string;
    lastName: string;

    constructor(student: studentConstructor) {
        this.firstName = student.firstName;
        this.lastName = student.lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}
