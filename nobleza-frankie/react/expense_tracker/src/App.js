import React, { useState } from "react";
import "./App.css";
import Expenses from "./Expenses/Expenses";
import NewExpense from "./Expenses/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    title: "Car Insurance",
    amount: 10000,
    date: new Date(2020, 3, 28),
  },
  {
    title: "House Insurance",
    amount: 2000,
    date: new Date(2021, 4, 28),
  },
  {
    title: "Computer Insurance",
    amount: 100,
    date: new Date(2019, 8, 28),
  },
  {
    title: "Health Insurance",
    amount: 4000,
    date: new Date(2020, 11, 25),
  },
];

// const DUMMY_EXPENSE = {
//   title: "Car Insurance",
//   amount: 100000,
//   date: new Date(2021, 5, 19),
// };

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
