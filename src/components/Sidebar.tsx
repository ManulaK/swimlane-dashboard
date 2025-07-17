'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Sidebar() {
	return (
		<aside className="w-64 bg-[var(--color-card)] border-r border-[var(--color-border)] flex flex-col py-8 gap-8 min-h-0 h-[calc(100vh-4rem)] sticky top-16 hidden md:flex">
			<div className="mb-4">
				<div className="flex items-center gap-3 bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] px-4 py-3 shadow-sm">
					<Image src="/svg/Image Team.svg" alt="Workspace" width={44} height={44} />
					<div className="flex flex-col flex-1">
						<span className="text-xs text-[var(--color-sidebar)] font-medium">workspace</span>
						<span
							className="text-lg font-semibold text-[var(--color-text)] leading-tight"
							style={{ textShadow: '0px 4px 8px rgba(53, 57, 69, 0.12)' }}
						>
							Root folder
						</span>
					</div>
					<Image src="/svg/Arrow Down.svg" alt="Expand" width={20} height={20} />
				</div>
			</div>
			<nav className="flex-1 flex flex-col gap-2 px-4">
				<Link
					href="/"
					className="text-base py-2 rounded-md transition hover:bg-[var(--color-bg)] cursor-pointer flex items-center gap-3"
					style={{ color: 'var(--color-sidebar)' }}
				>
					<Image
						src="/svg/Grid.svg"
						alt="Dashboard"
						width={20}
						height={20}
						style={{ filter: 'invert(41%) sepia(6%) saturate(0%) hue-rotate(182deg) brightness(93%) contrast(88%)' }}
					/>
					Dashboard
				</Link>
				<Link
					href="/boards"
					className="text-base py-2 rounded-md transition hover:bg-[var(--color-bg)] cursor-pointer flex items-center gap-3"
					style={{ color: 'var(--color-sidebar)' }}
				>
					<Image
						src="/svg/Folder.svg"
						alt="Boards"
						width={20}
						height={20}
						style={{ filter: 'invert(41%) sepia(6%) saturate(0%) hue-rotate(182deg) brightness(93%) contrast(88%)' }}
					/>
					Boards
				</Link>
				<Link
					href="/messages"
					className="text-base py-2 rounded-md transition hover:bg-[var(--color-bg)] cursor-pointer flex items-center gap-3"
					style={{ color: 'var(--color-sidebar)' }}
				>
					<Image
						src="/svg/Message.svg"
						alt="Messages"
						width={20}
						height={20}
						style={{ filter: 'invert(41%) sepia(6%) saturate(0%) hue-rotate(182deg) brightness(93%) contrast(88%)' }}
					/>
					Messages
				</Link>
				<Link
					href="/calendar"
					className="text-base py-2 rounded-md transition hover:bg-[var(--color-bg)] cursor-pointer flex items-center gap-3"
					style={{ color: 'var(--color-sidebar)' }}
				>
					<Image
						src="/svg/Calendar.svg"
						alt="Calendar"
						width={20}
						height={20}
						style={{ filter: 'invert(41%) sepia(6%) saturate(0%) hue-rotate(182deg) brightness(93%) contrast(88%)' }}
					/>
					Calendar
				</Link>
				<Link
					href="/team"
					className="text-base py-2 rounded-md transition hover:bg-[var(--color-bg)] cursor-pointer flex items-center gap-3"
					style={{ color: 'var(--color-sidebar)' }}
				>
					<Image
						src="/svg/User.svg"
						alt="Team members"
						width={20}
						height={20}
						style={{ filter: 'invert(41%) sepia(6%) saturate(0%) hue-rotate(182deg) brightness(93%) contrast(88%)' }}
					/>
					Team members
				</Link>
			</nav>
			<div className="mt-auto px-4 flex flex-col gap-4 pb-2">
				<button className="flex items-center gap-3 text-base font-medium text-[var(--color-sidebar)] bg-transparent border-none cursor-pointer px-0 py-2 hover:bg-[var(--color-bg)] rounded-md">
					<Image
						src="/svg/Info Circle.svg"
						alt="Support"
						width={24}
						height={24}
						style={{ filter: 'invert(41%) sepia(6%) saturate(0%) hue-rotate(182deg) brightness(93%) contrast(88%)' }}
					/>
					Support
				</button>
				<button className="flex items-center gap-3 text-base font-semibold text-white bg-[var(--color-dark)] w-full py-3 rounded-xl justify-center hover:bg-[var(--color-text)] transition">
					<Image src="/svg/Sign Out.svg" alt="Logout" width={24} height={24} style={{ filter: 'invert(1) brightness(2)' }} />
					Logout
				</button>
			</div>
		</aside>
	);
}
