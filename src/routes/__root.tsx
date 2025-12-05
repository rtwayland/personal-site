import { createRootRoute, Outlet } from '@tanstack/react-router';
import Nav from '../components/Nav';

export const Route = createRootRoute({
	component: () => (
		<div className="overflow-hidden">
			<Nav />
			<main className="pt-6 overflow-y-auto overflow-x-hidden h-[calc(100vh-80px)]">
				<Outlet />
			</main>
		</div>
	),
});
