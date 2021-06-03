import React from 'react';
import styled from '@emotion/styled';
import { Route, Switch } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Nav from './components/Nav';
import Home from './components/Home';
import DevPortfolio from './components/DevPortfolio';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <MainContent>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={DevPortfolio} />
        </Switch>
      </MainContent>
    </>
  );
};

const MainContent = styled.main({
  marginTop: 50,
});

export default App;
