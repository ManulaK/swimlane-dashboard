import React from 'react';
import Image from 'next/image';
import ArrowDownIcon from '../iconsComponents/ArrowDownIcon';

const SidebarWorkspaceWidget = () => (
	<div>
		<div className="rounded-[6px] border px-3 py-2 flex items-center gap-3 shadow-sm bg-white border-gray-300 mx-4">
			<Image src="/svg/Image Team.svg" alt="Workspace" width={44} height={44} />
			<div className="flex flex-col flex-1">
				<span className="text-[12px] font-medium text-[#B1B5C3]">workspace</span>
				<span className="text-[14px]  font-medium leading-tight text-text drop-shadow-sm">Root folder</span>
			</div>
			<ArrowDownIcon width={20} height={20} className="text-[#777E90] group-hover:text-[color:var(--color-primary)]" />
		</div>
	</div>
);

export default SidebarWorkspaceWidget;
