<script>
  import Button, { Label } from "@smui/button";
</script>

<svelte:head>
  <title>Font Weight</title>
</svelte:head>

<h1>Font Weight</h1>
<br>
<h2>Weight: 500</h2>
<div>
  <Button style="font-weight:500;">
    <Label>Lorem, ipsum dolor</Label>
  </Button>
  
  <Button variant="outlined" style="font-weight:500;">
    <Label>sit amet consectetur</Label>
  </Button>
  
  <Button variant="raised" style="font-weight:500;">
    <Label>adipisicing elit</Label>
  </Button>
</div>
<br>
<div>
  <Button color="secondary" style="font-weight:500;">
    <Label>Lorem, ipsum dolor</Label>
  </Button>
  
  <Button variant="outlined" color="secondary" style="font-weight:500;">
    <Label>sit amet consectetur</Label>
  </Button>
  
  <Button variant="raised" color="secondary" style="font-weight:500;">
    <Label>adipisicing elit</Label>
  </Button>
</div>

<h2>Weight: 600</h2>

<div>
  <Button style="font-weight:600;">
    <Label>Lorem, ipsum dolor</Label>
  </Button>
  
  <Button variant="outlined" style="font-weight:600;">
    <Label>sit amet consectetur</Label>
  </Button>
  
  <Button variant="raised" style="font-weight:600;">
    <Label>adipisicing elit</Label>
  </Button>
</div>
<br>
<div>
  <Button color="secondary" style="font-weight:600;">
    <Label>Lorem, ipsum dolor</Label>
  </Button>
  
  <Button variant="outlined" color="secondary" style="font-weight:600;">
    <Label>sit amet consectetur</Label>
  </Button>
  
  <Button variant="raised" color="secondary" style="font-weight:600;">
    <Label>adipisicing elit</Label>
  </Button>
</div>

