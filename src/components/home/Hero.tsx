import React, { useEffect, useRef } from "react";
import { Button } from "../ui/Button";
import RobotHelper from "./RobotHelper";
import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
	const heroRef = useRef<HTMLElement>(null);
	const textRef = useRef<HTMLHeadingElement>(null);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (!heroRef.current) return;

			const { clientX, clientY } = e;
			const { width, height } = heroRef.current.getBoundingClientRect();

			// Calculate percentage of mouse position
			const x = (clientX / width - 0.5) * 2; // -1 to 1
			const y = (clientY / height - 0.5) * 2; // -1 to 1

			// Apply parallax effect to the background
			heroRef.current.style.setProperty("--x", `${x * 5}px`);
			heroRef.current.style.setProperty("--y", `${y * 5}px`);

			// Apply text movement if textRef exists
			if (textRef.current) {
				textRef.current.style.transform = `translate(${x * -10}px, ${
					y * -10
				}px)`;
			}
		};

		document.addEventListener("mousemove", handleMouseMove);
		return () => document.removeEventListener("mousemove", handleMouseMove);
	}, []);

	const scrollToProjects = () => {
		document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section
			ref={heroRef}
			id="home"
			className="relative min-h-screen flex items-center justify-center overflow-hidden"
			style={{
				backgroundPosition: "calc(50% + var(--x, 0)) calc(50% + var(--y, 0))",
			}}
		>
			{/* Tech Background with animated gradient */}
			<div className="absolute inset-0 circuit-bg"></div>
			{/* Animated gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-b from-[rgba(var(--background),0.7)] via-transparent to-[rgb(var(--background))]"></div>
			{/* Particle effect overlay */}
			<div
				className="absolute inset-0"
				style={{
					backgroundImage:
						"radial-gradient(rgba(var(--primary), 0.1) 1px, transparent 1px)",
					backgroundSize: "50px 50px",
				}}
			></div>
			{/* Robot helpers */}
			<RobotHelper
				position="right"
				variant="small"
				className="top-32 animate-bounce"
				message="Welcome to Bengal Bits!"
			/>
			<RobotHelper position="left" variant="small" className="top-[40%]" />
			<div className=" absolute w-screen h-screen bg-gray-900 bg-opacity-55 z-10"></div>
			<div className=" absolute z-0">
				{/* For small screens */}
				<video autoPlay loop muted className="block md:hidden">
					<source src="https://res.cloudinary.com/dncj7tesy/video/upload/q_auto:low/h_1000,w_2000/v1745923301/heroVideo_gkbyfn.mp4" />
				</video>
				{/* For md and up */}

				<video autoPlay loop muted className="hidden md:block">
					<source src="https://res.cloudinary.com/dncj7tesy/video/upload/q_auto:low/h_1000,w_2000/v1745923301/heroVideo_gkbyfn.mp4" />
				</video>
			</div>
			<div className="container mx-auto px-4 z-10 text-center">
				<div className="max-w-3xl mx-auto">
					<h1
						ref={textRef}
						className="text-5xl md:text-7xl font-bold mb-6 transition-transform duration-300 ease-out"
					>
						<span className="text-gradient">Robotorial!</span>
						<br />
						<span className="text-[rgb(var(--foreground))]">
							Future in Motion
						</span>
					</h1>

					<p className="text-xl mb-8 text-[rgb(var(--foreground))]/80 max-w-xl mx-auto">
						Pioneering the next generation of intelligent robotics systems that
						reshape industries and enhance human capabilities.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="https://docs.google.com/forms/d/e/1FAIpQLSdYQLyKjoy915H8-6begJRTtekw5iGABouWtREsin0-9ZvhCA/viewform"
							target="_blank"
						>
							<Button size="lg">Register Now</Button>
						</a>
						<a href="#contact">
							<Button variant="outline" size="lg">
								Contact Us
							</Button>
						</a>
					</div>
				</div>
			</div>
			{/* Scroll down indicator */}
			<div className="absolute z-10 bottom-8 left-1/2 transform -translate-x-1/2 text-center">
				<button
					onClick={scrollToProjects}
					className="animate-bounce flex flex-col items-center text-[rgb(var(--foreground))]/60 hover:text-[rgb(var(--primary))] transition-colors"
				>
					<span className="text-sm mb-2">Discover Our Projects</span>
					<ChevronDown />
				</button>
			</div>
		</section>
	);
};

export default Hero;
