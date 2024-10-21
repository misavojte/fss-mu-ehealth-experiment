import type { IDoctorManager, IDoctorObjectL1, IDoctorObjectL2 } from '$lib/interfaces/IDoctor';
import { data } from '$lib/data/doctors';
import { doctorsL2 } from '$lib/data/doctorsL2';
import { fisherYatesShuffle } from '$lib/utils/shuffle';
/**
 * Base class for DoctorManager
 * Using "data" as a data source
 */
export class DoctorManagerMock implements IDoctorManager {
	L1Answers: Record<string, number> = {};
	L2Answers: Record<string, number> = {};
	private logAction(type: string, value?: string): void {
		console.log('Action log saved:', { type, value });
	}

	getL1Object(id: string): IDoctorObjectL1 {
		const doctor = data.find((doctor) => doctor.pict_id === id);
		if (!doctor) {
			throw new Error(`Doctor with id ${id} not found`);
		}
		return doctor;
	}

	getL1ObjectForPractice(): IDoctorObjectL1[] {
		const doctors = data.filter((doctor) => doctor.type === 'practice');
		return doctors;
	}

	getL1ObjectForTrial(): IDoctorObjectL1[] {
		const doctors = data.filter((doctor) => doctor.type === 'trial');
		return fisherYatesShuffle(doctors);
	}

	getL2Object(id: string): IDoctorObjectL2 {
		const doctor = doctorsL2.find((doctor) => doctor.nr === id);
		if (!doctor) {
			throw new Error(`Doctor with id ${id} not found`);
		}
		return doctor;
	}

	getL2ObjectForPractice(): IDoctorObjectL2[] {
		return doctorsL2.filter((doctor) => doctor.order === 'fixed');
	}

	getL2ObjectForTrial(): IDoctorObjectL2[] {
		const doctors = doctorsL2.filter((doctor) => doctor.order === 'random');
		const newDoctors = fisherYatesShuffle(doctors).map((doctor) => {
			const newReviews = fisherYatesShuffle(doctor.reviews);
			return { ...doctor, reviews: newReviews };
		});
		return newDoctors;
	}

	logL1Start(id: string): void {
		this.logAction('L1_start', id);
	}

	logL1Load(id: string): void {
		this.logAction('L1_load', id);
	}

	logL1ShowLikert(id: string): void {
		this.logAction('L1_show_likert', id);
	}

	logL1Response(id: string, response: number): void {
		this.L1Answers[id] = response;
		this.logAction('L1_response', `${id}; ${response}`);
	}

	logL2Start(id: string): void {
		this.logAction('L2_start', id);
	}

	logL2Response(id: string, response: number): void {
		this.L2Answers[id] = response;
		this.logAction('L2_response', `${id}; ${response}`);
	}
}
