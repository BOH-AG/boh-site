<script>
    import dayjs from 'dayjs';
    import PocketBase from 'pocketbase';
    import WaterBar from './comp/WaterBar.svelte';
    import Weather from './comp/Weather.svelte';
    import Dialog, { Content } from '@smui/dialog';
    import IconButton from '@smui/icon-button';
    import {records, relativeTime, fixDate, percentify} from './comp/timeFunctions.js';
    import {onMount} from 'svelte';

    const pb = new PocketBase('https://db.theboh.de');

    let open = false; // warning menu open variable
    let warningMenuDate = "";

    function openWarningMenu(date) {
        warningMenuDate = date;
        open = true;
    }

    let unique = {}  // reloads relative time (so it updates every second)
    function reloadComp() {
        unique = {}
    }
    onMount(() => {
        setInterval(reloadComp, 1000);
    })

</script>
    <div class="chips">
        {#await pb.collection("beete").getFullList({sort: "num"})}
            <br>
        {:then beete} 
            {#each beete as beet, x}
                <div class="chip">
                    {#await pb.collection("beetDaten").getList(1, 1, {filter: "(beet='" + beet.id + "')", sort: "-created", "$autoCancel": false})}
                        <br>
                    {:then records}
                        <div class="b1">
                            <h2>Hochbeet {beet.num}</h2>
                            <ul>
                                
                            </ul>
                        </div>

                        <div class="b2">
                            <div class="bars-outer">
                                <h3>Feuchtigkeit %</h3>
                                <div class="bars-inner">
                                    {#each [records.items[0].moisture1, records.items[0].moisture2, records.items[0].moisture3] as i, ii}
                                        <WaterBar percent={[i, percentify(i)]} height={8*(percentify(i)*0.01)} delay={ii} bouncy={true}/>
                                    {/each}
                                </div>
                            </div>
                            <ul>
                                {#each beet.plants.split(",") as plant}
                                    <li>{plant}</li>
                                {/each}
                            </ul>
                        </div>

                        <div class="b3">
                            <div class="dates">
                                {#await pb.collection("beetDaten").getList(1, 1, {filter: "(beet='" + beet.id + "'&&wasWatered=true)", sort: "-created", "$autoCancel": false})}
                                    <br>
                                {:then wateringRecords}
                                    {#key unique}
                                        <p>zuletzt Bewässert {relativeTime(wateringRecords.items[0].created)}</p>
                                    {/key}
                                    <h6>({dayjs(wateringRecords.items[0].created).format('DD.MM - HH:mm:ss')})</h6>
                                {/await}
                            </div>
                            {#if dayjs().diff(dayjs(records.items[0].created), "hours") > 0}
                                <div class="info">
                                    <IconButton on:click={() => (openWarningMenu(records.items[0].created))} class="material-icons" style="color: #f11; padding: 0; margin-top: 0.5em">warning</IconButton>
                                </div>
                            {/if}
                        </div>
                    {/await}
                </div>
            {/each}
        {/await}
    </div>

    

    <Dialog bind:open aria-describedby="sheet-content">
        <Content id="sheet-content" style="border: 1px solid #f11; border-radius: 0.5em; z-index: 100; color: #eaeaea;">
            <IconButton on:click={() => (open = false)} class="material-icons" style="position: absolute; right: 0.3em; top: 0.3em;">close</IconButton>
            <h3>Outdated Info</h3>
            <p>
                Possible hardware failure as last update was {dayjs().diff(dayjs(warningMenuDate), "hours")} hours ago <span class="h6-ish">({dayjs(warningMenuDate).format('DD.MM - HH:mm:ss')})</span>
            </p>
        </Content>
    </Dialog>

<style>
    .chips {
        margin: 0 1em 0 1em;
        width: calc(100vw-2em);
        display: flex;
        justify-content: space-evenly;
        align-content: flex-start;
        flex-wrap: wrap;
    }
    .chip {
        width: calc(100%-2em);
        background-color: #ffffff07;
        padding: 1em;
        border-radius: 2em;
        margin: 0.5em 0;
        width: 25em;
    }
    .chip .b1 {
        display: flex;
        justify-content: space-between;
        border-bottom: 2px solid var(--main-bg);
    }
    .chip .b1 h2 {
        margin-bottom: 0.5em;
    }
    .chip .b1 ul {
        list-style-type: none;
        margin-right: 2em;
    }
    .chip .b2 {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
    }
    .chip .b2 h3 {
        text-align: center;
        margin-top: 0.5em;
    }
    .chip .b2 .bars-inner {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
    }
    .chip .b2 ul {
        list-style-type: none;
        padding: 0;
    }
    .chip .b2 li {
        border-left: 1px solid #ffffff50;
        padding: 0.2em 0 0.2em 1em;
    }
    .chip .b3 {
        text-align: center;
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
    }
    .chip .dates {
        flex-grow: 10;
    }
    .chip .b3 p {
        margin-bottom: 0.6em;
    }
    .chip .b3 h6 {
        margin: auto 0 0 auto;
        opacity: 75%;
    }
    .h6-ish {
        font-size: small;
        font-weight: bold;
        opacity: 75%;
    }
</style>