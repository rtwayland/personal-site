import type { ReactNode } from 'react';

const Container = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
	return (
		<div
			className={`mx-auto px-6 box-border flex flex-col items-center lg:w-4/5 lg:flex-row lg:justify-around lg:items-start xl:w-[70%] ${className}`}
		>
			{children}
		</div>
	);
};

export default Container;
