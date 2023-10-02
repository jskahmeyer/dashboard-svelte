<script>
  import { Bar } from 'svelte-chartjs'

  import {
    Chart,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from 'chart.js'

  Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

  const data = {
    labels: ['April', 'May', 'June', 'July', 'August', 'September'],
    datasets: [
      {
        data: [181789, 192618, 187867, 173276, 179532, 154012],
        backgroundColor: [
          '#ff7782',
          '#7380ec',
          '#ffbb55',
          '#41f1b6',
          'rgb(98,  182, 239)',
          'rgb(255, 177, 101)',
        ],
        borderWidth: 0,
      },
    ],
  }
</script>

<Bar
  {data}
  options={{
    responsive: true,
    plugins: { legend: { display: false } },
  }}
/>
