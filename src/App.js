import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseStats from "./components/ExpenseStats";
import "./App.css";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="app">
      <h1>Kućanski troškovi</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseStats expenses={expenses} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default App;
