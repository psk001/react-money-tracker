import React, { useEffect, useState } from "react";
import TrackerHeader from "./trackerHeader";
import TrackerBody from "./trackerBody";
import {getExpenses} from '../support.js'

const Tracker = () => {

  // const navigate = useNavigate()
  const [expenses, setExpenses]= useState([])

  useEffect(() => {
    const expenses= getExpenses()
    setExpenses(expenses)
  }, [])

  const  handleAddExpense = () => {
    console.log('add new')
    const expense= {
        id: 3,
        date: 'July 23 2023',
        expenseHead: 'Aaloo',
        price: '2000'
    }

    const expensesList= [expense, ...expenses]
    setExpenses(expensesList)

    // navigate('/add-expense')
  }

  return (
    <React.Fragment>
      <TrackerHeader addExpense={handleAddExpense} />
      <TrackerBody expenses={expenses} onSubmit={handleAddExpense}/>
    </React.Fragment>
  );
}
 
export default Tracker;
