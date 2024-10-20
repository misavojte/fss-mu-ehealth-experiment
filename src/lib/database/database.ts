// src/lib/db/database.ts
import Dexie from 'dexie';
import type { ActionLog } from './models/ActionLog.model';
import type { Gaze } from './models/Gaze.model';

// Define the database class
class EhealthExperimentDatabase extends Dexie {
	actionLogs!: Dexie.Table<ActionLog, number>;
	gazes!: Dexie.Table<Gaze, number>;

	constructor() {
		super('EhealthExperimentDatabase');
		this.version(1).stores({
			actionLogs: '++id, timestamp, sessionId, type', // Indexed fields
			gazes: '++id, sessionId' // Indexed fields
		});
	}
}

// Singleton instance of the database
const db = new EhealthExperimentDatabase();

export default db;