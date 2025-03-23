import React, { FormEvent, useState } from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
  age: z.number({invalid_type_error:'age field is required'}).min(18),
});

type Form = z.infer<typeof formSchema>;

const Form = () => { 
  const { register, handleSubmit, formState  } = useForm<Form>({
    resolver: zodResolver(formSchema),
  });
  // console.log(formState.errors);
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
          {...register("name")}
        />
        {formState.errors.name && (
          <p className="text-danger">{formState.errors.name.message}</p>
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
          {...register("age",{valueAsNumber:true})}
        />
        {formState.errors.age && (
          <p className="text-danger">{formState.errors.age.message}</p>
        )}
      </div>

      <button disabled={! formState.isValid} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
