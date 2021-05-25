import Chart from './Chart'
function ExpenseChart(props){

    let data=[
        { label: 'Jan', value:0},
        { label: 'Feb', value:0},
        { label: 'Mar', value:0},
        { label: 'Apr', value:0},
        { label: 'May', value:0},
        { label: 'Jun', value:0},
        { label: 'Jul', value:0},
        { label: 'Aug', value:0},
        { label: 'Sep', value:0},
        { label: 'Oct', value:0},
        { label: 'Nov', value:0},
        { label: 'Dec', value:0},
    ];
   
    for (const expense of props.expenses){
            console.log(expense.amount);
            const expenseMonth=expense.date.getMonth();
            data[expenseMonth].value+=Number(expense.amount);
            
    };
    console.log(data);
    return <Chart items={data}/>;
};

export default ExpenseChart;