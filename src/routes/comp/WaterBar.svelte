<script>
    export let percent;
    export let height = 0;
    export let delay = 0;
    export let bouncy = false;

    import Letters from "./Letters.svelte";

    function getColor(num) {
        if (num<33) {
            return "#dd0426";
        } else if (num<66) {
            return "#c2e812";
        } else {
            return "#32e875";
        }
    }
</script>



<div class=bar>
    <img class="wave{delay}" src="./assets/wave.svg" alt="svg" style="border-bottom: #2541B2 solid {height-0.5}em;">
    {#if bouncy}
        <Letters>
            <span style="color: {getColor(percent[1])}">
                {percent[0]}
            </span>
        </Letters>
    {:else}
        <span style="color: {getColor(percent[1])}">
            {percent[0]}
        </span>
    {/if}
    
        
</div>



<style>
    span {
        z-index: 10;
        margin: 0;
        text-align: center;
        color: #eaeaea;
        font-size: xx-large;
        color: #d2d600;
    }

    .bar {
        margin: 0 0.2em 0 0.2em;
        padding: 0;
        border: 2px solid #eaeaea;
        width: 3em;
        height: 8em;
        overflow: hidden;
        border-radius: 0.5em;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        width: 18em;
        height: 1.125em;
        position: absolute;
        bottom: 0;
        left: 0;
    }

    .wave0 {
        animation: wave0 3s linear infinite;
    }
    .wave1 {
        animation: wave1 3s linear infinite;
    }
    .wave2 {
        animation: wave2 3s linear infinite;
    }

    @keyframes wave0 {
        0% {
            transform: translateX(0em);
        } 100% {
            transform: translateX(-9em);
        }
    }

    @keyframes wave1 {
        0% {
            transform: translateX(-3em);
        } 100% {
            transform: translateX(-12em);
        }
    }

    @keyframes wave2 {
        0% {
            transform: translateX(-6em);
        } 100% {
            transform: translateX(-15em);
        }
    }
    
</style>