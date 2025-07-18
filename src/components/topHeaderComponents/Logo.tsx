import Image from 'next/image';
import React from 'react';

const Logo: React.FC = () => (
	<div className="flex items-center gap-2 text-[12px] font-semibold text-[var(--color-primary)] mr-auto min-w-0" aria-label="App Logo">
		<Image src="/images/logo.png" alt="Board App Logo" width={32} height={32} className="mr-2" priority />
		<span className="truncate">
			<span style={{ color: 'var(--color-dark)' }}>Board</span> <span style={{ color: 'var(--color-primary)' }}>App</span>
		</span>
	</div>
);

export default Logo;
