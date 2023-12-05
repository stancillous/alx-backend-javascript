export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCity = students.filter((student) => student.location === city);

  const newStudentsGrade = studentsInCity.map((student) => {
    let student_copy = student
    for (const grade of newGrades) {
      if (grade.studentId === student_copy.id) {
        student_copy.grade = grade.grade;
        return student_copy;
      }
    }
    student_copy.grade = 'N/A';
    return student_copy;
  });
  return newStudentsGrade;
}
