
interface DirectorInterface {
    workFromHome(): string,
    getCoffeBreak(): string,
    workDirectorTasks(): string
}

interface TeacherInterface {
    workFromHome(): string,
    getCoffeBreak(): string,
    workTeacherTasks(): string
}

class Director implements DirectorInterface{

    workFromHome(): string {
        return "Working from home"
    }
    getCoffeBreak(): string {
        return "Getting a coffee break"
    }
    workDirectorTasks(): string {
        return "Getting to director tasks"
    }
}

class Teacher implements TeacherInterface{
    workFromHome(): string {
        return "Working from home"
    }
    getCoffeBreak(): string {
        return "Getting a coffee break"
    }
    workTeacherTasks(): string {
        return "Getting to director tasks"
    }

}

// create a function createEmployee with the following requirements
function createEmployee(salary: number | string) {
    if (typeof(salary) == "number" && salary < 500) {
        return new Teacher
    } else {
        return new Director
    }
}

type Employee = Director | Teacher

// function will be used as a type predicate and if the employee is a director
function isDirector(employee: Employee): employee is Director {
    return (employee instanceof Director)
}

function executeWork(employee: Employee) {
    // if the employee is a Director, it will call workDirectorTasks
    // if the employee is a Teacher, it will call workTeacherTasks
    if (isDirector(employee)) {
        employee.workDirectorTasks()
    } else {
        employee.workTeacherTasks()
    }
}

type Subjects = "Math" | "History"

function teachClass(todayClass: string): string {
    if (todayClass === "Math") {
        return "Teaching Math"
    }
    return "Teaching History"

}
