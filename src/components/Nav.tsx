import { Link, useLocation } from '@tanstack/react-router';

const Nav = () => {
	const { pathname } = useLocation();
	const isPortfolioActive = pathname === '/portfolio' || pathname.startsWith('/portfolio/');

	return (
		<header className="flex items-center justify-between p-2 px-4 w-full h-[55px] shadow-[0px_2px_4px_2px_rgba(0,0,0,0.05)] box-border z-10">
			<div className="text-2xl cursor-pointer">
				{/* @ts-ignore - routeTree types will be available after plugin generates routeTree.gen.ts */}
				<Link to="/" className="no-underline">
					Raleigh Wayland
				</Link>
			</div>
			<div>
				{/* @ts-ignore - routeTree types will be available after plugin generates routeTree.gen.ts */}
				<Link
					to="/portfolio"
					className={`no-underline py-1 px-2 mx-1 ${isPortfolioActive ? 'border-b border-[#DFDFDF]' : ''}`}
				>
					Portfolio
				</Link>
				{/* <Link
          to="/about"
          className={`no-underline border-b border-transparent py-1 px-2 mx-1 text-[#222] ${
            currentPath === '/about' ? 'border-b border-[#777]' : ''
          }`}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={`no-underline border-b border-transparent py-1 px-2 mx-1 text-[#222] ${
            currentPath === '/contact' ? 'border-b border-[#777]' : ''
          }`}
        >
          Contact
        </Link> */}
			</div>
		</header>
	);
};

export default Nav;
