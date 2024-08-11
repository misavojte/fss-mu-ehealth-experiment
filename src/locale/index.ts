import { init, register } from 'svelte-i18n';

const LOCALE = 'cs';

register('cs', () => import('./cs.json'));

export const initLocale = () => {
	init({
		fallbackLocale: LOCALE,
		initialLocale: LOCALE
	});
};
