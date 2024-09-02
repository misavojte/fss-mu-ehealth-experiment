<script>
	/**
	 * fillRate of the star
	 */
	export let fillRate = 0.5;

	export let starBackgroundColor = '#d4d4d4';

	export let starFillColor = '#eab308';

	export let starOutlineColor = 'transparent';

	export let starOutlineWidth = '0px';
</script>

<svg xmlns="http://www.w3.org/2000/svg" width="32" height="31" viewBox="0 0 51 48">
	<!-- Create a clipPath to control the fill percentage -->
	<clipPath id={`clip-${fillRate}`}>
		<rect x="0" y="0" width={51 * fillRate} height="48" />
	</clipPath>

	<!-- Background star (unfilled part) -->
	<path
		d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
		fill={starBackgroundColor}
		stroke={starOutlineColor}
		stroke-width={starOutlineWidth}
	></path>

	<!-- Filled star (the part that is filled) -->
	<path
		d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
		fill={starFillColor}
		clip-path={`url(#clip-${fillRate})`}
	/>
</svg>
