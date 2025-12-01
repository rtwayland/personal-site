import profileJpg from '../assets/self-portrait.jpg';
import profileWebp from '../assets/self-portrait.webp';
import Container from './Container';
import Image from './Image';

const Home = () => {
	return (
		<Container>
			<div className="flex flex-col items-center">
				<Image
					srcJpg={profileJpg}
					srcWebp={profileWebp}
					alt="Raleigh Wayland self portrait"
					className="rounded-full overflow-hidden w-[300px] mb-4"
				/>
			</div>
			<div className="max-w-[600px] pl-6">
				<h1 className="text-2xl font-bold">Hey there! I'm Raleigh.</h1>
				<p>
					I'm a writer based in Denver, Colorado, focused on literary short fiction that explores the imperfect, the
					strange, and the hidden, hoping to uncover some of the comedy behind what's typically unsaid.
				</p>
				<p>
					Outside of writing, I'm gushing over film, traveling when possible, and enjoying life with my wife and two
					kids.
				</p>
			</div>
		</Container>
	);
};

export default Home;
