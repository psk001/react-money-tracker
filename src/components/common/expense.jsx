import React from 'react'
import '../../styles/expense.css'

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

const Expense = (props) => {
    const {date, expenseHead, price}= props.item
    const [ day, month, year]= date.split("-").reverse()
    console.log(day, month, year)
    return ( 
        <div className='expense-container'>
            <div className='date-col'>
                <span className='month-span'>{months[month]}</span>
                <span  className='year-span'>{year}</span>
                <span className='day-span'>{day}</span>
            </div>
            <div className='expenseHead-col'>
                {expenseHead}
            </div>
            <div className='price-col'>{`₹ ${price}`}</div>
        </div>
     );
}
 
export default Expense;