import React from 'react';
import InfoCircleIcon from '../iconsComponents/InfoCircleIcon';
import SignOutIcon from '../iconsComponents/SignOutIcon';

const SidebarFooter = () => (
	<div className="flex flex-col gap-2 px-4 mt-auto mb-4">
		<button className="flex items-center gap-2 px-3 py-2 rounded-[6px] text-[#777E90] hover:text-[color:var(--color-primary)] transition group text-[14px] font-medium">
			<span className="w-7 flex justify-center items-center">
				<InfoCircleIcon width={24} height={25} className="text-[#777E90] group-hover:text-[color:var(--color-primary)]" />
			</span>
			<span className="flex-1 text-left">Support</span>
		</button>
		<button className="flex items-center gap-2 px-3 py-2 rounded-[6px] bg-[#353945] text-white w-full justify-start transition text-[14px] font-medium">
			<span className="w-7 flex justify-center items-center">
				<SignOutIcon width={24} height={25} />
			</span>
			<span className="flex-1 text-left">Logout</span>
		</button>
	</div>
);

export default SidebarFooter;
