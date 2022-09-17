import React from "react"; //this is not needed but just as a remainder.

import ExpenseForm from './ExpenseForm'
import '../NewExpense/NewExpense.css'

const NewExpense = () => {
    return <div className="new-expense">
        <ExpenseForm />
    </div>
};

export default NewExpense;