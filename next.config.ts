import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	async redirects() {
		return [
			{
				source: '/',
				destination: '/boards/sport-xi-project',
				permanent: true,
			},
		];
	},
};

export default nextConfig;
