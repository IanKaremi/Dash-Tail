import { Pie, PieChart, Tooltip, Cell } from 'recharts'



function Charts({ M, F }){

    let data = [
        {name:'Male', value: M},
        {name:'Female', value: F},

    ]

    return(
    <>
    <PieChart width={200} height={200}>
        <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={70}
            
            fill="#8884d8"
            label
        
       />
        <Tooltip/>
    </PieChart>
   
    
    
    
    </>
    )
}

export default Charts;