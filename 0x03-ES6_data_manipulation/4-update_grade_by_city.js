export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCity = students.filter((student) => student.location === city);

  const newStudentsGrade = studentsInCity.map((student) => {
    for (const grade of newGrades) {
      if (grade.studentId === student.id) {
        student.grade = grade.grade;
        return student;
      }
    }
    student.grade = 'N/A';
    return student;
  });
  return newStudentsGrade;
}
