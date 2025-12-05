import { Link, useLocation } from '@tanstack/react-router';

const Nav = () => {
	const { pathname } = useLocation();
	const isAboutActive = pathname === '/about';
	const isNowActive = pathname === '/now';
	const isContactActive = pathname === '/contact';

	return (
		<header className="flex items-center justify-between p-2 px-4 w-full h-[55px] shadow-[0px_2px_4px_2px_rgba(0,0,0,0.05)] box-border z-10">
			<div className="text-2xl font-black cursor-pointer">
				<Link to="/" className="no-underline">
					Raleigh Wayland
				</Link>
			</div>
			<div>
				<a href="https://aberratedobjects.substack.com/" target="_blank" rel="noreferrer">
					Writing
				</a>
				<Link to="/now" className={`no-underline py-1 px-2 mx-1 ${isNowActive ? 'border-b border-[#DFDFDF]' : ''}`}>
					Now
				</Link>
				<Link to="/about" className={`no-underline py-1 px-2 mx-1 ${isAboutActive ? 'border-b border-[#DFDFDF]' : ''}`}>
					About
				</Link>
				<Link
					to="/contact"
					className={`no-underline py-1 px-2 mx-1 ${isContactActive ? 'border-b border-[#DFDFDF]' : ''}`}
				>
					Contact
				</Link>
			</div>
		</header>
	);
};

export default Nav;
