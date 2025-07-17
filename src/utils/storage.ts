import { Task } from '../store/taskStore';

export function saveTasksToStorage(tasks: Task[]) {
	if (typeof window !== 'undefined') {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}
}

export function getTasksFromStorage(): Task[] | null {
	if (typeof window !== 'undefined') {
		const stored = localStorage.getItem('tasks');
		if (stored) return JSON.parse(stored);
	}
	return null;
}
