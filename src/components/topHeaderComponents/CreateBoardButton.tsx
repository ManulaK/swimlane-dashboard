import Image from 'next/image';
import React from 'react';

const CreateBoardButton: React.FC = () => (
	<button
		type="button"
		className="hidden md:flex px-4 md:px-6 py-2 rounded-[6px] font-normal text-[12px] items-center gap-2 shadow transition whitespace-nowrap hover:bg-[var(--color-dark)]"
		style={{ background: 'var(--color-primary)', color: 'var(--color-white)' }}
		aria-label="Create new board"
	>
		<span style={{ width: 20 }} />
		<span>Create new board</span>
		<Image src="/svg/Plus 2.svg" alt="Plus" width={20} height={20} />
	</button>
);

export default CreateBoardButton;
