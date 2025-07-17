'use client';
import React from 'react';
import { useTaskStore, Task } from '../../store/taskStore';
import TaskCard from './TaskCard';
import { Droppable } from '@hello-pangea/dnd';
import PlusIcon from '../icons/PlusIcon';
import DotsIcon from '../icons/DotsIcon';

// Status color map
const STATUS_COLORS: Record<string, string> = {
	todo: '#E5E7EB', // gray-200
	inprogress: '#FFA500', // orange
	approved: '#B9FBC0', // light green
	reject: '#FF1744', // red
};

const Swimlane: React.FC<{
	status: Task['status'];
	label: string;
	droppableId: string;
}> = ({ status, label, droppableId }) => {
	const { tasks, searchQuery } = useTaskStore();
	const filtered = tasks.filter((task) => {
		const matchesStatus = task.status === status;
		const q = searchQuery.trim().toLowerCase();
		const matchesQuery = !q || task.title.toLowerCase().includes(q) || task.category.toLowerCase().includes(q);
		return matchesStatus && matchesQuery;
	});

	return (
		<Droppable droppableId={droppableId}>
			{(provided) => (
				<div
					className="swimlane rounded-lg shadow p-2 min-h-[400px]"
					ref={provided.innerRef}
					{...provided.droppableProps}
					style={{ background: '#E6E8EC' }}
				>
					<div className="font-semibold text-lg mb-2 flex items-center justify-between">
						{/* Left: Status label with color */}
						<span
							className="text-xs font-semibold px-4 py-1 rounded-full"
							style={{ background: STATUS_COLORS[status] || '#E5E7EB', color: status === 'reject' ? '#fff' : '#222' }}
						>
							{label}
						</span>
						<span className="text-xs rounded px-2 py-1 bg-gray-200 ml-2">{filtered.length}</span>
						{/* Right: Plus and Dots icons */}
						<span className="flex items-center gap-1 ml-auto">
							<button className="rounded-full p-1 hover:bg-gray-100 focus:bg-gray-200" title="Add task">
								<PlusIcon />
							</button>
							<button className="rounded-full bg-gray-100 hover:bg-gray-200 p-1" title="More options">
								<DotsIcon />
							</button>
						</span>
					</div>
					<div className="flex flex-col gap-2">
						{filtered.map((task, idx) => (
							<TaskCard key={task.id} task={task} index={idx} />
						))}
						{provided.placeholder}
					</div>
				</div>
			)}
		</Droppable>
	);
};

export default Swimlane;
