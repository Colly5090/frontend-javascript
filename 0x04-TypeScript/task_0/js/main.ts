// Define the Student interface with the specified types

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string
}

// Create two students that follow the Student interface

const studentA: Student = {
    firstName: "Abigail",
    lastName: "Gyan",
    age: 20,
    location: "Accra",
}

const studentB: Student ={
    firstName: "Yiadom",
    lastName: "Boakye",
    age: 30,
    location: "Temale",
}

// Create an array of students

const studentsList: Student[] = [studentA, studentB];

// Create a <table> element using vanilla JavaScript

const table: HTMLTableElement = document.createElement('table');

studentsList.forEach((student) => {
    const row: HTMLTableRowElement = document.createElement('tr');

    const firstNameCell: HTMLTableCellElement = document.createElement("td");

    firstNameCell.textContent = student.firstName;

    const locationCell: HTMLTableCellElement = document.createElement('td');

    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    table.appendChild(row);
});

document.body.appendChild(table);
