import type { IDoctorManager, IDoctorObject } from '$lib/interfaces/IDoctor';
import { data } from '$lib/data/doctors';

/**
 * Base class for DoctorManager
 * Using "data" as a data source
 */
export class DoctorManagerBase implements IDoctorManager {
	getDoctorObject(id: string): Promise<IDoctorObject> {
		return new Promise((resolve, reject) => {
			const doctor = data.find((doctor) => doctor.pict_id === id);
			if (doctor) {
				resolve(doctor);
			} else {
				reject(new Error('Doctor not found'));
			}
		});
	}

	getDoctorObjectForPractice(): Promise<IDoctorObject[]> {
		return new Promise((resolve) => {
			const doctors = data.filter((doctor) => doctor.type === 'practice');
			resolve(doctors);
		});
	}

	getDoctorObjectForTrial(): Promise<IDoctorObject[]> {
		return new Promise((resolve) => {
			const doctors = data.filter((doctor) => doctor.type === 'trial');
			// randomize the order of the doctors
			doctors.sort(() => Math.random() - 0.5);
			resolve(doctors);
		});
	}
}
