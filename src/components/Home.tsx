import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImage from '../assets/profile-img.jpg';
import Container from './Container';

const Home = () => {
	return (
		<Container>
			<div className="flex flex-col items-center">
				<img src={profileImage} alt="Profile" className="rounded-full overflow-hidden w-[300px] mb-4" />
				<div>
					<a
						href="https://www.linkedin.com/in/raleighwayland/"
						target="_blank"
						rel="noreferrer"
						className="flex items-center my-2"
					>
						<FaLinkedin size={24} style={{ marginRight: 8 }} color="#0077B5" />
						LinkedIn
					</a>
					<a href="https://github.com/rtwayland" target="_blank" rel="noreferrer" className="flex items-center my-2">
						<FaGithub size={24} style={{ marginRight: 8 }} color="#333" />
						Github
					</a>
				</div>
			</div>
			<div className="max-w-[600px] pl-6">
				<h1>Hi, I'm Raleigh!</h1>
				<p>
					I love finding new ways to express creativity and solve problems. By day, I'm lucky enough to work as a
					Software Engineer, creating web applications and crafting user interfaces.
				</p>
				<p>
					Outside of engineering, I love spending time with family, watercolor painting, board games, custom mechanical
					keyboards, and writing.
				</p>
				<p>Thanks for visiting! Feel free to reach out on LinkedIn!</p>
			</div>
		</Container>
	);
};

export default Home;
