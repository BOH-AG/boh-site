<script>
  import {Route} from 'tinro';
  import MediaQuery from './routes/comp/MediaQuery.svelte';
  import Nav from './routes/comp/Nav.svelte';
  import Home from './routes/Home.svelte';
  import Colors from './routes/Colors.svelte';
  import Fontweight from './routes/Fontweight.svelte';
  import Landing from './routes/Landing.svelte';
  import BeetPanel from './routes/BeetPanel.svelte';
</script>

<main>
  <MediaQuery query="(max-width: 500px)" let:matches>
    {#if matches}

      <h1>fuck off mobile user</h1>
      
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
      <Route path="/"><Home/></Route>
      
      <Route path="/beet"><BeetPanel/></Route>

    {/if}
  </MediaQuery>

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

  .navbar {
    display: flex;
  }
  
  .logo {
    width: 20vw;
  }
  .logo img {
    height: 4em;
  }
</style>