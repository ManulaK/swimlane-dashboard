import React from 'react';
import Link from 'next/link';
import ArrowDownIcon from '../icons/ArrowDownIcon';
import ArrowRightIcon from '../icons/ArrowRightIcon';

interface MenuItem {
	label: string;
	href: string;
	iconComponent?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	alt?: string;
	active: boolean;
	badge?: number;
	submenu: Array<{ label: string; href: string }>;
}

interface SidebarMenuProps {
	menu: MenuItem[];
	openMenus: { [key: string]: boolean };
	setOpenMenus: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
	pathname: string;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ menu, openMenus, setOpenMenus, pathname }) => {
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
		<>
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
												className={`$${
													isActive ? 'text-[color:var(--color-primary)]' : 'text-[#777E90]'
												} group-hover:text-[color:var(--color-primary)]`}
											/>
										)}
									</span>
									<span className="flex-1 text-left group-hover:text-[color:var(--color-primary)]">{item.label}</span>
									<span className="w-7 flex justify-center items-center">
										<ArrowDownIcon
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
													<ArrowRightIcon
														width={14}
														height={14}
														className={`$${
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
									isActive ? 'text-[color:var(--color-primary)]' : 'text-[#777E90] hover:text-[color:var(--color-primary)]'
								}`}
								onClick={() => setOpenMenus({})}
							>
								<span className="w-7 flex justify-center items-center">
									{item.iconComponent && (
										<item.iconComponent
											className={`$${
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
		</>
	);
};

export default SidebarMenu;
