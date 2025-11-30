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
import Container from '../Container';

const PhotoApp = () => {
	return (
		<Container>
			<div>
				<h1>Photo Reference App</h1>
				<section className="mb-[70px] [&>p]:mb-6">
					<p>
						This app was born out of my own needs. I became interested in watercolor painting at the beginning of 2021
						and needed an easy way to map real photographs to the various sizes of watercolor paper I was using to paint
						the image.
					</p>
					<p>
						The photo used in these demo images is by{' '}
						<a href="https://unsplash.com/@mathildelangevin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
							Mathilde Langevin
						</a>
						, sourced from <a href="https://unsplash.com/">Unsplash</a>.
					</p>
					<img src={app} alt="App interface with imported file" className="block mx-auto" />
				</section>
				<section className="mb-[70px] [&>p]:mb-6">
					<p>
						The app allows you to set the size and orientation of your watercolor paper and import the image you wish to
						paint. You can also stretch the image to fit the width and height of the watercolor paper or display the
						full image within the paper's container.
					</p>
					<img src={settings} alt="App with open settings" className="block mx-auto" />
				</section>
				<section className="mb-[70px] [&>p]:mb-6">
					<p>The image can be scaled up within the paper and dragged around to fit the desired frame.</p>
					<img src={positioning} alt="Scaling controls" className="block mx-auto" />
				</section>
				<section className="mb-[70px] [&>p]:mb-6">
					<p>
						The app allows you to add a grid over the top of the image to aid in the drawing process. The size of the
						grid squares can be adjusted to the desired specificity.
					</p>
					<img src={gridSizing} alt="Grid settings" className="block mx-auto" />
				</section>
				<section className="mb-[70px] [&>p]:mb-6">
					<p>
						A second grid with separate sizing and color can be added to give even finer-grained drawing aid (the larger
						grid can be used for drawing more basic shapes, and the smaller grid can be used for drawing more detailed
						shapes, like the features of a face).
					</p>
					<div className="flex justify-between items-start gap-4">
						<img src={secondGrid} alt="Second grid settings" className="block w-1/2" />
						<img src={dualGrid} alt="Dual grid display" className="block w-1/2" />
					</div>
				</section>
				<section className="mb-[70px] [&>p]:mb-6">
					<p>
						To further aid the artist, the app has a built-in color picker. Sometimes colors are not always what they
						seem to be, so it is convenient to isolate a specific color for reference. These colors can be named and
						categorized for viewing in the color palette.
					</p>
					<div className="flex justify-between items-start gap-4">
						<img src={colorPicker} alt="Color picker" className="block w-1/2" />
						<img src={colorPalette} alt="Color palette" className="block w-1/2" />
					</div>
				</section>
				<section className="mb-[70px] [&>p]:mb-6">
					<p>
						Finally, the image can be downloaded from the app. This is intended for those who have a grid over the top
						of the image. This image can then be used on a tablet or printed on paper for reference while painting.
					</p>
					<div className="flex justify-between items-start gap-4">
						<img src={download} alt="Downloading" className="block" />
						<img src={downloadComplete} alt="Download complete" className="block" />
					</div>
				</section>
			</div>
		</Container>
	);
};

export default PhotoApp;
