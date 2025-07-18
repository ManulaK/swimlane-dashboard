'use client';

import React, { useState } from 'react';
import Header from '@/components/topHeaderComponents/Header';
import Sidebar from '@/components/sideNavBarComponents/Sidebar';

export default function AppShell({ children }: { children: React.ReactNode }) {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<div className="min-h-screen flex flex-col bg-[var(--color-bg)]">
			<Header onSidebarToggle={() => setSidebarOpen((open) => !open)} />
			<div className="flex flex-1 pt-16 relative">
				{/* Overlay for mobile when sidebar is open */}
				{sidebarOpen && (
					<div
						className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
						aria-hidden="true"
						onClick={() => setSidebarOpen(false)}
					/>
				)}
				<Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
				<main className="flex-1 p-4 transition-all duration-200 md:ml-72 relative z-0" tabIndex={-1} id="main-content">
					{children}
				</main>
			</div>
		</div>
	);
}
