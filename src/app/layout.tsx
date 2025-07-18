import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import AppShell from '@/layouts/AppShell';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Board App',
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
				<AppShell>{children}</AppShell>
			</body>
		</html>
	);
}
