<script>
// @ts-nocheck

    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
  
    let chart;
    let data_label =  [...Array(10).keys()];
    let data_valor = [...Array(10).keys()].map(x => (x ** 2));
    let colunas = ['','Label', 'Valor'];
  
    const createChart = () => {
      const canvas = document.getElementById('myChart2');
      const ctx = canvas.getContext('2d');
      chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: data_label,
          datasets: [{
            label: 'y = x^2',
            data: data_valor,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
        options: {}
      });
    };
  
    onMount(createChart);
  </script>
  
  <div >
    <div >
        <canvas id="myChart2" ></canvas>  
    </div> 
    <br>
    <div >
        <table class="table table-compact w-full">
            <thead>
                
              <tr  class="hover">
                <th>Label</th>
                <th>valor</th>
              </tr>

            </thead>
            <tbody>
              {#each data_label as item, i}
                <tr  class="hover">
                  <td>{item}</td>
                  <td>{data_valor[i]}</td>
                </tr>
              {/each}
            </tbody>
          </table>     
          
    </div>

      
  </div>


