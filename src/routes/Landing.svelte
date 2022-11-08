<script>
  import GradientText from "./comp/GradientText.svelte";
</script>

<div class="main">
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
    padding-top: 25vh;
    margin: 0;

  }
  .c1 {
    margin-right: 20%;
    margin-bottom: 50%;
  }
  .c1 h1 {
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