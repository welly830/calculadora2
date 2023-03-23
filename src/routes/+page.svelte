<script>
    import Contador from "$lib/Contador.svelte";
  import Declaracao from "$lib/Declaracao.svelte";
  import EachBlocks from "$lib/EachBlocks.svelte";
  import Grafico from "$lib/graficos/Grafico.svelte";
  import Graficodois from "$lib/graficos/Graficodois.svelte";
  import Graficotres from "$lib/graficos/Graficotres.svelte";

  import TextInputs from "$lib/TextInputs.svelte";
</script>

<div data-theme="cupcake" class = " lg:container lg:mx-auto px-4 py-4  ">



  <h1 class="bg-indigo-100 text-2xl font-medium text-center rounded-md shadow-2xl">Meu Site</h1>


<div data-theme="light" class=" container max-w-screen-lg mx-auto flex ">
  <div data-theme="light" class=" container max-w-screen-sm mx-auto  ">
    <p>fasdfasdf</p>
  </div>
  <div data-theme="light" class=" container max-w-screen-sm mx-auto  ">
    <Graficodois/>
    
    
  </div>

</div>

<div data-theme="light" class=" container max-w-screen-sm mx-auto  ">
    
    
  <Graficotres/>
</div>




<br>

<Contador/>

<br>
<Declaracao/>
<br>
<TextInputs/>
<br>
<EachBlocks/>










</div>