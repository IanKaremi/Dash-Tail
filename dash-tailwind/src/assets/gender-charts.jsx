import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);



export default function Gen({M , F}){
    const data ={
    labels: ['Male','Female'],
    datasets:[
        {
            label: "Population",
            data:[M,F],
            backgroundColor:[
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',

            ],
            borderWidth: 1,
        }
    ]
}


    return <Pie data={data} />
}