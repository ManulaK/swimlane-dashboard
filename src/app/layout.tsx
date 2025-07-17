import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import './globals.css';
import Header from '@/components/Header';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	display: 'swap', // Best practice for web fonts
});

export const metadata: Metadata = {
	title: 'Board App', // More descriptive title
	description: 'A collaborative board management application',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={poppins.className} suppressHydrationWarning>
			<body>
				<div className="min-h-screen flex flex-col bg-[var(--color-bg)]">
					{/* Header Bar */}
					<Header />
					<div className="flex flex-1 pt-16">
						{/* Sidebar */}
						<Sidebar />
						<main className="flex-1 p-4" tabIndex={-1} id="main-content">
							{children}
						</main>
					</div>
				</div>
			</body>
		</html>
	);
}
