<script>
    let count = 0;

    function somarClick(){
    count += 1;}


</script>

<button on:click={somarClick} >
    Cliques {count}
</button>