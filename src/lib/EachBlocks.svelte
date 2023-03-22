<script>
  import { sequence } from "@sveltejs/kit/hooks";


    let lista = ['item 1', 'item 2', 'item 3', 'item 4'];
    /**
   * @type {number[]}
   */
    let seq = [];

    for (let index = 0; index < 3; index++) {
        seq.push(index);        
    }


  </script>

  <p>{seq}</p>
  
  <ul>
    {#each lista as item}
      <li>{item}</li>
    {/each}
  </ul>

  <ul>
    {#each seq as seqq}
         <li>{seqq}</li>
    {/each}
  </ul>
  