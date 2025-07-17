import Image from 'next/image';
import React from 'react';

interface AvatarGroupProps {
	assignees: string[];
	size?: number; // Optional: avatar size in px
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({ assignees, size = 28 }) => {
	const maxVisible = 3;
	const visible = assignees.slice(0, maxVisible);
	const extra = assignees.length - maxVisible;
	return (
		<div className="flex -space-x-2">
			{visible.map((assignee, i) => (
				<Image
					key={i}
					src="/svg/Image Team.svg"
					alt={assignee}
					width={size}
					height={size}
					className="rounded-full border-2 border-white"
				/>
			))}
			{extra > 0 && (
				<span
					className="flex items-center justify-center bg-gray-200 text-xs font-semibold rounded-full border-2 border-white"
					style={{ width: size, height: size }}
				>
					+{extra}
				</span>
			)}
		</div>
	);
};

export default AvatarGroup;
