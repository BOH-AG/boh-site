<script>
  export let url;
  export let text;
  let w;
  let h;
  $: cssVarStyles = '--width:${w};--height:${h};';
</script>

<button class="link border">
    <h1 bind:clientHeight={h} bind:clientWidth={w}>
      <a href={url}>{text}</a>
    </h1>
</button>

<style>
* {
  box-sizing: border-box;
  margin: 0; padding: 0;
}

a {
  color: #eef4ed;
  text-decoration: none;
  white-space: nowrap;
}

.link {
  position: relative;
  font-family: 'Raleway', sans-serif;
  width: auto; height: auto;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.link h1 {         
  position: relative;
  display: inline-block;
  color: #eef4ed;
  font-family: 'Raleway', sans-serif;
  font-size: clamp(10px, 2.5vw, 30px);
  width: 100%;
  padding: clamp(8px, 0.65vw, 12px) clamp(10px, 1vw, 15px);
  transition: 0.3s;
}

.link.border::before {
  position: absolute;
  content: "";
  transition: 300ms;
  width: 20px;
  height: 10%;
  border-left: 2px solid #ef2917;
  border-top: 2px solid #ef2917;
}

.link.border::after {
  position: absolute;
  content: "";
  transition: 300ms;
  width: 20px;
  height: 10%;
  bottom: 0;
  right: 0;
  border-right: 2px solid #ef2917;
  border-bottom: 2px solid #ef2917;
}

.link.border:hover::before, .link.border:hover::after {
  position: absolute;
  content: "";
  width: calc(100% - 10px);
  height: calc(100% - 10px);
}
</style>