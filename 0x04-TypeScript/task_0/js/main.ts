interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

let student1: Student = {
    firstName: "raymond",
    lastName: "stance",
    age: 23,
    location: "nairobi"
}
let student2: Student = {
    firstName: "job",
    lastName: "ok",
    age: 20,
    location: "cape town"
}

const studentsList = [student1, student2]
const table = document.createElement('table')

studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameRow = row.insertCell(0);
    const locationRow = row.insertCell(1);

    firstNameRow.innerHTML = student.firstName;
    locationRow.innerHTML = student.location;
});