import type { BaseTranslation } from '../i18n-types';

const cs = {
	loading: 'Načítání',
	pleaseWait: 'Prosím, počkejte na načtení všech dat',
	end: {
		title: 'Děkujeme za Vaši účast!',
		text: 'Jste na konci testování. Děkujeme, že jste si našli čas a pomohli nám s testováním.',
		button: 'Ukončit testování'
	},
	intermezzo: {
		title: 'Ostré testování',
		button: 'Pokračovat',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt aliquam. Nullam nec purus nec nunc tincidunt aliquam.'
	},
	footerText: 'Aplikace je součástí výzkumu na Fakultě sociálních studií Masarykovy univerzity.',
	question: {
		battery: {
			back: 'Předchozí sekce',
			next: 'Přeskočit na další sekci'
		},
		1: {
			heading: 'Vítejte v eHealth Experimentu',
			confirm: 'Pokračovat',
			paragraphs: {
				1: 'Nyní uvidíte prostředí, které se podobá stránkám na hodnocení lékařů. Zajímá nás, jak se v tomto prostředí lidé pohybují, když si vybírají praktického lékaře. Před každým úkolem si prosím důkladně přečtěte instrukci.'
			}
		},
		2: {
			heading: 'Co budete dělat?',
			confirm: 'Pokračovat',
			paragraphs: {
				1: 'Představte si, že jste se právě přestěhovali do nového města. Ráno po probuzení jste si uvědomili, že se vůbec necítíte dobře a potřebovali byste vyhledat lékaře. V novém městě jste si ale ještě nenašli svého praktika a nemáte tu ještě známé, které byste požádali o doporučení. Rozhodli jste se tedy vyhledat si nejbližší praktické lékaře ve svém okolí na internetu.'
			}
		},
		3: {
			heading: 'Zadejte párovací ID pro experiemnt.',
			confirm: 'Potvrdit'
		},
		4: {
			heading: 'Vcházíte do první části experimentu',
			confirm: 'Začít zácvik',
			paragraphs: {
				1: 'Nyní uvidíte vizitky jednotlivých lékařů v okolí, kteří by Vás mohli zajímat. Prohlédněte si je a pak odpovězte na otázku, která se po chvíli zobrazí. Nejdřív si to na několika vizitkách vyzkoušíte.'
			}
		},
		'l1-intermezzo-1': {
			heading: 'Nyní Vás čeká ostrý test první části',
			confirm: 'Spustit ostrý test',
			paragraphs: {
				1: 'Ostrý test bude probíhat stejně jako zácvik. Prohlédněte si vizitky lékařů a poté odpovězte na otázku, která se po chvilce zobrazí.'
			}
		},
		'l2-instruction-1': {
			heading: 'Vcházíte do druhé části experimentu',
			confirm: 'Spustit zácvičnou úlohu',
			paragraphs: {
				1: 'Představte si, že Vás někteří z lékařů zaujali a chcete se o nich dozvědět víc. V této části uvidíte jejich detailnější profily včetně komentářů, které napsali jejich pacienti. Opět si je prohlédněte a odpovězte na otázku, kterou uvidíte. Nejdřív si to na několika profilech vyzkoušíte.'
			}
		},
		'l2-intermezzo-1': {
			heading: 'Nyní Vás čeká ostrý test druhé části',
			confirm: 'Spustit ostrý test',
			paragraphs: {
				1: 'Ostrý test bude probíhat stejně jako zácvik. Představte si, že Vás někteří z lékařů zaujali a chcete se o nich dozvědět víc. V této části uvidíte jejich detailnější profily včetně komentářů, které napsali jejich pacienti. Opět si je prohlédněte a odpovězte na otázku, kterou uvidíte.'
			}
		},
		'l3-instruction-1': {
			heading: 'Vcházíte do třetí části experimentu',
			confirm: 'Spustit třetí část',
			paragraphs: {
				1: 'Nyní by nás zajímalo, jak jste při rozhodování postupovali. Zobrazíme Vám několik profilů, které už znáte. Znova si je prohlédněte a popište nám, co Vás vedlo k rozhodnutí, vybrat nebo nevybrat si je za svého praktika. Nejprve Vám ukážeme ty, které jste hodnotil/a nejlépe, a pak ty, které byste si vybral/a nejméně rád/a.',
				2: 'Abychom Vám dali čas na přemýšlení, budeme Vaše odpovědi zaznamenávat zvukově. Jakmile tedy uvidíte daný profil, můžete začít své myšlenky říkat nahlas. Až budete s odpovědí hotovi, zmáčkněte tlačítko „Již jsem řekl/a vše. Pokračovat.“'
			}
		}
	},
	l3Instructions: {
		good: 'Toto je jeden z lékařů, které byste si nejochotněji zvolil/a za svého praktika. Prohlédněte si, prosím, znova jeho profil a popište, co Vás k tomuto rozhodnutí vedlo.',
		bad: 'Toto je jeden z lékařů, které byste si za svého praktika zvolil/a nejméně ochotně. Prohlédněte si, prosím, znova jeho profil a popište, co Vás k tomuto rozhodnutí vedlo.',
		button: 'Již jsem řekl/a vše. Pokračovat'
	}
} satisfies BaseTranslation;

export default cs;
