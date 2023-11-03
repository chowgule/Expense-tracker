import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import categories from "./categories";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 3, category: "Utilities" },
    { id: 2, description: "abc", amount: 4, category: "Groceries" },
    { id: 3, description: "def", amount: 5, category: "Entertainment" },
    { id: 4, description: "ghi", amount: 6, category: "Movies" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>

      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(Category) => setSelectedCategory(Category)}
        />
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
};

export default App;
