<script>
// @ts-nocheck

    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';

        // funções

function updateChartData() {
    Mes = MesR;
    C = CR
    i = iR;
    //chart.data.datasets[0].data = chartData; 
       
    
    chart.data.datasets[0].data = totalpago;
    chart.data.datasets[1].data = juros;
    chart.data.labels = data_label;

    chart.update();
  }

    // funções

    // variáveis reativas

    let MesR = 0;
    let CR = 0;
    let iR = 0;




    //
  
    let chart;
    let Mes = 10;
    let Meses = Mes + 1;
    let seq = [...Array(Mes + 1).keys()].splice(0)
    
    let data_valor = [...Array(Meses).keys()].map(x => (x ** 2));
    $: data_label =  [...Array(Meses).keys()].splice(1);
    $: C = 2000;
    $: i = 0.01;    
    $: M = [...Array(Meses).keys()].map(t => (C + C * i * t));
    $: colunas = ['','Label', 'Valor'];
    $: Amort = (C/Mes);
    $: PMT = [...Array(Meses).keys()].map(t => (Amort + C * i * t));
    $: SaldoDevedor = [...Array(Meses).keys()].map(t => (C - Amort*t));
    $: juros = [...Array(Meses).keys()].map(t => (SaldoDevedor[t] * i ));
    $: totalpago = [...Array(Meses).keys()].map(t => (juros[t] + Amort ));






    
  
    onMount(() => {
      const canvas = document.getElementById('myChart2');
      const ctx = canvas.getContext('2d');
      chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: data_label,
          datasets: [{
            label: 'Prestação',
            data: totalpago,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          },
          {
            label: 'Juros',
            data: juros,
            fill: false,
            borderColor: 'rgb(255, 0, 0)',
            tension: 0.1
          },

          
        ]
        },
        options: {}
      });
    });




  


   
  </script>
  
  <div >

    <div>
      <div class="form-control w-full max-w-xs">
        <!-- valor financiado -->
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">
          <span class="label-text">Valor financiado</span>          
        </label>
        <input type="text" placeholder="Type here" class="input input-bordered input-xs w-full max-w-xs" bind:value={CR} on:input={updateChartData}/> 
        <!-- número de meses-->
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">
          <span class="label-text">Número de meses</span>          
        </label>
        <input type="text" placeholder="Type here" class="input input-bordered input-xs w-full max-w-xs" bind:value={MesR} on:input={updateChartData}/>
        <!-- taxa de juros mensal-->
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">
          <span class="label-text">Taxa de juros mensal (Ex: 0.0159 a.m)</span>          
        </label>
        <input type="text" placeholder="Type here" class="input input-bordered input-xs w-full max-w-xs" bind:value={iR} on:input={updateChartData} />
      </div>
      <br>
      
    </div>

    <div >
      <canvas id="myChart2" ></canvas>  
  </div> 
    <div >
        <table class="table table-compact w-full">
            <thead>
                
              <tr  class="hover">
                <th>Mês</th>
                <th>Saldo Devedor</th>
                <th>Amortização</th>
                <th>Juros</th>
                <th>Total Pago</th>
              </tr>

            </thead>
            <tbody>
              {#each seq as item, i}
                <tr  class="hover">
                  <td>{i}</td>
                  <td>R$ {SaldoDevedor[i].toFixed(2)}</td>
                  <td>R$ {Amort.toFixed(2)}</td>
                  <td>R$ {juros[i].toFixed(2)}</td>
                  <td>R$ {totalpago[i].toFixed(2)}</td>
                </tr>
              {/each}
            </tbody>
          </table>     
          
    </div>

      
  </div>


