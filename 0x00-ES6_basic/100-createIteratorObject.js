export default function createIteratorObject(report) {
    const employees = []
    for (const emp of Object.values(report.allEmployees)) {
        for (const empName of emp) {
            employees.push(empName)
        }
    }
    return employees
}