import SwimlaneBoard from '@/components/swimlaneComponents/SwimlaneBoard';
import ProjectSummaryWidget from '@/components/swimlaneComponents/ProjectSummaryWidget';

export default function SportXiProjectPage() {
	return (
		<main className="min-h-screen" style={{ background: 'var(--color-bg)' }}>
			<ProjectSummaryWidget />
			<SwimlaneBoard />
		</main>
	);
}
