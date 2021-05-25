import ExpenseItem from './ExpenseItem'
function ExpenseList(props){

    return <ul>
        {props.items.map((expense)=>(
         <ExpenseItem date={expense.date}
         title={expense.title}
         amount={expense.amount}
        />
    ))}
    </ul>
    
    /*return (
        <ul >
          {props.items.map((expense) => (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
        </ul>
      );*/
};

export default ExpenseList;