import React, { FormEvent, useState } from "react";

//using state hook can be time consuming and error prone
//using form hook is a better way to handle forms
//form hook is a custom hook that handles form state and validation

const Form = () => {
  const [person, setPerson] = useState({ name: "", age: '' });
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="form-control"
          value={person.name}
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Age" className="form-label">
          Age
        </label>
        <input
          id="age"
          type="number"
          className="form-control"
          value={person.age}
          onChange={(e) =>
            setPerson({ ...person, age: e.target.value })
          }
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
