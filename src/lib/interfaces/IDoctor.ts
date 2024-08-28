export type IDoctorObject = {
	pict_id: string;
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

export interface IDoctorManager {
	getDoctorObject(id: string): Promise<IDoctorObject>;
	getDoctorObjectForPractice(): Promise<IDoctorObject[]>;
	getDoctorObjectForTrial(): Promise<IDoctorObject[]>;
}
