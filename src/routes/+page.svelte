<script>
	import App from '$lib/components/App.svelte';
	import { base } from '$app/paths';

	import { setLocale } from '../i18n/i18n-svelte';
	import { loadLocale } from '../i18n/i18n-util.sync';

	loadLocale('cs');
	setLocale('cs');
</script>

<App pictureBase={`${base}/stimuli/`} />
