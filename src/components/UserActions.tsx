export default function UserActions() {
	return (
		<nav aria-label="User actions" className="flex items-center gap-4">
			<button
				type="button"
				className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[var(--color-dark)] transition"
				aria-label="Create new board"
			>
				Create new board +
			</button>
			<div
				className="w-10 h-10 rounded-full bg-[var(--color-border)] flex items-center justify-center text-[var(--color-primary)] font-bold"
				aria-label="User avatar"
			>
				A
			</div>
		</nav>
	);
}
