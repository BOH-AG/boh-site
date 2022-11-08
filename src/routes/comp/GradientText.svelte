<script>
  export let text;
</script>

<span class="gradienttext">{text}</span>

<style>

.gradienttext {
  background-image: linear-gradient(90deg, #e82312, #6320ee, #e82312);
  background-size: 200%;
  padding: 3px;
  border-radius: 7px;
  animation: gradient 3s linear infinite;
  text-shadow: 0.1ch 0.1ch #000000;
  text-align: center;
}

@keyframes gradient {
  from {
    background-position: 0% center;
  }
  to {
    background-position: -200% center;
  }
}

</style>