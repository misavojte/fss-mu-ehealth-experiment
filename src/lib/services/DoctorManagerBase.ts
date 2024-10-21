import type { IDoctorManager, IDoctorObjectL1 } from '$lib/interfaces/IDoctor';
import { data } from '$lib/data/doctors';

/**
 * Base class for DoctorManager
 * Using "data" as a data source
 */
export class DoctorManagerBase implements IDoctorManager {
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
		// randomize the order of the doctors
		doctors.sort(() => Math.random() - 0.5);
		return doctors;
	}
}
