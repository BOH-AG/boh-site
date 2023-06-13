<script>
  import {Route} from 'tinro';
  import MediaQuery from './routes/comp/MediaQuery.svelte';
  import Beet from './routes/Beet.svelte';
</script>

<main>
  <MediaQuery query="(max-width: 500px)" let:matches>
    {#if matches}
    <Route path="/"><Beet/></Route>

    <Route path="/beet"><Beet/></Route>
    {/if}
  </MediaQuery>


  <MediaQuery query="(min-width: 501px)" let:matches>
    {#if matches}
      <Route path="/"><Beet/></Route>

      <Route path="/beet"><Beet/></Route>
    {/if}
  </MediaQuery>

</main>

<style>
</style>