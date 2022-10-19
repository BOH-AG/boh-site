<script>
  import List, { Item, Text, Subheader } from '@smui/list';
  import Button, { Group, Label } from '@smui/button';
</script>

<svelte:head>
  <title>Colors</title>
</svelte:head>

<h1>Colors</h1>

<div class="cont">
  <div class="side">
    <h2>Primary</h2>

    <Group variant="raised" style="width:25vw;margin:auto">
      <Button variant="raised" style="width:50%;--mdc-theme-primary: #e82312;">
        <Label>#e82312</Label>
      </Button>
      <Button variant="raised" style="width:50%;--mdc-theme-primary: #e82312;--mdc-theme-on-primary: #eaeaea;">
        <Label>#e82312</Label>
      </Button>
    </Group>
    <hr>
    <Group variant="raised" style="width:25vw;margin:auto">
      <Button variant="raised" style="width:50%;--mdc-theme-primary: #C42021;">
        <Label>#C42021</Label>
      </Button>
      <Button variant="raised" style="width:50%;--mdc-theme-primary: #C42021;--mdc-theme-on-primary: #eaeaea;">
        <Label>#C42021</Label>
      </Button>
    </Group>
    <hr>
    <Group variant="raised" style="width:25vw;margin:auto">
      <Button variant="raised" style="width:50%;--mdc-theme-primary: #ff3e00;">
        <Label>#ff3e00</Label>
      </Button>
      <Button variant="raised" style="width:50%;--mdc-theme-primary: #ff3e00;--mdc-theme-on-primary: #eaeaea;">
        <Label>#ff3e00</Label>
      </Button>
    </Group>
    <hr>
    <Group variant="raised" style="width:25vw;margin:auto">
      <Button variant="raised" style="width:50%;--mdc-theme-primary: #D7263D;">
        <Label>#D7263D</Label>
      </Button>
      <Button variant="raised" style="width:50%;--mdc-theme-primary: #D7263D;--mdc-theme-on-primary: #eaeaea;">
        <Label>#D7263D</Label>
      </Button>
    </Group>
    <hr>
    <Group variant="raised" style="width:25vw;margin:auto">
      <Button variant="raised" style="width:50%;--mdc-theme-primary: #CC2936;">
        <Label>#CC2936</Label>
      </Button>
      <Button variant="raised" style="width:50%;--mdc-theme-primary: #CC2936;--mdc-theme-on-primary: #eaeaea;">
        <Label>#CC2936</Label>
      </Button>
    </Group>
  </div>

  <div class="side">
    <h2>Secondary</h2>
    <Group variant="raised" style="width:25vw;margin:auto">
      <Button variant="raised" style="width:50%;--mdc-theme-primary: #6320ee;">
        <Label>#6320ee</Label>
      </Button>
      <Button variant="raised" style="width:50%;--mdc-theme-primary: #6320ee;--mdc-theme-on-primary: #eaeaea;">
        <Label>#6320ee</Label>
      </Button>
    </Group>
    <hr>
    <Group variant="raised" style="width:25vw;margin:auto">
      <Button variant="raised" style="width:50%;--mdc-theme-primary: #6494AA;">
        <Label>#6494AA</Label>
      </Button>
      <Button variant="raised" style="width:50%;--mdc-theme-primary: #6494AA;--mdc-theme-on-primary: #eaeaea;">
        <Label>#6494AA</Label>
      </Button>
    </Group>
    <hr>
    <Group variant="raised" style="width:25vw;margin:auto">
      <Button variant="raised" style="width:50%;--mdc-theme-primary: #3F88C5;">
        <Label>#3F88C5</Label>
      </Button>
      <Button variant="raised" style="width:50%;--mdc-theme-primary: #3F88C5;--mdc-theme-on-primary: #eaeaea;">
        <Label>#3F88C5</Label>
      </Button>
    </Group>
    <hr>
    <Group variant="raised" style="width:25vw;margin:auto">
      <Button variant="raised" style="width:50%;--mdc-theme-primary: #693668;">
        <Label>#693668</Label>
      </Button>
      <Button variant="raised" style="width:50%;--mdc-theme-primary: #693668;--mdc-theme-on-primary: #eaeaea;">
        <Label>#693668</Label>
      </Button>
    </Group>
    <hr>
    <Group variant="raised" style="width:25vw;margin:auto">
      <Button variant="raised" style="width:50%;--mdc-theme-primary: #3CDBD3;">
        <Label>#3CDBD3</Label>
      </Button>
      <Button variant="raised" style="width:50%;--mdc-theme-primary: #3CDBD3;--mdc-theme-on-primary: #eaeaea;">
        <Label>#3CDBD3</Label>
      </Button>
    </Group>

  </div>

  
</div>

<div>
  
</div>

<style>
  .cont {
    width: 70vw;
    margin: auto;
    display: flex;
  }
  .side {
    width: 50%;
    display: flex;
    flex-direction: column;
  }
  hr {
    height: 10px;
    opacity: 0%;
    margin: 0;
  }
</style>