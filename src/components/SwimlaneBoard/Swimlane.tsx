'use client';
import React from 'react';
import { useTaskStore, Task } from '../../store/taskStore';
import TaskCard from './TaskCard';
import { Droppable } from '@hello-pangea/dnd';

interface SwimlaneProps {
	status: Task['status'];
	label: string;
	droppableId: string;
}

const Swimlane: React.FC<SwimlaneProps> = ({ status, label, droppableId }) => {
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
				<div className="swimlane bg-white rounded-lg shadow p-2 min-h-[400px]" ref={provided.innerRef} {...provided.droppableProps}>
					<div className="font-semibold text-lg mb-2 flex items-center justify-between">
						<span>{label}</span>
						<span className="text-xs bg-gray-200 rounded px-2 py-1">{filtered.length}</span>
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
