import React,{useState} from 'react'
import NewExpense from './NewExpense'
function AddExpense(props){
    const [add,setAdd]=useState(false);
    const addTrue=()=>{
            setAdd(true);
    };
    const addFalse=()=>{
        setAdd(false);
    };
    const expenseHandler=(expense)=>{
        props.onSubmit(expense);
    };
    return <div>
        {!add && (<button onClick={addTrue}>Add Expense</button>)}
        {add && (<NewExpense onSubmit={expenseHandler} onCancel={addFalse}/>)}
    </div>
};

export default AddExpense;