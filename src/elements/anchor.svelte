<script>
    export let url;
    export let text;
</script>

<a href={url}>{text}</a>

<style>
a {
  font-family: Inter, sans-serif;
  font-weight: 400;
  color: #eef4ed;
  text-decoration: underline;
  text-decoration-color: #2892d7;
  text-underline-offset: 2px;
  transition-duration: 300ms;
  transition-timing-function: ease;
}
a:hover {
  color: #2892d7;
  text-decoration-color: #2891d700;
}

</style>