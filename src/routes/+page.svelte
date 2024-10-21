<script>
	import App from '$lib/components/App.svelte';
	import { base } from '$app/paths';

	import { setLocale } from '../i18n/i18n-svelte';
	import { loadLocale } from '../i18n/i18n-util.sync';

	import { ConnectLoggerIDB } from '$lib/services/ConnectLoggerIDB';
	import { GazeSaverIDB } from '$lib/services/GazeSaverIDB';
	import { TimestampQuestionServiceIDB } from '$lib/services/TimestampQuestionServiceIDB';
	import { DoctorManagerBase } from '$lib/services/DoctorManagerBase';

	const sessionId = new Date().getTime() + '-' + Math.floor(1000 + Math.random() * 9000);
	const questionsService = new TimestampQuestionServiceIDB(sessionId);
	const connectLogger = new ConnectLoggerIDB(sessionId);
	const gazeSaver = new GazeSaverIDB(sessionId);
	const doctorManager = new DoctorManagerBase();

	loadLocale('cs');
	setLocale('cs');
</script>

<App
	pictureBase={`${base}/stimuli/`}
	{questionsService}
	{connectLogger}
	{gazeSaver}
	{doctorManager}
/>
