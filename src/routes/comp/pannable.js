export function pannable(node) {
	let x;
	let y;

	function handleMousedown(event) {
		x = event.clientX;
		y = event.clientY;

		node.dispatchEvent(new CustomEvent('panstart', {
			detail: { x, y }
		}));

		window.addEventListener('pointermove', handleMousemove);
		window.addEventListener('pointerup', handleMouseup);
	}

	function handleMousemove(event) {
		const dx = event.clientX - x;
		const dy = event.clientY - y;
		x = event.clientX;
		y = event.clientY;

		node.dispatchEvent(new CustomEvent('panmove', {
			detail: { x, y, dx, dy }
		}));
	}

	function handleMouseup(event) {
		x = event.clientX;
		y = event.clientY;

		node.dispatchEvent(new CustomEvent('panend', {
			detail: { x, y }
		}));

		window.removeEventListener('pointermove', handleMousemove);
		window.removeEventListener('pointerup', handleMouseup);
	}

	node.addEventListener('pointerdown', handleMousedown);

	return {
		destroy() {
			node.removeEventListener('pointerdown', handleMousedown);
		}
	};
}