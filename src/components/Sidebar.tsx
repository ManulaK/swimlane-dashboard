'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
	// Track open/close state for each menu with submenu
	const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({ Boards: true });
	const pathname = usePathname();

	// Main menu items in order
	const menu = [
		{
			label: 'Dashboard',
			href: '/',
			icon: '/svg/Grid.svg',
			alt: 'Dashboard',
			active: pathname === '/',
			submenu: [],
		},
		{
			label: 'Boards',
			href: '/boards',
			icon: '/svg/Folder.svg',
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
			icon: '/svg/Message.svg',
			alt: 'Messages',
			active: pathname === '/messages',
			badge: 3,
			submenu: [],
		},
		{
			label: 'Calendar',
			href: '/calendar',
			icon: '/svg/Calendar.svg',
			alt: 'Calendar',
			active: pathname === '/calendar',
			submenu: [],
		},
		{
			label: 'Team members',
			href: '/team',
			icon: '/svg/User.svg',
			alt: 'Team members',
			active: pathname === '/team',
			submenu: [],
		},
	];

	// Helper for submenu active
	const isSubActive = (href: string) => pathname === href;

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
		<aside className="w-72 flex-col gap-0 min-h-0 h-[calc(100vh-4rem)] sticky hidden md:flex bg-white border-r border-gray-400">
			{/* Workspace widget */}
			<div>
				<div className="rounded-xl border px-3 py-2 flex items-center gap-3 shadow-sm bg-white border-gray-400 mx-4">
					<Image src="/svg/Image Team.svg" alt="Workspace" width={44} height={44} />
					<div className="flex flex-col flex-1">
						<span className="text-sm font-medium text-sidebar">workspace</span>
						<span className="text-sm font-semibold leading-tight text-text drop-shadow-sm">Root folder</span>
					</div>
					<Image src="/svg/Arrow Down.svg" alt="Expand" width={20} height={20} />
				</div>
			</div>
			<nav className="flex flex-col gap-2 px-4 mt-2">
				{menu.map((item) => {
					const hasSubmenu = item.submenu && item.submenu.length > 0;
					const isMenuOpen = openMenus[item.label];
					const isActive = item.active;

					return (
						<div
							key={item.label}
							className={`rounded-xl transition-all px-3 py-2 mb-1 ${
								isActive
									? isMenuOpen && hasSubmenu
										? 'border-none bg-primary/5'
										: 'border border-gray-400 bg-primary/5'
									: 'border-none bg-white'
							}`}
						>
							{hasSubmenu ? (
								<>
									<button
										onClick={() => handleToggleMenu(item.label)}
										className={`flex items-center w-full gap-2 py-1 rounded-lg focus:outline-none text-base font-medium ${
											isActive ? 'text-primary' : 'text-sidebar'
										}`}
									>
										<span className="w-7 flex justify-center items-center">
											<Image
												src={item.icon}
												alt={item.alt}
												width={22}
												height={22}
												className={isActive ? 'text-primary' : 'text-sidebar'}
											/>
										</span>
										<span className="flex-1 text-left">{item.label}</span>
										<span className="w-7 flex justify-center items-center">
											<Image
												src="/svg/Arrow Down.svg"
												alt="Expand"
												width={18}
												height={18}
												className={`transition-transform ${isMenuOpen ? '' : '-rotate-90'} ${
													isActive ? 'text-primary' : 'text-sidebar'
												}`}
											/>
										</span>
									</button>
									{isMenuOpen && (
										<div className="mt-2 ml-2 rounded-xl border border-gray-400 bg-white px-3 py-2 flex flex-col gap-1 shadow">
											{item.submenu.map((sub) => (
												<Link
													key={sub.href}
													href={sub.href}
													className={`flex items-center gap-2 px-2 py-2 rounded-md text-sm transition-colors ${
														isSubActive(sub.href)
															? 'font-semibold text-primary bg-primary/10'
															: 'text-sidebar hover:text-primary hover:bg-primary/5'
													}`}
												>
													<span className="w-7 flex justify-center items-center">
														<Image
															src="/svg/Arrow Right.svg"
															alt="submenu"
															width={14}
															height={14}
															className={isSubActive(sub.href) ? 'text-primary' : 'text-sidebar'}
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
									className={`flex items-center gap-2 text-base font-medium py-2 rounded-md transition cursor-pointer ${
										isActive ? 'text-primary bg-primary/10' : 'text-sidebar hover:text-primary hover:bg-primary/5'
									}`}
									onClick={() => setOpenMenus({})}
								>
									<span className="w-7 flex justify-center items-center">
										<Image
											src={item.icon}
											alt={item.alt}
											width={20}
											height={20}
											className={isActive ? 'text-primary' : 'text-sidebar'}
										/>
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
				<button
					className="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-400 text-sidebar hover:text-primary hover:bg-primary/5 transition"
					// onClick={...} // Add your support action here
				>
					<span className="w-7 flex justify-center items-center">
						<Image src="/svg/Info Circle.svg" alt="Support" width={20} height={20} />
					</span>
					<span className="flex-1 text-left">Support</span>
				</button>
				<button
					className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#353945] text-white w-full justify-start transition"
					// onClick={...} // Add your logout action here
				>
					<span className="w-7 flex justify-center items-center">
						<Image src="/svg/Sign Out.svg" alt="Logout" width={20} height={20} />
					</span>
					<span className="flex-1 text-left">Logout</span>
				</button>
			</div>
		</aside>
	);
}
