// Build a teacher interface
function printTeacher(firstName, lastName) {
    var returnStr = "".concat(firstName[0], ". ").concat(lastName);
    return returnStr;
}
var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false
};
console.log(printTeacher(teacher3.firstName, teacher3.lastName));
