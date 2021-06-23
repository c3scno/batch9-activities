import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [addNewExpense, setAddNewExpense] = useState(false);

  const addNewExpenseHandler = () => {
    setAddNewExpense(!addNewExpense);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
  };

  const cancelAddNewExpenseHandler = (cancelAddExpense) => {
    setAddNewExpense(cancelAddExpense);
  };

  return (
    <div className="new-expense">
      {addNewExpense ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          addNewExpense={cancelAddNewExpenseHandler}
        />
      ) : (
        <button type="submit" onClick={addNewExpenseHandler}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
