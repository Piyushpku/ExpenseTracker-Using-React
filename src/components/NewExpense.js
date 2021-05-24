import React,{useState} from 'react'
function NewExpense(props){
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');
    const titleChangeHandler=(event)=>{
            setEnteredTitle(event.target.value);
    }
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        const val={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate),

        };
        props.onSubmit(val);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return <div>
        <div>New Addition Form:</div>
        <form onSubmit={submitHandler}>
        <div>
            <label>Title</label>
            <input  type='text' value={enteredTitle} onChange={titleChangeHandler}
            />
        </div>
       <div>
            <label>Amount</label>
            <input  type='number'  min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}
            />
       </div>
       <div>
       <label>Date</label>
            <input  type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler}
            />
       </div>
        <button type='submit'>Submit</button>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        </form>
    </div>
}
export default NewExpense;