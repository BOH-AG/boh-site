<script>
  import Tab, { Icon, Label } from '@smui/tab';
  import TabBar from '@smui/tab-bar';

  let tabs = [
    {
      k: 1,
      icon: 'home',
      label: 'Home',
      anchor: '/',
    },
    {
      k: 2,
      icon: 'palette',
      label: 'Colors',
      anchor: '/colors',
    },
    {
      k: 3,
      icon: 'text_format',
      label: 'Font Weight',
      anchor: '/fontweight',
    },
  ];
  let active = tabs[0];
</script>

<nav>
  <TabBar {tabs} let:tab key={(tab) => tab.k} bind:active>
    <Tab
      {tab}
      stacked={true}
      indicatorSpanOnlyContent={true}
      tabIndicator$transition="fade"
      href={tab.anchor}
    >
      <Icon class="material-icons">{tab.icon}</Icon>
      <Label>{tab.label}</Label>
    </Tab>
  </TabBar>
</nav>

<style>
nav {
  width: 80vw;
}


</style>

