type Props = {
	srcJpg: string;
	srcWebp: string;
	alt: string;
	className?: string;
};

const Image = ({ srcJpg, srcWebp, alt, ...props }: Props) => {
	return (
		<picture {...props}>
			<source srcSet={srcWebp} type="image/webp" />
			<img src={srcJpg} alt={alt} loading="lazy" />
		</picture>
	);
};

export default Image;
