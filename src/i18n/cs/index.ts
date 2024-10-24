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
	footerText: 'Blah blah blah',
	question: {
		battery: {
			back: 'Předchozí sekce',
			next: 'Přeskočit na další sekci'
		},
		1: {
			heading: 'Vítejte v eHealth Experimentu',
			confirm: 'Pokračovat',
			paragraphs: {
				1: 'We are simulating a typical digital environment where media multitasking is often required, helping us understand how well people can manage multiple tasks simultaneously. Please read the instructions carefully before proceeding to the practice and main trials.'
			}
		},
		2: {
			heading: 'Co budete dělat?',
			confirm: 'Pokračovat',
			paragraphs: {
				1: 'In this experiment, you will engage in three tasks simultaneously: pattern-matching, watching a documentary, and responding to memes on social media.'
			}
		},
		3: {
			heading: 'Zadejte párovací ID pro experiemnt.',
			confirm: 'Potvrdit'
		},
		4: {
			heading: 'Pattern Matching Task',
			confirm: 'Rozumím',
			paragraphs: {
				1: 'his is your primary task. You will be presented with a 3 × 3 matrix where eight of the nine cells contain abstract shapes, and one cell in the bottom right-hand corner is empty.',
				2: 'Your goal is to complete the matrix by deducing the missing shape from the four possible alternatives and selecting it with a mouse click. To find the correct shape, analyze the relationships between the shapes within the matrix, considering four dimensions: shape, color, size, and position.',
				3: 'There is no time limit for each response. The next trial will begin after the response is made. For each correct answer, you will earn three points.'
			}
		},
		'ap-1': {
			heading: 'Je Vám vše jasné?',
			options: {
				0: 'Ano, pokračovat na ostrý test',
				1: 'Ne, potřebuji zopakovat praxi'
			}
		},
		'l1-intermezzo-1': {
			heading: 'Nyní Vás čeká ostrý test první části',
			confirm: 'Spustit ostrý test',
			paragraphs: {
				1: 'V této části budete dělat XYZ. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
			}
		},
		'l2-instruction-1': {
			heading: 'Vcházíte do druhé části experimentu',
			confirm: 'Spustit zácvičnou úlohu',
			paragraphs: {
				1: 'V této části budete dělat XYZ. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt aliquam. Nullam nec purus nec nunc tincidunt aliquam.'
			}
		},
		'l2-intermezzo-1': {
			heading: 'Nyní Vás čeká ostrý test druhé části',
			confirm: 'Spustit ostrý test',
			paragraphs: {
				1: 'V této části budete dělat XYZ. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
			}
		},
		'l3-instruction-1': {
			heading: 'Vcházíte do třetí části experimentu',
			confirm: 'Spustit zácvičnou úlohu',
			paragraphs: {
				1: 'V této části budete dělat XYZ. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt aliquam. Nullam nec purus nec nunc tincidunt aliquam.'
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
