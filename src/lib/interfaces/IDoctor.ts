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
	reviews: {
		nr: string;
		nr2: string;
		star_statement: string;
		reviewer_nick: string;
		statement: string;
		type: 'distraktor' | 'com_high' | 'com_mid' | 'tech_high' | 'tech_mid';
	}[];
};

export interface IDoctorManager {
	L1Answers: { id: string; response: number; reactionTime: number }[];
	L2Answers: { id: string; response: number; reactionTime: number }[];
	getL1Object(id: string): IDoctorObjectL1;
	getL1ObjectForPractice(): IDoctorObjectL1[];
	getL1ObjectForTrial(): IDoctorObjectL1[];
	getL2Object(id: string): IDoctorObjectL2;
	getL2ObjectForPractice(): IDoctorObjectL2[];
	getL2ObjectForTrial(): IDoctorObjectL2[];
	getL3ObjectGood(): IDoctorObjectL2[];
	getL3ObjectBad(): IDoctorObjectL2[];
	logL1Init(objects: IDoctorObjectL1[]): void;
	logL1Start(id: string): void;
	logL1Load(id: string): void;
	logL1ShowLikert(id: string): void;
	logL1Response(id: string, response: number, reactionTime: number): void;
	logL2Init(objects: IDoctorObjectL2[]): void;
	logL2Start(id: string): void;
	logL2Response(id: string, response: number, reactionTime: number): void;
	logL3Init(objects: IDoctorObjectL2[]): void;
	logL3Start(id: string): void;
	logL3End(id: string): void;
}
