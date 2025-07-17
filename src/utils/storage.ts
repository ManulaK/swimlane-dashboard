export function saveTasksToStorage(tasks: any[]) {
	if (typeof window !== 'undefined') {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}
}

export function getTasksFromStorage(): any[] | null {
	if (typeof window !== 'undefined') {
		const stored = localStorage.getItem('tasks');
		if (stored) return JSON.parse(stored);
	}
	return null;
}
