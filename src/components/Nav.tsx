import styled from '@emotion/styled';
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';

const Nav = ({ location }: RouteComponentProps) => {
  return (
    <NavBar>
      <Logo>
        <NavLink to="/">Raleigh Wayland</NavLink>
      </Logo>
      <Right>
        <NavItem to="/portfolio" activeClassName="active">
          Portfolio
        </NavItem>
        {/* <NavItem to="/about" activeClassName="active">
          About
        </NavItem>
        <NavItem to="/contact" activeClassName="active">
          Contact
        </NavItem> */}
      </Right>
    </NavBar>
  );
};

const NavBar = styled.header({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  // position: 'fixed',
  // top: 0,
  // left: 0,
  padding: '8px 16px',
  width: '100%',
  height: 55,
  backgroundColor: '#fafafa',
  boxShadow: '0px 2px 4px 2px rgba(0, 0, 0, 0.05)',
  boxSizing: 'border-box',
  zIndex: 1,
});

const Logo = styled.div({
  fontSize: 24,
  cursor: 'pointer',
  '& > a': {
    textDecoration: 'none',
    color: '#222',
  },
});

const Right = styled.div({});

const NavItem = styled(NavLink)({
  textDecoration: 'none',
  borderBottom: '1px solid transparent',
  padding: '4px 8px',
  margin: '0 4px',
  '&, &:active, &:visited': {
    color: '#222',
  },
  '&.active': {
    borderBottom: '1px solid #222',
  },
});

export default withRouter(Nav);
