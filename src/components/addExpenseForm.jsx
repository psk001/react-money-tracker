import React, { useState } from "react";
import InputField from "./common/input";
import {useNavigate} from 'react-router-dom';
import { updateExpense } from "../support";


const AddExpenseForm = () => {
  const [date, setDate] = useState("");
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");

  const navigate= useNavigate()

  const onChange = ({ currentTarget: input }) => {
    const { name, value } = input;
    if (name === "date") {
      setDate(value);
    } else if (name === "expense") {
      setExpense(value);
    } else {
      setAmount(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateExpense(date, expense, amount);//
    navigate('/')
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Date"
        name="date"
        value={date}
        onChange={onChange}
        placeholder="expense date"
      />

      <InputField
        label="Expense"
        name="expense"
        value={expense}
        onChange={onChange}
        placeholder="expense name"
      />

      <InputField
        label="Amount"
        name="amount"
        value={amount}
        onChange={onChange}
        placeholder="expense amount"
      />

      <button type="submit">Submit </button>
    </form>
  );
};

export default AddExpenseForm;
