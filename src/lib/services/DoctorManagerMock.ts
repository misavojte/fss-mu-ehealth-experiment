import type { IDoctorManager, IDoctorObjectL1, IDoctorObjectL2 } from '$lib/interfaces/IDoctor';
import { data } from '$lib/data/doctors';
import { doctorsL2 } from '$lib/data/doctorsL2';
import { fisherYatesShuffle } from '$lib/utils/shuffle';
/**
 * Base class for DoctorManager
 * Using "data" as a data source
 */
export class DoctorManagerMock implements IDoctorManager {
	L1Answers: { id: string; response: number; reactionTime: number }[] = [];
	L2Answers: { id: string; response: number; reactionTime: number }[] = [
		{ id: '10', response: 3, reactionTime: 1000 },
		{ id: '11', response: 4, reactionTime: 2000 },
		{ id: '12', response: 5, reactionTime: 3000 },
		{ id: '13', response: 2, reactionTime: 4000 }
	];
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

	/**
	 * Get two worst evaluated doctors by user from this.L2Answers
	 * @returns {IDoctorObjectL2[]}
	 */
	getL3ObjectBad(): IDoctorObjectL2[] {
		// primary sorting by the lowest response, secondary be lowest reactionTime
		const sorted = this.L2Answers.sort(
			(a, b) => a.response - b.response || a.reactionTime - b.reactionTime
		);
		const worst = sorted.slice(0, 2);
		return worst.map((answer) => this.getL2Object(answer.id));
	}

	/**
	 * Get two best evaluated doctors by user from this.L2Answers
	 * If more than two doctors have the same rating, only two with the lowest reactionTime are returned
	 * @returns {IDoctorObjectL2[]}
	 */
	getL3ObjectGood(): IDoctorObjectL2[] {
		// primary sorting by the best response, secondary by lowest reactionTime
		const sorted = this.L2Answers.sort(
			(a, b) => b.response - a.response || a.reactionTime - b.reactionTime
		);
		const best = sorted.slice(0, 2);
		return best.map((answer) => this.getL2Object(answer.id));
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
