import { createFileRoute, Link } from '@tanstack/react-router';
import profileJpg from '../assets/self-portrait.jpg';
import profileWebp from '../assets/self-portrait.webp';
import Container from '../components/Container';
import Image from '../components/Image';

export const Route = createFileRoute('/')({
	component: () => {
		return (
			<Container>
				<Image
					srcJpg={profileJpg}
					srcWebp={profileWebp}
					alt="Self portrait"
					className="rounded-full overflow-hidden min-w-[300px] w-[300px] mb-4"
				/>
				<div className="flex flex-col gap-4 max-w-[600px] pl-6 text-lg">
					<h1 className="text-3xl font-bold">Hey there! I'm Raleigh.</h1>
					<p>
						I'm a writer based in Denver, CO, obsessed with storytelling. Whether it's prose, film, painting...I'm
						interested.
					</p>
					<p>
						This site is my little creative hub where you can find my work and see <Link to="/now">what I'm up to</Link>
						. Recently, I've been writing short fiction—mostly flash, prose poems, and some short stories. I like
						writing about imperfect, strange,{' '}
						<a href="https://www.youtube.com/watch?v=du16oP0DPao&t=59s" target="_blank" rel="noreferrer">
							aberrated
						</a>{' '}
						people and finding the comedy in what's typically unsaid or uncomfortable. I do have a weird sense of humor,
						though...
					</p>
					<p>
						Thanks so much for stopping by! Feel free to reach out on the socials (
						<a href="https://substack.com/@raleighwayland" target="_blank" rel="noreferrer">
							Substack
						</a>
						,{' '}
						<a
							href="https://www.instagram.com/raleighwayland?igsh=MWJiMG81ZXJpNXRlcw%3D%3D&utm_source=qr"
							target="_blank"
							rel="noreferrer"
						>
							Instagram
						</a>
						) to say hi or to ask about my work.
					</p>
				</div>
			</Container>
		);
	},
});
