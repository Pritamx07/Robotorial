import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

interface Banner {
	id: number;
	imageUrl: string;
	title: string;
	description?: string;
	width: string;
}

const banners: Banner[] = [
	{
		id: 3,
		imageUrl:
			"https://res.cloudinary.com/dncj7tesy/image/upload/h_900,w_1500/v1745914527/poster_image_page-0001_k21jcc.jpg",
		title: "Robotorial Workshop",
		width: "1800px",
		description: "Turn curiosity into creation - Learn robotics today!",
	},
	{
		id: 1,
		imageUrl:
			"https://res.cloudinary.com/dncj7tesy/image/upload/h_1000,w_600/v1745860417/robo2_dxvlsg.jpg",
		title: "Robotorial Workshop",
		width: "500px",
		description: "Turn curiosity into creation - Learn robotics today!",
	},
	{
		id: 2,
		imageUrl:
			"https://res.cloudinary.com/dncj7tesy/image/upload/h_1000,w_600/v1745914398/poster2_cwflnu.png",
		title: "Robotorial Workshop",
		width: "500px",
		description: "Turn curiosity into creation - Learn robotics today!",
	},
];

const BannerCarousel: React.FC = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isTransitioning, setIsTransitioning] = useState(false);
	const absoluteElementRef = useRef(null);
	const currentImageRef = useRef<HTMLImageElement | null>(null);
	const [minHeight, setMinHeight] = useState<number>(300);

	useEffect(() => {
		if (!currentImageRef.current) return;

		const updateHeight = () => {
			if (currentImageRef.current) {
				setMinHeight(currentImageRef.current.offsetHeight);
			}
		};

		const resizeObserver = new ResizeObserver(updateHeight);
		resizeObserver.observe(currentImageRef.current);

		updateHeight(); // run once on mount/change

		return () => {
			resizeObserver.disconnect();
		};
	}, [currentSlide]);

	const nextSlide = () => {
		if (isTransitioning) return;
		setIsTransitioning(true);
		setCurrentSlide((prev) => (prev + 1) % banners.length);
	};

	const prevSlide = () => {
		if (isTransitioning) return;
		setIsTransitioning(true);
		setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
	};

	// useEffect(() => {
	// 	const timer = setInterval(nextSlide, 5000);
	// 	return () => clearInterval(timer);
	// }, []);

	const handleTransitionEnd = () => {
		setIsTransitioning(false);
	};

	if (banners.length === 0) {
		return null;
	}

	return (
		<section className="py-16 pb-3">
			<div className="container w-screen mx-auto px-4">
				<div className={`max-w-[90%] w-full h-fit mx-auto`}>
					<div className="flex items-center justify-center gap-3 mb-2">
						<Calendar className="w-8 h-8 text-[rgb(var(--primary))]" />
						<h2 className="text-3xl font-bold bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--secondary))] bg-clip-text text-transparent">
							Completed Events
						</h2>
					</div>
					<div className="w-full flex items-center justify-center gap-3 mb-2">
						<button
							onClick={prevSlide}
							className="p-3 rounded-full glass mb-4 glow"
							aria-label="Previous slide"
						>
							<ChevronLeft className="w-8 h-8" />
						</button>

						<button
							onClick={nextSlide}
							className="p-3 rounded-full glass mb-4 glow"
							aria-label="Next slide"
						>
							<ChevronRight className="w-8 h-8" />
						</button>
					</div>

					<div
						className="relative  transition-all duration-500"
						style={{
							minHeight: minHeight,
						}}
					>
						{banners.map((banner, index) => (
							<div
								key={banner.id}
								className={`absolute w-full h-fit flex items-center justify-center transition-all duration-1000 ease-in-out ${
									index === currentSlide
										? "opacity-100 scale-100"
										: "opacity-0 scale-105"
								}`}
								onTransitionEnd={handleTransitionEnd}
								ref={absoluteElementRef}
								style={{
									top: "50%",
									left: "50%",
									transform: "translate(-50%, -50%)",
								}}
							>
								<a
									href={banners[currentSlide].imageUrl}
									target="_blank"
									className=" w-fit h-fit"
									style={{
										height: minHeight,
									}}
								>
									<img
										ref={index === currentSlide ? currentImageRef : null}
										src={banner.imageUrl}
										alt={banner.title}
										className="w-fit h-fit object-contain rounded-3xl"
									/>
								</a>
							</div>
						))}

						<div className="flex absolute bottom-[-30px] left-1/2 -translate-x-1/2  gap-3 z-10">
							{banners.map((_, index) => (
								<button
									key={index}
									onClick={() => setCurrentSlide(index)}
									className={`w-3 h-3 rounded-full transition-all duration-300 ${
										index === currentSlide
											? "bg-white w-8"
											: "bg-white/50 hover:bg-white/70"
									}`}
									aria-label={`Go to slide ${index + 1}`}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BannerCarousel;
