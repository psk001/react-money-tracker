import React from 'react'
import Expense from './expense';

const expenseTable = ({items}) => {
    return (
        <div>
            {items.map(item => {
                return <Expense key={item.id} item={item}/>
            })}
        </div>
    );
}
 
export default expenseTable;
