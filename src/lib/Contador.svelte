<script>
    let count = 0;

    function somarClick(){
    count += 1;}


</script>

<button on:click={somarClick} class="btn btn-outline btn btn-xs ">
    Cliques {count}
</button>