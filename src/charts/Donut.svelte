<script>
import { Doughnut } from 'svelte-chartjs';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
  } from 'chart.js';

    const data = {
  labels: ['Organic Search', 'Direct', 'Paid Search', 'Other'],
  datasets: [
    {
      data: [4591, 2816, 1214, 938],
      backgroundColor: ['#7380ec', '#ff7782', '#41f1b6', '#ffbb55'],
    },
  ],
};

  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
</script>

<Doughnut {data} options={{ responsive: true, borderWidth: 0, plugins: {legend: {display: false}} }} />