import 'sanitize.css';
import WebFont from 'webfontloader';
import { Global } from '@emotion/react';
import { darken } from 'polished';

const ResetStyles = () => {
  WebFont.load({
    google: {
      families: ['Cutive Mono'],
    },
  });
  return (
    <Global
      styles={{
        'html,body': {
          fontFamily: "'Cutive Mono', sans-serif",
          backgroundColor: '#fafafa',
          color: '#222',
        },
        a: {
          textDecoration: 'none',
          color: '#007FFF',
          '&:visited': {
            color: '#007FFF',
          },
          '&:hover': {
            color: darken(0.1, '#007FFF'),
          },
        },
      }}
    />
  );
};

export default ResetStyles;
