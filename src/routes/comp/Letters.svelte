<script>
	import { spring } from 'svelte/motion';
	import { pannable } from './pannable';
	export let char = "";

	const coords = spring({ x: 0, y: 0 }, {
		stiffness: 0.2,
		damping: 0.4
	});

	function handlePanStart() {
		coords.stiffness = coords.damping = 1;
	}

	function handlePanMove(event) {
		coords.update($coords => ({
			x: $coords.x + event.detail.dx,
			y: $coords.y + event.detail.dy
		}));
	}

	function handlePanEnd(event) {
		coords.stiffness = 0.2;
		coords.damping = 0.15;
		coords.set({ x: 0, y: 0 });
	}
</script>

<div class="box"
	use:pannable
	on:panstart={handlePanStart}
	on:panmove={handlePanMove}
	on:panend={handlePanEnd}
	style="transform:
		translate({$coords.x}px,{$coords.y}px)
		rotate({$coords.x * 0.2}deg)"
>
	<slot/>
</div>

<style>
	.box {
		--width: auto;
		--height: 3em;
		width: var(--width);
		height: var(--height);
		left: calc(50% - var(--width) / 2);
		top: calc(50% - var(--height) / 2);
		border-radius: 4px;
		cursor: move;
	}
	h1 {
		margin: 0;
		-webkit-touch-callout: none; /* iOS Safari */
    	-webkit-user-select: none; /* Safari */
     	-khtml-user-select: none; /* Konqueror HTML */
       	-moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
}

</style>