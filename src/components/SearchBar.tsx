'use client';
import Image from 'next/image';
import { useTaskStore } from '../store/taskStore';

export default function SearchBar() {
	const searchQuery = useTaskStore((s) => s.searchQuery);
	const setSearchQuery = useTaskStore((s) => s.setSearchQuery);

	return (
		<form className="relative w-full max-w-md" role="search" aria-label="Search tasks" onSubmit={(e) => e.preventDefault()}>
			<label htmlFor="search-tasks" className="sr-only">
				Search tasks
			</label>
			<span className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center">
				<Image src="/svg/Search.svg" alt="Search" width={16} height={16} className="text-[#777E91]" />
			</span>
			<input
				id="search-tasks"
				type="search"
				placeholder="Search tasks ..."
				className="w-full pl-9 pr-4 py-2 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-[12px] font-normal"
				autoComplete="off"
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
			/>
		</form>
	);
}
