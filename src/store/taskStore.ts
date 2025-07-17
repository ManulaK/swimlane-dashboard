import { create } from 'zustand';

export type Task = {
	id: string;
	title: string;
	status: 'todo' | 'inprogress' | 'approved' | 'reject';
	category: string;
	priority: string;
	assignees: string[];
	dueDate: string;
	reports: number;
	image?: string;
};

type TaskStore = {
	tasks: Task[];
	setTasks: (tasks: Task[]) => void;
	moveTask: (taskId: string, newStatus: Task['status']) => void;
	loadTasks: (tasks: Task[]) => void;
	searchQuery: string;
	setSearchQuery: (query: string) => void;
};

export const useTaskStore = create<TaskStore>((set, get) => ({
	tasks: [],
	setTasks: (tasks) => {
		set({ tasks });
		localStorage.setItem('tasks', JSON.stringify(tasks));
	},
	moveTask: (taskId, newStatus) => {
		const updated = get().tasks.map((task) => (task.id === taskId ? { ...task, status: newStatus } : task));
		set({ tasks: updated });
		localStorage.setItem('tasks', JSON.stringify(updated));
	},
	loadTasks: (tasks) => {
		set({ tasks });
	},
	searchQuery: '',
	setSearchQuery: (query) => set({ searchQuery: query }),
}));
