import React, { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { ImageContainer, WhatsOnContainer } from "./styles";
import { Slide } from "react-awesome-reveal";
import Spinner from "../../common/Spinner";
import LineBreaker from "../../common/LineBreaker";
import getFullPath from "../../common/utils/imageUtils";
import { fetchComingUpFromWeeklyPosters } from "./data";

const Container = lazy(() => import("../../common/Container"));
const LazyImage = lazy(() => import("../../common/LazyImage"));

interface WhatsOnImage {
	src: string;
	alt: string;
}

type ComingUpState = {
	heading: string;
	image: { src: string; alt: string; srcSet?: string; sizes?: string } | null;
};

const WhatsOn = () => {
	// hardcoded "Every Week" stays as-is
	const whatsOnImages = useMemo<WhatsOnImage[]>(
		() => [
			{
				src: "https://assets.thequeensheadfarnham.co.uk/images/whatson-main.png",
				alt: "What's On Header Image (What's On)",
			},
			{
				src: "https://assets.thequeensheadfarnham.co.uk/images/whatson-openmic.png",
				alt: "Every Tuesday Queen's Head Hosts an Open Mic night for upcoming talent!",
			},
			{
				src: "https://assets.thequeensheadfarnham.co.uk/images/whatson-quiz-karaoke.png",
				alt: "The Queens Head Karaoke Evening is on Thursdays from 9:30",
			},
			{
				src: "https://assets.thequeensheadfarnham.co.uk/images/whatson-livemusic.png",
				alt: "Live Music Every Sunday from 20:30 till midnight!",
			},
		],
		[]
	);

	const [comingUp, setComingUp] = useState<ComingUpState>({
		heading: "Coming up...",
		image: null,
	});
	const [loadingComingUp, setLoadingComingUp] = useState(true);

	useEffect(() => {
		let mounted = true;

		fetchComingUpFromWeeklyPosters()
			.then((data) => {
				if (mounted) setComingUp(data);
			})
			.catch((err) => console.error("Failed to load Coming Up poster:", err))
			.finally(() => {
				if (mounted) setLoadingComingUp(false);
			});

		return () => {
			mounted = false;
		};
	}, []);

	return (
		<WhatsOnContainer className="whats on container">
			<Container padding="">
				<LineBreaker text={comingUp.heading} color="#cccccc" />

				<ImageContainer>
					{loadingComingUp ? (
						<Spinner />
					) : comingUp.image ? (
						// Responsive image (browser chooses from srcSet)
						<img
							src={comingUp.image.src}
							srcSet={comingUp.image.srcSet}
							sizes={comingUp.image.sizes}
							alt={comingUp.image.alt}
							style={{ width: "100%", height: "auto", display: "block" }}
							loading="lazy"
						/>
					) : (
						// fallback if API has no poster
						<LazyImage
							src={getFullPath("images/qh-music-listing-end-of-year.webp")}
							alt="the queens head farnham last friday every month"
						/>
					)}
				</ImageContainer>
			</Container>

			<Container padding="0 2% 10% 2%">
				<LineBreaker text="Every Week" color="#cccccc" />

				{whatsOnImages.map((image, index) => (
					<Slide key={index} direction={"up"} triggerOnce={true}>
						<ImageContainer>
							<Suspense fallback={<Spinner />}>
								<LazyImage src={image.src} alt={image.alt} />
							</Suspense>
						</ImageContainer>
					</Slide>
				))}
			</Container>
		</WhatsOnContainer>
	);
};

export default WhatsOn;
