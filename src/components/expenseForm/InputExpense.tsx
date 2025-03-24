import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters" }),
  amount: z.number({ invalid_type_error: "Amount field is required" }).min(1),
  category: z.string().nonempty({ message: "Category is required" }),
});

interface Props {
  categories: string[];
  onSave: (data: { description: string; amount: number; category: string }) => void;
}

type ExpenseForm = z.infer<typeof formSchema>;

const InputExpense = (props: Props) => {
  const { register, handleSubmit, formState,reset } = useForm<ExpenseForm>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: ExpenseForm) => {
    console.log(data);
    props.onSave(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          id="description"
          type="text"
          className="form-control"
          {...register("description")}
        />
        {formState.errors.description && (
          <p className="text-danger">{formState.errors.description.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="Amount" className="form-label">
          Amount
        </label>
        <input
          id="amount"
          type="number"
          className="form-control"
          {...register("amount", { valueAsNumber: true })}
        />
        {formState.errors.amount && (
          <p className="text-danger">{formState.errors.amount.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          id="category"
          {...register("category")}
        >
          {props.categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default InputExpense;
