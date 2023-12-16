// Build a teacher interface

interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [key: string]: any
}

interface Directors extends Teacher {
    numberOfReports: number
}

function printTeacher(firstName: string, lastName: string) {
    const returnStr = `${firstName[0]}. ${lastName}`
    return returnStr
}

interface StudentClassInterface {
    firstName: string,
    lastName: string
}

class StudentClass{
    firstName: string
    lastName: string
    
    constructor(instance: StudentClassInterface) {
        this.firstName = instance.firstName
        this.lastName = instance.lastName
    }
    workOnHomework(): string {
        return "Currently working"
    }
    displayName(): string {
        return this.firstName
    }
}
