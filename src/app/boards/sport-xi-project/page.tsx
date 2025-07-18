import SwimlaneBoard from '@/components/SwimlaneBoardComponents/SwimlaneBoard';
import ProjectSummaryWidget from '@/components/SwimlaneBoardComponents/ProjectSummaryWidget';

export default function SportXiProjectPage() {
	return (
		<main className="min-h-screen" style={{ background: 'var(--color-bg)' }}>
			<ProjectSummaryWidget />
			<SwimlaneBoard />
		</main>
	);
}
