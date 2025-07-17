'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import React from 'react';
import FolderIcon from './icons/FolderIcon';
import GridIcon from './icons/GridIcon';
import MessageIcon from './icons/MessageIcon';
import CalendarIcon from './icons/CalendarIcon';
import UserIcon from './icons/UserIcon';

export default function Sidebar() {
	// Track open/close state for each menu with submenu
	const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({ Boards: true });
	const pathname = usePathname();

	// Determine the effective pathname for default selection
	const effectivePathname = pathname === '/' ? '/boards/sport-xi-project' : pathname;

	// Main menu items in order
	const menu = [
		{
			label: 'Dashboard',
			href: '/',
			iconComponent: GridIcon,
			alt: 'Dashboard',
			active: effectivePathname === '/',
			submenu: [],
		},
		{
			label: 'Boards',
			href: '/boards',
			iconComponent: FolderIcon,
			alt: 'Boards',
			active: effectivePathname.startsWith('/boards'),
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

	// Helper for submenu active
	const isSubActive = (href: string) => effectivePathname === href;

	const handleToggleMenu = (label: string) => {
		setOpenMenus((prev) => {
			const newState: { [key: string]: boolean } = {};
			Object.keys(prev).forEach((key) => {
				newState[key] = false;
			});
			newState[label] = !prev[label];
			return newState;
		});
	};

	return (
		<aside className="w-72 flex-col gap-0 min-h-0 h-[calc(100vh-4rem)] sticky hidden md:flex bg-white border-r border-gray-300">
			{/* Workspace widget */}
			<div>
				<div className="rounded-[6px] border px-3 py-2 flex items-center gap-3 shadow-sm bg-white border-gray-300 mx-4">
					<Image src="/svg/Image Team.svg" alt="Workspace" width={44} height={44} />
					<div className="flex flex-col flex-1">
						<span className="text-[12px] font-medium text-[#B1B5C3]">workspace</span>
						<span className="text-[14px]  font-medium leading-tight text-text drop-shadow-sm">Root folder</span>
					</div>
					<Image src="/svg/Arrow Down.svg" alt="Expand" width={20} height={20} />
				</div>
			</div>
			<nav className="flex flex-col gap-1 px-3 mt-2">
				{menu.map((item) => {
					const hasSubmenu = item.submenu && item.submenu.length > 0;
					const isMenuOpen = openMenus[item.label];
					const isActive = item.active;

					return (
						<div
							key={item.label}
							className={`rounded-[6px] transition-all px-2 py-1.5 ml-3 mb-0.5 ${
								isActive ? 'border border-gray-300' : 'border border-transparent'
							}`}
						>
							{hasSubmenu ? (
								<>
									<button
										onClick={() => handleToggleMenu(item.label)}
										className={`group flex items-center w-full gap-2 py-1 rounded-[6px] focus:outline-none font-medium text-[14px] ${
											isActive ? 'text-[color:var(--color-primary)]' : 'text-[#777E90]'
										}`}
									>
										<span className="w-7 flex justify-center items-center">
											{item.iconComponent && (
												<item.iconComponent
													className={`${
														isActive ? 'text-[color:var(--color-primary)]' : 'text-[#777E90]'
													} group-hover:text-[color:var(--color-primary)]`}
												/>
											)}
										</span>
										<span className="flex-1 text-left group-hover:text-[color:var(--color-primary)]">{item.label}</span>
										<span className="w-7 flex justify-center items-center">
											<Image
												src="/svg/Arrow Down.svg"
												alt="Expand"
												width={18}
												height={18}
												className={`transition-transform ${isMenuOpen ? '' : '-rotate-90'} ${
													isActive ? 'text-[color:var(--color-primary)]' : 'text-[#777E90]'
												} group-hover:text-[color:var(--color-primary)]`}
											/>
										</span>
									</button>
									{isMenuOpen && (
										<div className="mt-1 ml-2 rounded-[6px] border border-gray-300 bg-white px-2 py-1 flex flex-col gap-1 shadow">
											{item.submenu.map((sub) => (
												<Link
													key={sub.href}
													href={sub.href}
													className={`group flex items-center gap-2 px-2 py-1 rounded-[6px] text-[12px] transition-colors ${
														isSubActive(sub.href)
															? 'font-semibold text-[color:var(--color-primary)]'
															: 'text-[#B1B5C3] hover:text-[color:var(--color-primary)]'
													}`}
												>
													<span className="w-7 flex justify-center items-center">
														<Image
															src="/svg/Arrow Right.svg"
															alt="submenu"
															width={14}
															height={14}
															className={`${
																isSubActive(sub.href)
																	? 'text-[color:var(--color-primary)]'
																	: 'text-[#B1B5C3]'
															} group-hover:text-[color:var(--color-primary)]`}
														/>
													</span>
													<span>{sub.label}</span>
												</Link>
											))}
										</div>
									)}
								</>
							) : (
								<Link
									href={item.href}
									className={`group flex items-center gap-2 font-medium text-[14px] py-1 rounded-[6px] transition cursor-pointer ${
										isActive
											? 'text-[color:var(--color-primary)]'
											: 'text-[#777E90] hover:text-[color:var(--color-primary)]'
									}`}
									onClick={() => setOpenMenus({})}
								>
									<span className="w-7 flex justify-center items-center">
										{item.iconComponent && (
											<item.iconComponent
												className={`${
													isActive ? 'text-[color:var(--color-primary)]' : 'text-[#777E90]'
												} group-hover:text-[color:var(--color-primary)]`}
											/>
										)}
									</span>
									<span className="flex-1 text-left">{item.label}</span>
									{item.badge && (
										<span className="ml-2 inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none text-white bg-orange-500 rounded-full">
											{item.badge}
										</span>
									)}
								</Link>
							)}
						</div>
					);
				})}
			</nav>
			<div className="flex flex-col gap-2 px-4 mt-auto mb-4">
				<button className="flex items-center gap-2 px-3 py-2 rounded-[6px] text-[#777E90] hover:text-[color:var(--color-primary)] transition group text-[14px] font-medium">
					<span className="w-7 flex justify-center items-center">
						<Image
							src="/svg/Info Circle.svg"
							alt="Support"
							width={24}
							height={25}
							className="text-[#777E90] group-hover:text-[color:var(--color-primary)]"
						/>
					</span>
					<span className="flex-1 text-left">Support</span>
				</button>
				<button className="flex items-center gap-2 px-3 py-2 rounded-[6px] bg-[#353945] text-white w-full justify-start transition text-[14px] font-medium">
					<span className="w-7 flex justify-center items-center">
						<Image src="/svg/Sign Out.svg" alt="Logout" width={24} height={25} />
					</span>
					<span className="flex-1 text-left">Logout</span>
				</button>
			</div>
		</aside>
	);
}
