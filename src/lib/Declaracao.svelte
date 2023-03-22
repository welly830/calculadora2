<script>

    let count = 0;
    /**
   * @type {number[]}
   */
    let lista = [];

    // declarar variáveis reativas

    $: dobro = count * 2;
    $: triplo = count * 3;
    

    function somarclick(){
        count +=1;
    }



</script>

<button on:click={somarclick} >
    SomarCliques
</button>

<p>{count} * 2 = {dobro}</p>
<p>{count} * 3 = {triplo}</p>

{#if count%2==0}
     <p>Par</p>
{:else}
     <p>Ímpar</p>
{/if}
