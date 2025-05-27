import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onAddExpense }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount || !category) return;

    onAddExpense({
      id: Date.now(),
      name,
      amount: parseFloat(amount),
      category,
    });

    setName("");
    setAmount("");
    setCategory("");
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Naziv"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Iznos"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Kategorija"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">Dodaj trošak</button>
    </form>
  );
};

export default ExpenseForm;
