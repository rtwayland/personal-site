import { createFileRoute } from '@tanstack/react-router';
import Container from '../components/Container';

export const Route = createFileRoute('/now')({
	component: () => {
		return (
			<Container>
				<div className="max-w-[800px]">Now</div>
			</Container>
		);
	},
});
