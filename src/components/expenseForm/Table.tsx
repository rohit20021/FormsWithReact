import React from "react";
interface Expense{
  id:number;
  description:string;
  amount:number;
  category:string;
}
 
interface Props {
  items: Expense[];
  onDelete: (id: number) => void;
}

const Table = (props: Props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col"> No.</th>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((item) => (
          <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.description}</td>
            <td>{item.amount}</td>
            <td>{item.category}</td>
            <td><button type="button" className="btn btn-outline-danger" onClick={()=> props.onDelete(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={2}>Total</td>
          <td>{props.items.reduce((acc, item) => acc + item.amount, 0)}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
