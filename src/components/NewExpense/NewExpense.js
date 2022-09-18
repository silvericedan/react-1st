import React from "react"; //this is not needed but just as a remainder.

import ExpenseForm from './ExpenseForm'
import '../NewExpense/NewExpense.css'

const NewExpense = () => {

    const saveExpenseDataHandler= (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
    }

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
};

export default NewExpense;