import React from 'react';
import styled from '@emotion/styled';
import { Route, Switch } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Nav from './components/Nav';
import Home from './components/Home';
import DevPortfolio from './components/DevPortfolio';
import About from './components/About';
import ComingSoon from './components/ComingSoon';
import PhotoApp from './components/projects/PhotoApp';

const App = () => {
  return (
    <Page>
      <GlobalStyles />
      <Nav />
      <MainContent>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={DevPortfolio} />
          <Route path="/portfolio/photo-app" component={PhotoApp} />
          <Route path="/portfolio/synth" component={ComingSoon} />
          <Route path="/portfolio/ui-library" component={ComingSoon} />
          <Route path="/about" component={About} />
        </Switch>
      </MainContent>
    </Page>
  );
};

const Page = styled.div({});

const MainContent = styled.main({
  paddingTop: 24,
  overflow: 'auto',
  height: 'calc(100vh - 80px)',
});

export default App;
