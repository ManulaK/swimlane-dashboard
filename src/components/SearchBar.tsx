export default function SearchBar() {
	return (
		<form className="flex-1 flex justify-center" role="search" aria-label="Search tasks">
			<label htmlFor="search-tasks" className="sr-only">
				Search tasks
			</label>
			<input
				id="search-tasks"
				type="search"
				placeholder="Search tasks ..."
				className="w-full max-w-md px-4 py-2 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
				autoComplete="off"
			/>
		</form>
	);
}
