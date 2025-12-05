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
					alt="Self portrait"
					className="rounded-full overflow-hidden w-[300px] mb-4"
				/>
			</div>
			<div className="max-w-[600px] pl-6">
				<h1 className="text-2xl font-bold">This place is...kinda not built.</h1>
				<p className="my-4">But here are some links!</p>
				<div className="flex flex-col gap-2">
					<a
						href="https://aberratedobjects.substack.com/"
						target="_blank"
						rel="noreferrer"
						className="bg-[#D75D39] p-2 rounded-md w-fit"
					>
						Writing
					</a>
					<a
						href="https://www.instagram.com/raleighwayland?igsh=MWJiMG81ZXJpNXRlcw%3D%3D&utm_source=qr"
						target="_blank"
						rel="noreferrer"
						className="bg-[#0855DA] p-2 rounded-md w-fit"
					>
						Instagram
					</a>
				</div>
			</div>
		</Container>
	);
};

export default Home;
