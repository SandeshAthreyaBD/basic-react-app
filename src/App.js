import { useState } from "react";
import "./App.css";
import AddStudent from "./Components/AddStudent";
import Students from "./Components/Students";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Sayli", age: "45", DOB: "17 Oct 1976" },
    { id: 2, name: "Dheeraj", age: "55", DOB: "19 jun 1965" },
    { id: 3, name: "Aditya", age: "78", DOB: "14 Jul 1987" },
    { id: 4, name: "Shalu", age: "80", DOB: "12 Aug 1997" },
  ]);

  const addToList = (newName, newAge, newDOB) => {
    const studentID = Math.random() * 10;
    console.log(newName, newAge, newDOB);
    setStudents([
      ...students,
      { id: studentID, name: newName, age: newAge, DOB: newDOB },
    ]);
  };

  const deleteStudent = (id) => {
    console.log(id);
    const newStudentsList = students.filter((student) => {
      return student.id !== id;
    });
    setStudents(newStudentsList);
  };

  return (
    <div className="App">
      <h1>This is my first app</h1>
      <Students students={students} deleteStudent={deleteStudent} />
      <AddStudent addToList={addToList} />
    </div>
  );
}

export default App;
