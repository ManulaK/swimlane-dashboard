'use client';
import React, { useEffect } from 'react';
import { useTaskStore, Task } from '../../store/taskStore';
import { fetchTasks } from '../../utils/fetchTasks';
import Swimlane from './Swimlane';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';

const STATUSES = [
	{ key: 'todo', label: 'To Do' },
	{ key: 'inprogress', label: 'In Progress' },
	{ key: 'approved', label: 'Approved' },
	{ key: 'reject', label: 'Reject' },
];

const SwimlaneBoard: React.FC = () => {
	const { tasks, setTasks, moveTask } = useTaskStore();

	useEffect(() => {
		fetchTasks().then((data) => {
			setTasks(data);
		});
	}, [setTasks]);

	const onDragEnd = (result: DropResult) => {
		const { destination, source, draggableId } = result;
		if (!destination) return;
		if (destination.droppableId === source.droppableId && destination.index === source.index) {
			return;
		}
		// Update task status
		moveTask(draggableId, destination.droppableId as Task['status']);
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className="swimlane-board grid grid-cols-1 md:grid-cols-4 gap-4">
				{STATUSES.map((status) => (
					<Swimlane key={status.key} status={status.key as Task['status']} label={status.label} droppableId={status.key} />
				))}
			</div>
		</DragDropContext>
	);
};

export default SwimlaneBoard;
