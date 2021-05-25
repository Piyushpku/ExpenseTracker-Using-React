import React,{useState} from 'react'
import './Expenses'
import ExpenseList from './ExpenseList'
import ExpenseFilter from './ExpenseFilter'
import ExpenseChart from './ExpenseChart'
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
        <ExpenseChart expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses}/>
        </div>
        );

}

export default Expenses