import Image from 'next/image';
import SearchBar from './SearchBar';
import UserActions from './UserActions';

export default function Header() {
	return (
		<header
			className="fixed top-0 left-0 right-0 h-16 bg-[var(--color-card)] border-b border-[var(--color-border)] flex items-center px-8 z-20"
			role="banner"
		>
			<div className="flex items-center gap-2 text-xl font-bold text-[var(--color-primary)]" aria-label="App Logo">
				<Image src="/images/logo.png" alt="Board App Logo" width={32} height={32} className="mr-2" priority />
				<span>
					<span style={{ color: 'var(--color-dark)' }}>Board</span> <span style={{ color: 'var(--color-primary)' }}>App</span>
				</span>
			</div>
			<SearchBar />
			<UserActions />
		</header>
	);
}
