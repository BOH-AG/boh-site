<script>
    import dayjs from "dayjs";
    import {records, relativeTime, fixDate, percentify} from './comp/timeFunctions.js';
    import Switch from '@smui/switch';
    import FormField from '@smui/form-field';
    import {onMount} from 'svelte';

    let s;
    let checked = false;
    let time;
    let timeString = "";


    window.post = function(url, data) {
        return fetch(url, {method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)});
    }

    function updateTimeString() {
        timeString = relativeTime(time)
    }

    function setup(t) {
        time = t;
        updateTimeString();
        setInterval(updateTimeString, 1000);
        return 0;
    }

    async function doTheThing(e) {
        console.log("1")
        if (checked) {
            await post("https://db.theboh.de/api/collections/temp/records", {run: checked})
        } else {
            await post("https://db.theboh.de/api/collections/temp/records", {run: checked})
        }
        location.reload();
    }

    onMount(async () => {
        const result = await fetch("https://db.theboh.de/api/collections/temp/records?sort=-created")
                        .then(response => response.json());
        checked = result.items[0].run
        console.log(dayjs().diff(dayjs(result.items[0].created), 'seconds'))
    })

</script>

<main style="padding: 0; margin: none">
    <div class="outside">
        <div class="centered">
            {#await records("temp", "?sort=-created")}
                &nbsp;
            {:then data}
                <FormField style="margin: 2em; height: 5em">
                    <Switch bind:checked={checked} on:SMUISwitch:change={(e) => (doTheThing(e))} color="primary"/>
                    <h1 slot="label">Bewässerung läuft {#if checked}😊{:else}nicht 😢{/if}</h1>
                </FormField>
                <br id={setup(data.items[0].created)}>
                <p style="margin-bottom: 0;">zuletzt geändert {timeString}</p>
                <h6 style="margin-top: 1em; color:#ffffff66">( {dayjs(data.items[0].created).format('DD.MM - HH:mm:ss')} )</h6>
            {/await}
        </div>    
    </div>
</main>


<style>
    .outside {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
    }

    .centered { 
        background: #4c3266;
        border-radius: 2em;
        margin: 0;
    }

    h1 {
        line-height: 1.2em;
    }
</style>