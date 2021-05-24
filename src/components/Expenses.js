import React,{useState} from 'react'
import './Expenses'
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter'
function Expenses(props){
    const[filteredYear,setFilteredYear]=useState('2021');
    const filterHandler=(year)=>{
        setFilteredYear(year);
    };
    const filteredExpenses=props.expenses.filter((expense)=>{
            return expense.date.getFullYear().toString()===filteredYear;
        });
    return (
        <div>
        <ExpenseFilter selected={filteredYear} onSelected={filterHandler}/>
        {filteredExpenses.map(expense=>{
            return <div>
             <ExpenseItem date={expense.date}
             title={expense.title}
             amount={expense.amount}
            />
            </div>
        })}
        </div>
        );

}

export default Expenses