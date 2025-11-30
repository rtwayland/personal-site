import { createRouter, RouterProvider } from '@tanstack/react-router';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4';
import { routeTree } from './routeTree.gen';
import './index.css';

ReactGA.initialize('G-MSKL2ZNZ5J');
ReactGA.send({ hitType: 'pageview' });

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

const rootEl = document.getElementById('root');
if (rootEl) {
	const root = ReactDOM.createRoot(rootEl);
	root.render(
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	);
}
