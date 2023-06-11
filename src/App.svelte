<script>
  import {Route} from 'tinro';
  import MediaQuery from './routes/comp/MediaQuery.svelte';
  import Nav from './routes/comp/Nav.svelte';
  import Home from './routes/Home.svelte';
  import Colors from './routes/Colors.svelte';
  import Fontweight from './routes/Fontweight.svelte';
  import Landing from './routes/Landing.svelte';
  import BeetPanel from './routes/BeetPanel.svelte';
  import TempSolution from './routes/TempSolution.svelte';
  import PocketBase from 'pocketbase';
  import Beet from './routes/Beet.svelte';
</script>

<main>
  <MediaQuery query="(max-width: 500px)" let:matches>
    {#if matches}

    <Route path="/">
      <TempSolution/>
    </Route>
    <Route path="/beet"><BeetPanel/></Route>
    <Route path="/a"><Beet/></Route>
    {/if}
  </MediaQuery>


  <MediaQuery query="(min-width: 501px)" let:matches>
    {#if matches}
      <!--
      <div class="navbar">
        <div class="logo">
          <img src="/assets/boh-logo.png" alt="logo">
        </div>
        <Nav />
      </div>

      <Route path="/colors"><Colors/></Route>

      <Route path="/fontweight"><Fontweight/></Route>
      -->
      <Route path="/">
        <TempSolution/>
      </Route>
      
      <Route path="/beet"><BeetPanel/></Route>
      <Route path="/a"><Beet/></Route>
    {/if}
  </MediaQuery>

</main>

<style>
</style>