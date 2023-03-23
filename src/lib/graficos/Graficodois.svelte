<script>
// @ts-nocheck

    import Chart from 'chart.js/auto';
  import { onDestroy, onMount } from 'svelte';
    
    /**
   * @type {Chart<"line", number[], string>}
   */
    let chart;
    let valorData = 10;
    let chartData = [0, valorData, 5, 2, 20, 30, 45];

    
    
    onMount(() => {
      const ctx = document.getElementById('chart').getContext('2d');
      chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: 'My Dataset',
            data: chartData,
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1
          }]
        }
      });
    });

   
    
    
    onDestroy(() => {
      chart.destroy();
    });
  </script>
  <div>
    <input bind:value={valorData} type="number" placeholder="enter your name">
  
  </div>
  
  <canvas id="chart"></canvas>
  