export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCity = students.filter((student) => student.location === city);

  const newStudentsGrade = studentsInCity.map((student) => {
    const studentCopy = student;
    for (const grade of newGrades) {
      if (grade.studentId === studentCopy.id) {
        studentCopy.grade = grade.grade;
        return studentCopy;
      }
    }
    studentCopy.grade = 'N/A';
    return studentCopy;
  });
  return newStudentsGrade;
}
