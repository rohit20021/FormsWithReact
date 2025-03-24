import InputExpense from "./components/expenseForm/InputExpense";
import { useState } from "react";
import Table from "./components/expenseForm/Table";
import SelectDropdown from "./components/expenseForm/SelectDropdown";
import categories from "./resources/Categories";

function App() {
  const [ListOfItems, setListOfItems] = useState([
    { id: 1, description: "burger", amount: 100, category: "Food" },
    {
      id: 2,
      description: "electricity bill",
      amount: 150,
      category: "Utilities",
    },
    {
      id: 3,
      description: "movie tickets",
      amount: 45,
      category: "Entertainment",
    },
    { id: 4, description: "groceries", amount: 85, category: "Food" },
    { id: 5, description: "gas", amount: 60, category: "Transportation" },
    { id: 6, description: "internet", amount: 70, category: "Utilities" },
    { id: 7, description: "coffee", amount: 15, category: "Food" },
    { id: 8, description: "gym membership", amount: 50, category: "Health" },
    { id: 9, description: "books", amount: 35, category: "Education" },
    { id: 10, description: "shoes", amount: 120, category: "Clothing" },
    { id: 11, description: "phone bill", amount: 55, category: "Utilities" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleDelete = (id: number) => {
    const updatedItems = ListOfItems.filter((item) => item.id !== id);
    setListOfItems(updatedItems);
  };
  const handleSubmitButton = (newItem: {
    description: string;
    amount: number;
    category: string;
  }) => {
    const newId = ListOfItems.length > 0 ? ListOfItems[ListOfItems.length - 1].id + 1 : 1;
    const itemWithId = { ...newItem, id: newId };
    let updatedItems = [...ListOfItems, itemWithId];
    setListOfItems(updatedItems);
  };
  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  let getListOfItems = () => {
      return selectedCategory === ""
        ? ListOfItems
        : ListOfItems.filter((item) => item.category === selectedCategory);
    };

  return (
    <div>
      <div className="mb-4">
        <InputExpense categories={categories} onSave={handleSubmitButton} />
      </div>

      <div className="mb-3">
        <SelectDropdown
          categories={categories}
          onChange={(e) => handleCategoryChange(e.target.value)}
        />
      </div>
      <div>
        <Table items={getListOfItems()} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
