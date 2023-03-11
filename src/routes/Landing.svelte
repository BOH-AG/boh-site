<script>
  import GradientText from "./comp/GradientText.svelte";
  import {Parallax, ParallaxLayer} from 'svelte-parallax';
</script>

<div class="main">

  <Parallax sections=2.5>
    <ParallaxLayer
      offset=0.1 
      rate=1
      span=0.5 
      style="
        display: flex;
        flex-direction: row;
        flex-grow: 4;
        flex-basis: auto;
      "
    >
      <h1 class="c1h1">
        IT <GradientText text="experts"/> you can trust
      </h1>
      <img src="/assets/choke.jpg" style="margin: auto;" alt="">
    </ParallaxLayer>

    <ParallaxLayer
      offset=0.6 
      rate=2
      span=1
      style="
        display: flex;
        flex-direction: row;
        flex-basis: auto;
      "
    >
      <img src="/assets/hacker.jpg" style="margin: auto;" alt="">
      <h1 style="font-size: 5em; text-align: right; width: 50%; margin: auto;">
        Even though we might <GradientText text="steal"/> your data
      </h1>
    </ParallaxLayer>

    <ParallaxLayer
      offset=1 
      rate=1
      span=1
      style="
        display: flex;
        justify-content: flex-end;
      "
    >
      <h1 style="font-size: 5em; text-align: right; width: 50%; margin: auto; margin-right:0;">
        Your devices are in <GradientText text="safe"/> hands
      </h1>
    </ParallaxLayer>

    <ParallaxLayer
      offset=1 
      rate=2
      span=1
      style="
        display: flex;
        justify-content: flex-start;
      "
    >
      <img src="/assets/shootinglaptop.jpg" style="width:40%" alt="">
    </ParallaxLayer>
  </Parallax>

  <div class="c1">
    <h1>
      IT <GradientText text="experts"/> kfffkghfgjgj
    </h1>
  </div>
  <div class="c2">
    <h1>
      <GradientText text="weeee"/>eeee 
    </h1>
    <h2>
      aaaaaaaa <br>
      ddd<GradientText text="ddd"/>d
    </h2>
  </div>
</div>

<style>
  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    padding-top: 10vh;
    margin: 0;

  }
  .c1 {
    margin-right: 20%;
    margin-bottom: 50%;
  }
  .c1h1 {
    font-size: 5em;
    text-align: left;
  }

  .c2 {
    background-color: #E82312;
  }
  .c2 h1 {
    text-align: left;
  }
  .c2 h2{
    text-align: right;
  }

  .parallaximg {
    width: 100%;
    margin: 0;
  }

</style>