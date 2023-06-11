<script>
    import dayjs from 'dayjs';
    import PocketBase from 'pocketbase';
    import WaterBar from './comp/WaterBar.svelte';
    import Weather from './comp/Weather.svelte';
    import {records, relativeTime, fixDate, percentify} from './comp/timeFunctions.js';

    const pb = new PocketBase('https://db.theboh.de');
</script>

    <div class="chips">
        <div class="chip">
            <div class="b1">
                <h2>Hochbeet 1</h2>
                <ul>
                    
                </ul>
            </div>

            <div class="b2">
                <div class="bars-outer">
                    <h3>Feuchtigkeit %</h3>
                    <div class="bars-inner">
                        {#each [60, 40, 20] as i, ii}
                            <WaterBar percent={[i, percentify(i)]} height={8*(percentify(i)*0.01)} delay={ii}/>
                        {/each}
                    </div>
                </div>
                <ul>
                    <li>Erdbeeren</li>
                    <li>Kartoffeln</li>
                    <li>Plants</li>
                </ul>
            </div>
        </div>
    </div>


<style>
    .chips {
        margin: 0 1em 0 1em;
        width: calc(100vw-2em);
    }
    .chip {
        width: calc(100%-2em);
        background-color: #ffffff07;
        padding: 1em;
        border-radius: 2em;
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
</style>