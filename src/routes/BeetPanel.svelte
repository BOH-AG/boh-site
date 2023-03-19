<script>
    import dayjs from 'dayjs';
    import WaterBar from './comp/WaterBar.svelte';

    
    function records(id, param = "") {
        return fetch("https://db.theboh.de/api/collections/"+ id +"/records/" + param)
                .then(response => response.json());
    }


    function fixDate(date) {
        return date.replace(" ", "T").replace(".", "").slice(0, -4);
    }

    let range = [/*%min*/10, 60/*%max*/];
    function percentify(val) {
        return (val-range[0]+0.1)/(range[1]*0.01);
    }

    function relativeTime(date) { // pass date as string
        let delta = dayjs().diff(dayjs(date), "seconds");

        if (delta<45) {
            return "vor "+delta+" Sekunden";
        } else if (delta<90) {
            return "vor einer Minute";
        } else if (delta<2700) {
            return "vor "+ Math.round(delta/60) + " Minuten";
        } else if (delta<5400) {
            return "vor einer Stunde";
        } else if (delta<79200) {
            return "vor "+ Math.round(delta/3600) +" Stunden";
        } else if (delta<129600) {
            return "vor einem Tag";
        } else if (delta<2246400) {
            return "vor "+ Math.round(delta/86400) +" Tage";
        } else if (delta<3974400) {
            return "vor einem Monat";
        } else /*if (delta<28512000)*/ {
            return "vor "+ Math.round(delta/2592000) +" Monate";
        }
    }

    
</script>
{#await records("beete")}
    <div class="chipset">
        <div class="chip">&nbsp;</div>
    </div>
{:then data}
    <div class="chipset">
        {#each data.items as record}
            <div class="chip">
                {#await records("beetDaten", "?filter=(beet='"+ record.id +"')&sort=-created")}
                    🦃
                {:then beetRecords} 
                    <h1>Hochbeet #{record.num}</h1>
                    <div class="flex1">
                        <div style="width: 40%">
                            <h3>Feuchtigkeit in %</h3>
                            <div class="flex2">
                                {#each [
                                    beetRecords.items[0].moisture1,
                                    beetRecords.items[0].moisture2,
                                    beetRecords.items[0].moisture3
                                    ] as i, ii}
                                        <WaterBar percent={[i, percentify(i)]} height={8*(percentify(i)*0.01)} delay={ii}/>
                                {/each}
                            </div>
                        </div>
                        <img class="graph" src="https://www.softwaretestinghelp.com/wp-content/qa/uploads/2021/12/line-graph-1-what-is.jpg" alt="Graph">

                    </div> <!--                     \/ this link is url encoded -->
                    {#await records("beetDaten", "?filter=%28beet%3D%27"+ record.id +"%27%26%26wasWatered%3Dtrue%29&sort=-created")}
                        <p>&nbsp;</p>
                    {:then time} 
                        <p>zuletzt {relativeTime(fixDate(time.items[0].created))} bewässert</p>
                        <p>{fixDate(time.items[0].created)}</p>
                    {/await}
                {/await}
            </div>
        {/each}
    </div>
{/await}

<style>
    .chipset {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        row-gap: 2em;
    }
    .chip {
        border-radius: 1em;
        flex-basis: auto;
        min-width: 30em;
        height: 23em;
        background: #191c2977;
        border: 0.2em solid #00000000;
    }
    .bar {
        margin: 0;
        padding: 0;
        border: 2px solid #eaeaea;
        width: 3em;
        height: 8em;
        overflow: hidden;
        border-radius: 0.5em;
        display: flex;
        align-items: flex-end;
    }
    .flex1 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 0 1em;
    }
    .flex1 h3 {
        margin-bottom: 0.5em;
    }
    .flex1 .graph {
        width: 10em;
        height: 7em;
    }
    .flex2 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>