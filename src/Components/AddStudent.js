import { useState } from "react";
import "./AddStudents.css";

function AddStudent({ addToList }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [DOB, setDOB] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addToList(name, age, DOB);
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label className="addColor">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Age</label>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label>DOB</label>
        <input
          type="text"
          value={DOB}
          onChange={(e) => setDOB(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default AddStudent;
