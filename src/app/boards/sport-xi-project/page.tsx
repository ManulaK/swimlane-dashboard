import SwimlaneBoard from '@/components/SwimlaneBoard/SwimlaneBoard';
import ProjectSummaryWidget from '@/components/SwimlaneBoard/ProjectSummaryWidget';

export default function SportXiProjectPage() {
	return (
		<main className="min-h-screen" style={{ background: 'var(--color-bg)' }}>
			<ProjectSummaryWidget />
			<SwimlaneBoard />
		</main>
	);
}
