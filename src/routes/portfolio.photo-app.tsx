import { createFileRoute } from '@tanstack/react-router';
import PhotoApp from '../components/projects/PhotoApp';

export const Route = createFileRoute('/portfolio/photo-app')({
	component: PhotoApp,
});
