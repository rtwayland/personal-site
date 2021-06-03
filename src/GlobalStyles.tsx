import 'sanitize.css';
import WebFont from 'webfontloader';
import { Global } from '@emotion/react';

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
        },
      }}
    />
  );
};

export default ResetStyles;
