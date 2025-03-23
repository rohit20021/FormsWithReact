import React, { FormEvent, useState } from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";

interface Form {
  name: string;
  age: number;
}

const Form = () => {
  const { register, handleSubmit, formState } = useForm<Form>();
  console.log(formState.errors);
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="form-control"
          {...register("name", { required: true, minLength: 3 })}
        />
        {formState.errors.name?.type == "required" && <p className="text-danger">name is required</p>}
        {formState.errors.name?.type == "minLength" && (
          <p className="text-danger">name must be at least 3 characters</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="Age" className="form-label">
          Age
        </label>
        <input
          id="age"
          type="number"
          className="form-control"
          {...register("age")}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
