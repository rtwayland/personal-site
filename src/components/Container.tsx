import styled from '@emotion/styled';

const Container = styled.div({
  margin: '0 auto',
  padding: '0 24px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@media (min-width: 1000px)': {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  '@media (min-width: 1400px)': {
    width: '70%',
  },
});

export default Container;
