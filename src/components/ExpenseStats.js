import React from "react";
import "./ExpenseStats.css";

const ExpenseStats = ({ expenses }) => {
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  const categoryStats = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
    return acc;
  }, {});

  return (
    <div className="expense-stats">
      <h2>Statistika</h2>
      <p>Ukupno: {total.toFixed(2)} kn</p>
      <ul>
        {Object.entries(categoryStats).map(([cat, sum]) => (
          <li key={cat}>
            {cat}: {sum.toFixed(2)} kn
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseStats;
