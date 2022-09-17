<script>
  import Dialog, { Title, Content, Actions } from '@smui/dialog';
  import Button, { Label } from '@smui/button';

  let open = false;
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<h1>Boh-AG Homepage demo</h1>

<Button on:click={() => (open = true)} color="primary" variant="outlined">
  <Label>Click for among us balls in 3d!!1!!!1!1!!!11</Label>
</Button>


<Dialog
  bind:open
  aria-labelledby="simple-title"
  aria-describedby="simple-content"
>
  <Title id="simple-title">warning!!</Title>
  <Content id="simple-content">allow &nbsp;
    <img src="/assets/ca.gif" alt="d" style="width: 70px">
    &nbsp; access to your house?</Content>
  <Actions>
    <Button style="margin:auto;">
      <Label>Yes</Label>
    </Button>
    <Button style="margin:auto;">
      <Label>Yes</Label>
    </Button>
  </Actions>
</Dialog>

<br>
<Button color="secondary" variant="raised" style="margin-top:2em;">
  <Label>aaaa</Label>
</Button>
<br>
<Button color="secondary" variant="outlined" style="margin-top:2em;">
  <Label>aaaa</Label>
</Button>


<style>
  
</style>