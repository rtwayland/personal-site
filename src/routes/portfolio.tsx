import { createFileRoute } from '@tanstack/react-router';
import DevPortfolio from '../components/DevPortfolio';

export const Route = createFileRoute('/portfolio')({
	component: DevPortfolio,
});
