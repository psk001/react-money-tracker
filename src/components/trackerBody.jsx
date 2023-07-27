import React from 'react'
import ExpenseTable from './common/expenseTable';

const TrackerBody = ({expenses}) => {
    return ( 
        <div className='tracker-body'>
            <ExpenseTable items={expenses}/>
        </div>
     );
}
 
export default TrackerBody;