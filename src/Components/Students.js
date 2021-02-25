import React from "react";

function Students({ students, deleteStudent }) {
  console.log(students);

  const studentsList = students.map((student) => {
    return student.age > 50 ? (
      <div key={student.id}>
        <div>Name: {student.name}</div>
        <div>Age: {student.age}</div>
        <div>DOB: {student.DOB}</div>
        <button onClick={() => deleteStudent(student.id)}>Delete</button>
      </div>
    ) : null;
  });
  return <div>{studentsList}</div>;
}

export default Students;
