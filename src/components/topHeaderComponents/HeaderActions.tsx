import Image from 'next/image';
import React from 'react';

const HeaderActions: React.FC = () => (
	<nav aria-label="Board actions" className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0">
		<Image src="/svg/Settings.svg" alt="Settings" width={24} height={24} className="cursor-pointer hover:opacity-80" />
		<span className="relative inline-block">
			<Image src="/svg/Bell.svg" alt="Notifications" width={24} height={24} className="cursor-pointer hover:opacity-80" />
			<span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-orange-500 ring-2 ring-white"></span>
		</span>
		<Image src="/svg/Image Team.svg" alt="Team" width={32} height={32} className="cursor-pointer hover:opacity-80" />
	</nav>
);

export default HeaderActions;
