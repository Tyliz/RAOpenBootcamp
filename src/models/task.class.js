import { LEVELS } from './levels.enum';

export class Task {
	idTask = 0;
	name = '';
	description = '';
	completed = false;
	level = LEVELS.NORMAL;

	constructor(idTask = 0, name = '', description = '', completed = false, level = LEVELS.NORMAL) {
		this.idTask = idTask;
		this.name = name;
		this.description = description;
		this.completed = completed;
		this.level = level;
	}
}
