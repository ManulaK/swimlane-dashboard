import React from 'react';

export default function UserIcon({ className }: { className?: string }) {
	return (
		<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12 13.73C8.13401 13.73 5 16.864 5 20.73V22.73C5 23.2823 4.55228 23.73 4 23.73C3.44772 23.73 3 23.2823 3 22.73V20.73C3 15.7594 7.02944 11.73 12 11.73C16.9706 11.73 21 15.7594 21 20.73V22.73C21 23.2823 20.5523 23.73 20 23.73C19.4477 23.73 19 23.2823 19 22.73V20.73C19 16.864 15.866 13.73 12 13.73Z"
				fill="currentColor"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12 11.73C14.2091 11.73 16 9.93912 16 7.72998C16 5.52084 14.2091 3.72998 12 3.72998C9.79086 3.72998 8 5.52084 8 7.72998C8 9.93912 9.79086 11.73 12 11.73ZM12 13.73C15.3137 13.73 18 11.0437 18 7.72998C18 4.41627 15.3137 1.72998 12 1.72998C8.68629 1.72998 6 4.41627 6 7.72998C6 11.0437 8.68629 13.73 12 13.73Z"
				fill="currentColor"
			/>
		</svg>
	);
}
