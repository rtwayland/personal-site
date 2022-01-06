// import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { FaExternalLinkSquareAlt, FaGithub } from 'react-icons/fa';
import Container from './Container';

const DevPortfolio = () => {
  const projects = [
    {
      title: 'Photo Reference App',
      relLink: '/portfolio/photo-app',
      siteLink: 'https://photo.raleighwayland.com',
      github: 'https://github.com/rtwayland/photo-reference',
      description:
        'A web app for artists to upload and position reference photos to assist them in the creation of their paintings.',
    },
    {
      title: 'Browser Synth',
      relLink: '/portfolio/synth',
      siteLink: 'https://synth.raleighwayland.com',
      github: 'https://github.com/rtwayland/browser-synth',
      description: 'A music synthesizer in the browser.',
    },
    {
      title: 'UI Library',
      relLink: '/portfolio/ui-library',
      siteLink: 'https://ui.wavv.com/',
      github: '',
      description: 'A UI library built from scratch in React.',
    },
  ];
  return (
    <Container>
      <Projects>
        <h1>Projects</h1>
        {projects.map(({ title, relLink, siteLink, github, description }) => (
          <Project key={title}>
            <Header>
              <h2>
                {/* <Link to={relLink}>{title}</Link> */}
                {title}
              </h2>
              <HeaderLinks>
                {github && (
                  <a href={github} target="_blank" rel="noreferrer">
                    <FaGithub size={24} style={{ marginRight: 8 }} />
                  </a>
                )}
                <a href={siteLink} target="_blank" rel="noreferrer">
                  <FaExternalLinkSquareAlt size={24} />
                </a>
              </HeaderLinks>
            </Header>
            <p>{description}</p>
          </Project>
        ))}
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
});

export default DevPortfolio;
