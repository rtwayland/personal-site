import { Link } from '@tanstack/react-router';
import { FaExternalLinkSquareAlt, FaGithub, FaYoutube } from 'react-icons/fa';
import Container from './Container';

const LANGS = {
	js: 'JavaScript',
	ts: 'TypeScript',
	react: 'ReactJS',
	angular: 'AngularJS',
	node: 'Node.js',
	mongo: 'MongoDB',
};

const DevPortfolio = () => {
	const projects = [
		{
			title: 'UI Library',
			year: 'Current',
			languages: [LANGS.react, LANGS.ts, LANGS.js],
			// relLink: '/portfolio/ui-library',
			siteLink: 'https://ui.wavv.com/',
			github: '',
			description: 'A UI library built from scratch in React.',
		},
		{
			title: 'Photo Reference App',
			year: '2021',
			languages: [LANGS.react, LANGS.js],
			relLink: '/portfolio/photo-app',
			siteLink: 'https://photo.raleighwayland.com',
			github: 'https://github.com/rtwayland/photo-reference',
			description:
				'A web app for artists to upload and position reference photos to assist them in the creation of their paintings.',
		},
		{
			title: 'Browser Synth',
			year: '2020',
			languages: [LANGS.react, LANGS.js],
			// relLink: '/portfolio/synth',
			siteLink: 'https://synth.raleighwayland.com',
			github: 'https://github.com/rtwayland/browser-synth',
			description: 'A music synthesizer in the browser.',
		},
		{
			title: 'Movie Guru',
			year: '2017',
			languages: [`${LANGS.angular} 4`, LANGS.js, LANGS.node],
			// relLink: '/portfolio/movie-guru',
			siteLink: '',
			github: 'https://github.com/rtwayland/movie-guru',
			youtube: 'https://youtu.be/zZH0NZSSJjI',
			description: 'A web app to generate movie suggestions and where you can find those movies on the internet.',
		},
		{
			title: 'Fox Briar Properties',
			year: '2017',
			languages: [`${LANGS.angular} 1.6`, LANGS.js, LANGS.node, LANGS.mongo],
			// relLink: '/portfolio/fox-briar',
			siteLink: '',
			github: 'https://github.com/rtwayland/apt-management-site',
			youtube: 'https://youtu.be/SuIbv7sq7So',
			description: 'A website to manage properties and tenants.',
		},
		{
			title: 'Dezvu Events',
			year: '2017',
			languages: [`${LANGS.angular} 1.6`, LANGS.js],
			// relLink: '/portfolio/dezvu',
			youtube: 'https://youtu.be/p_t6TVLRVSg',
			description: 'An event management website.',
		},
	];
	return (
		<Container>
			<div>
				<h1>Projects</h1>
				{projects.map((project) => {
					const { title, year, languages, relLink, siteLink, github, youtube, description } = project;
					return (
						<div
							key={title}
							className="bg-[#fafafa] shadow-[0px_2px_4px_2px_rgba(0,0,0,0.05)] rounded-[4px] max-w-[650px] px-4 py-2 mb-4"
						>
							<div className="flex items-center justify-between">
								<div className="flex flex-col">
									<h2 className="m-0">{relLink ? <Link to={relLink}>{title}</Link> : title}</h2>
									<div className="flex items-center gap-1">
										<div className="text-sm">{year}</div>
										{year && languages && <div className="text-sm">•</div>}
										{languages && <div className="text-sm">{languages.join(', ')}</div>}
									</div>
								</div>

								<div className="flex items-center gap-2">
									{github && (
										<a href={github} target="_blank" rel="noreferrer">
											<FaGithub size={24} color="#333" />
										</a>
									)}
									{youtube && (
										<a href={youtube} target="_blank" rel="noreferrer">
											<FaYoutube size={24} color="#F00" />
										</a>
									)}
									{siteLink && (
										<a href={siteLink} target="_blank" rel="noreferrer">
											<FaExternalLinkSquareAlt size={24} />
										</a>
									)}
								</div>
							</div>
							<p>{description}</p>
						</div>
					);
				})}
			</div>
		</Container>
	);
};

export default DevPortfolio;
