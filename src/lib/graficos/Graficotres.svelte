<script>
    // @ts-nocheck
    
        import Chart from 'chart.js/auto';
      import { onDestroy, onMount } from 'svelte';
        
      let chart;
  let chartData = [0, 5, 2, 20, 30, 45];
  let newValue = 10;
  let meses =  [...Array(600).keys()];

  function updateChartData() {
    chartData[2] = newValue; // altere o valor na posição desejada
   // chart.data.datasets[0].data = chartData;
   
    chart.update();
  }

  onMount(() => {
    const canvas = document.getElementById('myChart');
    const ctx = canvas.getContext('2d');

    chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6'],
        datasets: [{
          label: 'Meu gráfico',
          data: chartData,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      }
    });
  });
      </script>
    

      <div class="form-control w-full max-w-xs">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">
          <span class="label-text">Informe o valor?</span>          
        </label>
        <input type="text" placeholder="Type here" class="input input-bordered input-xs w-full max-w-xs" bind:value={newValue} on:input={updateChartData} />
        
      </div>

      <div class="form-control w-full max-w-xs">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">
          <span class="label-text">Informe o valor!</span>
          
        </label>
        <select bind:value={newValue} on:input={updateChartData} class="select select-bordered select-md w-full max-w-xs">
          
          {#each meses as item}
             <option >{item}</option>
          {/each}
        </select>
        <!-- svelte-ignore a11y-label-has-associated-control -->

      </div>



      
      <canvas id="myChart" ></canvas>
      