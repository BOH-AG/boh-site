<script>
    export let height = 0;
    export let delay = 0;
</script>




<img class="wave{delay}" src="./assets/wave.svg" alt="svg" style="border-bottom: #2541B2 solid {height-0.5}em;">


<style>
    img {
        width: 18em;
        height: 1.125em;
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