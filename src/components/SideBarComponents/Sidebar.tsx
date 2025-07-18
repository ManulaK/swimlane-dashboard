'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import React from 'react';
import FolderIcon from '../icons/FolderIcon';
import GridIcon from '../icons/GridIcon';
import MessageIcon from '../icons/MessageIcon';
import CalendarIcon from '../icons/CalendarIcon';
import UserIcon from '../icons/UserIcon';
import SidebarWorkspaceWidget from './SidebarWorkspaceWidget';
import SidebarMenu from './SidebarMenu';
import SidebarFooter from './SidebarFooter';

export default function Sidebar() {
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

	return (
		<aside className="w-72 flex-col gap-0 min-h-0 h-[calc(100vh-4rem)] sticky hidden md:flex bg-white border-r border-gray-300">
			{/* Workspace widget */}
			<SidebarWorkspaceWidget />
			<nav className="flex flex-col gap-1 px-3 mt-2">
				<SidebarMenu menu={menu} openMenus={openMenus} setOpenMenus={setOpenMenus} pathname={pathname} />
			</nav>
			<SidebarFooter />
		</aside>
	);
}
