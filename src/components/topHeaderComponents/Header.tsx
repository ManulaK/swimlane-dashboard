import SearchBar from './SearchBar';
import React from 'react';
import Logo from './Logo';
import CreateBoardButton from './CreateBoardButton';
import HeaderActions from './HeaderActions';

interface HeaderProps {
	onSidebarToggle?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSidebarToggle }) => {
	return (
		<header
			className="fixed top-0 left-0 right-0 h-16 bg-[var(--color-card)] border-b border-[var(--color-border)] flex items-center px-4 sm:px-6 md:px-8 z-20"
			role="banner"
		>
			{/* Hamburger for mobile */}
			{onSidebarToggle && (
				<button
					onClick={onSidebarToggle}
					className="md:hidden mr-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
					aria-label="Open sidebar menu"
				>
					<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
						<line x1="4" y1="6" x2="20" y2="6" />
						<line x1="4" y1="12" x2="20" y2="12" />
						<line x1="4" y1="18" x2="20" y2="18" />
					</svg>
				</button>
			)}
			{/* Logo on the far left */}
			<Logo />

			{/* All controls on the right */}
			<div className="flex items-center gap-2 sm:gap-3 md:gap-4 ml-auto min-w-0">
				{/* Hide button on small screens */}
				<CreateBoardButton />
				{/* Hide search bar on small screens */}
				<div className="hidden sm:block min-w-0 max-w-[180px] md:max-w-xs lg:max-w-md w-full">
					<SearchBar />
				</div>
				<HeaderActions />
			</div>
		</header>
	);
};

export default Header;
