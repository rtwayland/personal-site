import styled from '@emotion/styled';
import Container from '../Container';
import app from '../../assets/photo-reference-images/01_app.png';
import settings from '../../assets/photo-reference-images/02_settings.png';
import positioning from '../../assets/photo-reference-images/03_positioning.png';
import gridSizing from '../../assets/photo-reference-images/05_settings-sizing.png';
import secondGrid from '../../assets/photo-reference-images/06_grid-second.png';
import dualGrid from '../../assets/photo-reference-images/07_dual-grid-display.png';
import colorPicker from '../../assets/photo-reference-images/08_color-picker.png';
import colorPalette from '../../assets/photo-reference-images/09_color-palette.png';
import download from '../../assets/photo-reference-images/10_downloading.png';
import downloadComplete from '../../assets/photo-reference-images/11_download-complete.png';

const PhotoApp = () => {
  return (
    <Container>
      <div>
        <h1>Photo Reference App</h1>
        <Section>
          <p>
            This app was born out of my own needs. I became interested in
            watercolor painting at the beginning of 2021 and needed an easy way
            to map real photographs to the various sizes of watercolor paper I
            was using to paint the image.
          </p>
          <Image src={app} alt="App interface with imported file" />
        </Section>
        <Section>
          <p>
            The app allows you to set the size and orientation of your
            watercolor paper and import the image you wish to paint. You can
            also stretch the image to fit the width and height of the watercolor
            paper or display the full image within the paper's container.
          </p>
          <Image src={settings} alt="App with open settings" />
        </Section>
        <Section>
          <p>
            The image can be scaled up within the paper and dragged around to
            fit the desired frame.
          </p>
          <Image src={positioning} alt="Scaling controls" />
        </Section>
        <Section>
          <p>
            The app allows you to add a grid over the top of the image to aid in
            the drawing process. The size of the grid squares can be adjusted to
            the desired specificity.
          </p>
          <Image src={gridSizing} alt="Grid settings" />
        </Section>
        <Section>
          <p>
            A second grid with separate sizing and color can be added to give
            even finer-grained drawing aid (the larger grid can be used for
            drawing more basic shapes, and the smaller grid can be used for
            drawing more detailed shapes, like the features of a face).
          </p>
          <SideBySide>
            <Image src={secondGrid} alt="Second grid settings" width="50%" />
            <Image src={dualGrid} alt="Dual grid display" width="50%" />
          </SideBySide>
        </Section>
        <Section>
          <p>
            To further aid the artist, the app has a built-in color picker.
            Sometimes colors are not always what they seem to be, so it is
            convenient to isolate a specific color for reference. These colors
            can be named and categorized for viewing in the color palette.
          </p>
          <SideBySide>
            <Image src={colorPicker} alt="Color picker" width="50%" />
            <Image src={colorPalette} alt="Color palette" width="50%" />
          </SideBySide>
        </Section>
        <Section>
          <p>
            Finally, the image can be downloaded from the app. This is intended
            for those who have a grid over the top of the image. This image can
            then be used on a tablet or printed on paper for reference while
            painting.
          </p>
          <SideBySide>
            <Image src={download} alt="Downloading" />
            <Image src={downloadComplete} alt="Download complete" />
          </SideBySide>
        </Section>
      </div>
    </Container>
  );
};

const Section = styled.section({
  marginBottom: 70,
  '& > p': {
    marginBottom: 24,
  },
});

const Image = styled.img(({ width }) => ({
  width,
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
}));

const SideBySide = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  columnGap: 16,
});

export default PhotoApp;
