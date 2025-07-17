import Image from 'next/image';
import SearchBar from './SearchBar';

export default function Header() {
	return (
		<header
			className="fixed top-0 left-0 right-0 h-16 bg-[var(--color-card)] border-b border-[var(--color-border)] flex items-center px-4 sm:px-6 md:px-8 z-20"
			role="banner"
		>
			{/* Logo on the far left */}
			<div className="flex items-center gap-2 text-xl font-bold text-[var(--color-primary)] mr-auto min-w-0" aria-label="App Logo">
				<Image src="/images/logo.png" alt="Board App Logo" width={32} height={32} className="mr-2" priority />
				<span className="truncate">
					<span style={{ color: 'var(--color-dark)' }}>Board</span> <span style={{ color: 'var(--color-primary)' }}>App</span>
				</span>
			</div>

			{/* All controls on the right */}
			<div className="flex items-center gap-2 sm:gap-3 md:gap-4 ml-auto min-w-0">
				{/* Hide button on small screens */}
				<button
					type="button"
					className="hidden md:flex bg-[#377DFF] text-white px-4 md:px-6 py-2 rounded-lg font-semibold items-center gap-2 shadow hover:bg-[#2563eb] transition whitespace-nowrap"
					aria-label="Create new board"
				>
					<span>Create new board</span>
					<span className="text-xl font-bold">+</span>
				</button>
				{/* Hide search bar on small screens */}
				<div className="hidden sm:block min-w-0 max-w-[180px] md:max-w-xs lg:max-w-md w-full">
					<SearchBar />
				</div>
				<nav aria-label="Board actions" className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0">
					<Image src="/svg/Settings.svg" alt="Settings" width={24} height={24} className="cursor-pointer hover:opacity-80" />
					<Image src="/svg/Bell.svg" alt="Notifications" width={24} height={24} className="cursor-pointer hover:opacity-80" />
					<Image src="/svg/Image Team.svg" alt="Team" width={32} height={32} className="cursor-pointer hover:opacity-80" />
				</nav>
			</div>
		</header>
	);
}
