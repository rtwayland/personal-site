import { createRootRoute, Outlet } from '@tanstack/react-router';
import Nav from '../components/Nav';

export const Route = createRootRoute({
	component: () => (
		<div>
			<Nav />
			<main className="pt-6 overflow-auto h-[calc(100vh-80px)]">
				<Outlet />
			</main>
		</div>
	),
});
