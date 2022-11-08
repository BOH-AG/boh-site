<script>
  import Tab, { Icon, Label } from '@smui/tab';
  import TabBar from '@smui/tab-bar';
  import {router} from 'tinro';

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

  // make sure correct tab is active on new page load
  const route = $router.path;
  let active = tabs[0];

  for(let i=0; i<tabs.length; i++) {
    if (tabs[i].anchor == route) {
      active = tabs[i];
    }
  }
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

