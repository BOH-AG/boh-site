<script>
    import Link from './linkbutton.svelte';
    export let page;
    let w = 0;
</script>

<svelte:window bind:innerWidth={w}/>

<div class="head-main">
    <a href="/">
        {#if w>600}
            <img src="./new-boh-logo.svg" alt="Logo" class="logo">
        {:else}
            <img src="./new-boh-emblem.svg" alt="Logo" style="width: 10vw">
        {/if}
    </a>
    <div class="head-links">
        <Link url='/' text='Home'/>
        <Link url='/' text='What we do'/>
        <Link url='/' text='About'/>
        <Link url='/' text='Contact'/>
    </div>
</div>

<style>

.head-main {
    display: flex;
}

.head-links {
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: center;
    gap: 3vw;
    width: 100em
}

.logo {
    width: 15vw;
}
</style>