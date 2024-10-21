export type IDoctorObjectL1 = {
	pict_id: string; // used as id as well, not just image path
	type: string;
	order: string;
	stars_avg: number; // stars_avg is treated as a float, which corresponds to TypeScript's `number` type
	star_1: number;
	star_2: number;
	star_3: number;
	star_4: number;
	star_5: number;
	doctor_name: string;
};

export type IDoctorObjectL2 = {
	nr: string;
	doctor_name: string;
	rev_nr: string;
	star_doc: string;
	order: 'fixed' | 'random';
	reviews: Array<{
		nr: string;
		nr2: string;
		star_statement: string;
		reviewer_nick: string;
		statement: string;
		type: 'distraktor' | 'com_high' | 'com_mid' | 'tech_high' | 'tech_mid';
	}>;
};

export interface IDoctorManager {
	getDoctorObject(id: string): IDoctorObjectL1;
	getDoctorObjectForPractice(): IDoctorObjectL1[];
	getDoctorObjectForTrial(): IDoctorObjectL1[];
}
