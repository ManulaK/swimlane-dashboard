import React from 'react';
import { Task } from '../../store/taskStore';
import { Draggable } from '@hello-pangea/dnd';
import DotsIcon from '../icons/DotsIcon';
import MessageIcon from '../icons/MessageIcon';
import UserIcon from '../icons/UserIcon';
import InfoCircleIcon from '../icons/InfoCircleIcon';
import CalendarIcon from '../icons/CalendarIcon';
import Image from 'next/image';
import AvatarGroup from '../AvatarGroup';
import FlashIcon from '../icons/FlashIcon';

interface TaskCardProps {
	task: Task;
	index: number;
}

const PRIORITY_COLORS: Record<string, { bg: string; text: string }> = {
	High: { bg: 'var(--color-red-100)', text: 'var(--color-red-600)' },
	Medium: { bg: 'var(--color-yellow-100)', text: 'var(--color-yellow-700)' },
	Low: { bg: 'var(--color-green-100)', text: 'var(--color-green-700)' },
};
const CATEGORY_COLORS: Record<string, string> = {
	Research: '#4ADE80', // green
	Design: '#F87171', // red
	// add more as needed
};

const TaskCard: React.FC<TaskCardProps> = ({ task, index }) => {
	return (
		<Draggable draggableId={task.id} index={index}>
			{(provided) => (
				<div
					className="task-card rounded-xl shadow p-4 cursor-pointer transition flex flex-col gap-2 border border-gray-100 bg-white"
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					onMouseOver={(e) => (e.currentTarget.style.background = 'var(--color-gray-100)')}
					onMouseOut={(e) => (e.currentTarget.style.background = 'var(--color-gray-50)')}
				>
					{/* Header: Category + Dots */}
					<div className="flex items-center justify-between mb-1">
						<span className="flex items-center gap-2 text-xs font-semibold" style={{ color: 'var(--color-gray-400)' }}>
							<span
								className="inline-block w-2 h-2 rounded-full"
								style={{ background: CATEGORY_COLORS[task.category] || '#A3A3A3' }}
							></span>
							<span className="font-medium" style={{ color: 'var(--color-gray-400)' }}>
								{task.category}
							</span>
						</span>
						<button className="p-1 rounded-full hover:bg-gray-100">
							<DotsIcon width={18} height={18} />
						</button>
					</div>
					{/* Title */}
					<div className="font-medium text-md mb-1 text-black leading-snug text-[14px]">{task.title}</div>
					{/* Assignees + Priority */}
					<div className="flex items-center gap-2 mb-2">
						<AvatarGroup assignees={task.assignees} size={24} />
						<span className="flex items-center gap-1 text-xs px-2 py-0.5 text-gray-400 ">
							<FlashIcon className="w-4 h-4 text-gray-200" /> {task.priority}
						</span>
					</div>
					{/* Task image if present */}
					{task.image && (
						<div className="w-full h-28 bg-[#393C48] rounded-lg flex items-center justify-center mb-2 overflow-hidden">
							<Image
								src={task.image}
								alt={task.title}
								width={300}
								height={80}
								className="object-cover w-full h-full"
								style={{ minHeight: 80, minWidth: 100 }}
								onError={(e) => {
									e.currentTarget.src = '/svg/Image.svg';
									e.currentTarget.className = 'w-8 h-8 text-gray-400';
								}}
							/>
						</div>
					)}
					{/* Footer: Links, Comments, Due/Reports */}
					<div className="flex items-center justify-between pt-2 border-t border-gray-100 text-xs">
						<div className="flex items-center gap-4">
							<span className="flex items-center gap-1 text-gray-400">
								<UserIcon className="w-4 h-4" /> {task.assignees.length}
							</span>
							<span className="flex items-center gap-1 text-gray-400">
								<MessageIcon className="w-4 h-4" /> {Math.floor(Math.random() * 10)}
							</span>
						</div>
						<div className="flex items-center gap-2">
							{task.reports > 0 ? (
								<span className="flex items-center gap-1 text-red-500 font-semibold">
									<InfoCircleIcon width={16} height={16} /> {task.reports} Reports
								</span>
							) : (
								<span className="flex items-center gap-1 text-gray-400">
									<CalendarIcon className="w-4 h-4" /> Due: {task.dueDate}
								</span>
							)}
						</div>
					</div>
				</div>
			)}
		</Draggable>
	);
};

export default TaskCard;
