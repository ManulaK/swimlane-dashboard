import React from 'react';
import { Task } from '../../store/taskStore';
import { Draggable } from '@hello-pangea/dnd';

interface TaskCardProps {
	task: Task;
	index: number;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, index }) => {
	return (
		<Draggable draggableId={task.id} index={index}>
			{(provided) => (
				<div
					className="task-card bg-gray-50 rounded shadow p-3 cursor-pointer hover:bg-gray-100 transition"
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					<div className="flex items-center justify-between mb-1">
						<span className="text-xs font-semibold text-gray-500">{task.category}</span>
						<span
							className={`text-xs px-2 py-0.5 rounded ${
								task.priority === 'High'
									? 'bg-red-100 text-red-600'
									: task.priority === 'Medium'
									? 'bg-yellow-100 text-yellow-700'
									: 'bg-green-100 text-green-700'
							}`}
						>
							{task.priority}
						</span>
					</div>
					<div className="font-bold text-base mb-1">{task.title}</div>
					<div className="flex items-center text-xs text-gray-400 gap-2 mb-1">
						<span>👥 {task.assignees.length}</span>
						<span>📅 {task.dueDate}</span>
						{task.reports > 0 && <span className="text-red-500 font-semibold">{task.reports} Reports</span>}
					</div>
				</div>
			)}
		</Draggable>
	);
};

export default TaskCard;
