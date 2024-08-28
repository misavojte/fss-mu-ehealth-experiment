<script lang="ts">
	export let opinionCount: number = 0;

	export let textColor: string = '#404040';

	$: opinionCountText = (() => {
		if (opinionCount === 1) {
			return `${opinionCount} názor`;
		} else if (opinionCount >= 2 && opinionCount <= 4) {
			return `${opinionCount} názory`;
		} else {
			return `${opinionCount} názorů`;
		}
	})();
</script>

<div class="fle" style="color: {textColor};">
	{opinionCountText}
</div>
