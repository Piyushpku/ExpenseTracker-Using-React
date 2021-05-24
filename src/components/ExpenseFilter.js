import React from 'react'
function ExpenseFilter(props){
    const yearHandler=(event)=>{
        props.onSelected(event.target.value);
    }
    return <div>
        <label>Filter by Year</label>
        <select value={props.selected} onChange={yearHandler}>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
        </select>
    </div>
};

export default ExpenseFilter;