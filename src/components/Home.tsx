import React from 'react';
import styled from '@emotion/styled';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Container from './Container';
import profileImage from '../assets/profile-img.jpg';

const Home = () => {
  return (
    <Container>
      <Info>
        <ProfileImage src={profileImage} />
        <Links>
          <Link
            href="https://www.linkedin.com/in/raleighwayland/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={24} style={{ marginRight: 8 }} color="#0077B5" />
            LinkedIn
          </Link>
          <Link
            href="https://github.com/rtwayland"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={24} style={{ marginRight: 8 }} color="#333" />
            Github
          </Link>
        </Links>
      </Info>
      <Description>
        <h1>Hi, I'm Raleigh!</h1>
        <p>
          I love finding new ways to express creativity and solve problems. By
          day, I'm lucky enough to work as a Software Engineer, creating web
          applications and crafting user interfaces.
        </p>
        <p>
          Outside of engineering, I love spending time with family, watercolor
          painting, board games, custom mechanical keyboards, and
          writing.
        </p>
        <p>Thanks for visiting! Feel free to reach out on LinkedIn!</p>
      </Description>
    </Container>
  );
};

const ProfileImage = styled.img({
  borderRadius: '50%',
  overflow: 'hidden',
  width: 300,
  marginBottom: 16,
});

const Info = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Description = styled.div({
  maxWidth: 600,
  paddingLeft: 24,
});

const Links = styled.div({});

const Link = styled.a({
  display: 'flex',
  alignItems: 'center',
  margin: '8px 0',
});

export default Home;
