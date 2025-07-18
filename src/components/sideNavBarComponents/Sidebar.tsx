'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import React from 'react';
import FolderIcon from '../iconsComponents/FolderIcon';
import GridIcon from '../iconsComponents/GridIcon';
import MessageIcon from '../iconsComponents/MessageIcon';
import CalendarIcon from '../iconsComponents/CalendarIcon';
import UserIcon from '../iconsComponents/UserIcon';
import SidebarWorkspaceWidget from './SidebarWorkspaceWidget';
import SidebarMenu from './SidebarMenu';
import SidebarFooter from './SidebarFooter';

interface SidebarProps {
	open?: boolean;
	onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open = false, onClose }) => {
	// Track open/close state for each menu with submenu
	const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({ Boards: true });
	const pathname = usePathname();

	// Main menu items in order
	const menu = [
		{
			label: 'Dashboard',
			href: '/dashboard',
			iconComponent: GridIcon,
			alt: 'Dashboard',
			active: pathname === '/',
			submenu: [],
		},
		{
			label: 'Boards',
			href: '/boards',
			iconComponent: FolderIcon,
			alt: 'Boards',
			active: pathname.startsWith('/boards'),
			submenu: [
				{
					label: 'Create routes',
					href: '/boards/create-routes',
				},
				{
					label: 'Delepment React App',
					href: '/boards/development-react-app',
				},
				{
					label: 'Sport Xi Project',
					href: '/boards/sport-xi-project',
				},
				{
					label: 'Wordpress theme',
					href: '/boards/wordpress-theme',
				},
			],
		},
		{
			label: 'Messages',
			href: '/messages',
			iconComponent: MessageIcon,
			alt: 'Messages',
			active: pathname === '/messages',
			badge: 3,
			submenu: [],
		},
		{
			label: 'Calendar',
			href: '/calendar',
			iconComponent: CalendarIcon,
			alt: 'Calendar',
			active: pathname === '/calendar',
			submenu: [],
		},
		{
			label: 'Team members',
			href: '/team',
			iconComponent: UserIcon,
			alt: 'Team members',
			active: pathname === '/team',
			submenu: [],
		},
	];

	// Sidebar for desktop (md+) is always visible. For mobile, show as overlay drawer if open.
	return (
		<>
			{/* Desktop sidebar */}
			<aside
				className="hidden md:flex fixed top-16 left-0 w-72 flex-col gap-0 h-[calc(100vh-4rem)] bg-white border-r border-gray-300 z-40"
				aria-label="Sidebar navigation"
			>
				<SidebarWorkspaceWidget />
				<nav className="flex-1 overflow-y-auto flex flex-col gap-1 px-3 mt-2">
					<SidebarMenu menu={menu} openMenus={openMenus} setOpenMenus={setOpenMenus} pathname={pathname} />
				</nav>
				<SidebarFooter />
			</aside>
			{/* Mobile sidebar drawer */}
			{open && (
				<div className="md:hidden fixed inset-0 z-50 flex">
					{/* Overlay */}
					<div className="fixed inset-0 bg-black bg-opacity-40 transition-opacity" aria-hidden="true" onClick={onClose} />
					{/* Drawer */}
					<aside
						className="relative w-64 max-w-full h-full bg-white shadow-xl flex flex-col border-r border-gray-300 animate-slide-in-left"
						aria-label="Sidebar navigation"
						role="dialog"
						tabIndex={-1}
					>
						{/* Close button */}
						<button
							className="absolute top-2 right-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
							onClick={onClose}
							aria-label="Close sidebar menu"
						>
							<svg
								width="24"
								height="24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<line x1="6" y1="6" x2="18" y2="18" />
								<line x1="6" y1="18" x2="18" y2="6" />
							</svg>
						</button>
						<SidebarWorkspaceWidget />
						<nav className="flex-1 overflow-y-auto flex flex-col gap-1 px-3 mt-2">
							<SidebarMenu menu={menu} openMenus={openMenus} setOpenMenus={setOpenMenus} pathname={pathname} />
						</nav>
						<SidebarFooter />
					</aside>
				</div>
			)}
		</>
	);
};

export default Sidebar;
