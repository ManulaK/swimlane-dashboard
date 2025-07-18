import Image from 'next/image';
import AvatarGroup from '../AvatarGroup';

function ProjectSummaryWidget() {
	return (
		<section className="bg-white rounded-lg shadow p-4 mb-4 border border-[var(--color-border)]">
			<div className="flex items-center gap-3 mb-1">
				<h1 className="text-xl font-bold">Sport Xi Project</h1>
				<span className="text-xs font-medium text-black px-3 py-1 rounded" style={{ background: 'var(--color-orange)' }}>
					in progress
				</span>
			</div>
			<div className="text-sm text-gray-400 mb-2">event production</div>
			<div className="flex items-center gap-2 mb-2">
				<span className="text-xs text-gray-400">assigned</span>
				<AvatarGroup assignees={['User 1', 'User 2', 'User 3', 'User 4', 'User 5']} />
				<button className="ml-4 flex items-center gap-1 px-3 py-1 border border-gray-300 rounded-full text-xs text-gray-500 bg-white hover:bg-gray-50 transition">
					Manage
					<Image src="/svg/Pencil.svg" alt="Edit" width={14} height={14} />
				</button>
			</div>
			<hr className="my-2 border-gray-200" />
			<div className="text-xs text-gray-400">Last updated on: 04 April, 2022</div>
		</section>
	);
}

export default ProjectSummaryWidget;
