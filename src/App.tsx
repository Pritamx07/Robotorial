import React, { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Projects from "./components/home/Projects";
import Features from "./components/home/Features";
import Contact from "./components/home/Contact";
import Footer from "./components/layout/Footer";
import IoTBasedProject from "./components/home/IoTBasedPorject";
import BannerCarousel from "./components/home/BannerCarousel";
import TeamTestimonials from "./components/home/TeamTestimonials";
import OurGallery from "./components/home/OurGallery"; 

function App() {
	// Change the page title
	useEffect(() => {
		document.title = "Bengal Bits | Future in Motion";
	}, []);

	return (
		<div className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
			<Navbar />
			<main>
				<Hero />
				<BannerCarousel />   
				<OurGallery />       
				<Projects />
				<IoTBasedProject />
				<Features />
				<TeamTestimonials />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default App;
