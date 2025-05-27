import React from "react";
import "./ExpenseList.css";

const ExpenseList = ({ expenses }) => {
  return (
    <div className="expense-list">
      <h2>Popis troškova</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.name} - {expense.amount.toFixed(2)} kn ({expense.category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
