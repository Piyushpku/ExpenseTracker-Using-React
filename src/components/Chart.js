import ChartBar from './ChartBar'
import '../Chart.css';

function Chart(props){
    const d=props.items.map(exp=>exp.value);
    const maxV=Math.max(...d);
    
    console.log(props.items);
    return (
    <div className='chart'>
        {props.items.map((exp)=>(
             <ChartBar key={exp.label} title={exp.label} maxValue={maxV} value={exp.value}
             />
        
        ))}
    </div>
    );
};

export default Chart;