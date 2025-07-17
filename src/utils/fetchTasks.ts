export async function fetchTasks(): Promise<any[]> {
	// Try to load from localStorage first
	if (typeof window !== 'undefined') {
		const stored = localStorage.getItem('tasks');
		if (stored) return JSON.parse(stored);
	}
	// Fallback to fetch from mock JSON
	const res = await fetch('/mock/tasks.json');
	return res.json();
}
