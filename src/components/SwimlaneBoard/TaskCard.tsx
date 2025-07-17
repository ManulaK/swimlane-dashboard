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
					className="task-card rounded shadow p-3 cursor-pointer transition"
					style={{ background: 'var(--color-gray-50)' }}
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					onMouseOver={(e) => (e.currentTarget.style.background = 'var(--color-gray-100)')}
					onMouseOut={(e) => (e.currentTarget.style.background = 'var(--color-gray-50)')}
				>
					<div className="flex items-center justify-between mb-1">
						<span className="text-xs font-semibold" style={{ color: 'var(--color-gray-500)' }}>
							{task.category}
						</span>
						<span
							className="text-xs px-2 py-0.5 rounded"
							style={{
								background:
									task.priority === 'High'
										? 'var(--color-red-100)'
										: task.priority === 'Medium'
										? 'var(--color-yellow-100)'
										: 'var(--color-green-100)',
								color:
									task.priority === 'High'
										? 'var(--color-red-600)'
										: task.priority === 'Medium'
										? 'var(--color-yellow-700)'
										: 'var(--color-green-700)',
							}}
						>
							{task.priority}
						</span>
					</div>
					<div className="font-bold text-base mb-1">{task.title}</div>
					<div className="flex items-center text-xs gap-2 mb-1" style={{ color: 'var(--color-gray-400)' }}>
						<span>👥 {task.assignees.length}</span>
						<span>📅 {task.dueDate}</span>
						{task.reports > 0 && <span style={{ color: 'var(--color-red-500)', fontWeight: 600 }}>{task.reports} Reports</span>}
					</div>
				</div>
			)}
		</Draggable>
	);
};

export default TaskCard;
