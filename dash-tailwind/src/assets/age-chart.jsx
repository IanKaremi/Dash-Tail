import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

const labels = ['Under 13', '14 - 19', '20 - 29', '30 - 39', '40 - 49', '50- 59', '60+'];

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export default function Age(props) {
    console.log(props)
    const data = {
    labels,
    datasets: [
            {
                label: 'Number of People',
                data: props.arr,
                backgroundColor: 'rgba(255, 99, 132, 1)',
            },
        ],    
    };
    return (
        <div>
            
            <Bar data={data} />
        </div>
    );
}