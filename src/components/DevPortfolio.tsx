import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
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
      description:
        'A web app to generate movie suggestions and where you can find those movies on the internet.',
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
      <Projects>
        <h1>Projects</h1>
        {projects.map((project) => {
          const {
            title,
            year,
            languages,
            relLink,
            siteLink,
            github,
            youtube,
            description,
          } = project;
          return (
            <Project key={title}>
              <Header>
                <TitleContainer>
                  <Title>
                    {relLink ? <Link to={relLink}>{title}</Link> : title}
                  </Title>
                  <Meta>
                    <SubText>{year}</SubText>
                    {year && languages && <SubText>•</SubText>}
                    {languages && <SubText>{languages.join(', ')}</SubText>}
                  </Meta>
                </TitleContainer>

                <HeaderLinks>
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
                </HeaderLinks>
              </Header>
              <p>{description}</p>
            </Project>
          );
        })}
      </Projects>
    </Container>
  );
};

const Projects = styled.div({});

const Project = styled.div({
  backgroundColor: '#fafafa',
  boxShadow: '0px 2px 4px 2px rgba(0, 0, 0, 0.05)',
  borderRadius: 4,
  maxWidth: 650,
  padding: '8px 16px',
  marginBottom: 16,
});

const Header = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const HeaderLinks = styled.div({
  display: 'flex',
  alignItems: 'center',
  columnGap: 8,
});

const TitleContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const Meta = styled.div({
  display: 'flex',
  alignItems: 'center',
  columnGap: 4,
});

const Title = styled.h2({
  margin: 0,
});

const SubText = styled.div({
  fontSize: 14,
});

export default DevPortfolio;
