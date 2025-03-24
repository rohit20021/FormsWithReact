import React from "react";
interface Props {
  categories: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const SelectDropdown = (props: Props) => {
  return (
    <select className="form-select" onChange={props.onChange}>
      <option value="">All categories</option>
      {props.categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default SelectDropdown;
