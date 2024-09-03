import type { IDoctorManager, IDoctorObject } from '$lib/interfaces/IDoctor';
import { data } from '$lib/data/doctors';

/**
 * Base class for DoctorManager
 * Using "data" as a data source
 */
export class DoctorManagerBase implements IDoctorManager {
	getDoctorObject(id: string): IDoctorObject {
		const doctor = data.find((doctor) => doctor.pict_id === id);
		if (!doctor) {
			throw new Error(`Doctor with id ${id} not found`);
		}
		return doctor;
	}

	getDoctorObjectForPractice(): IDoctorObject[] {
		const doctors = data.filter((doctor) => doctor.type === 'practice');
		return doctors;
	}

	getDoctorObjectForTrial(): IDoctorObject[] {
		const doctors = data.filter((doctor) => doctor.type === 'trial');
		// randomize the order of the doctors
		doctors.sort(() => Math.random() - 0.5);
		return doctors;
	}
}
