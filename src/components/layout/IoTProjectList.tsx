import React, { useState } from "react";
import {
	Plus,
	Minus,
	Wifi,
	Cpu,
	Thermometer,
	Lock,
	Home,
	Activity,
	Move,
	Shield,
	Flame,
	Fingerprint,
	Droplet,
	SprayCan,
} from "lucide-react";

export type SingleProject = {
	id: number;
	title: string;
	student: string;
	description: string;
	videoUrl: string;
	icon: React.ReactNode; // Icon element from lucide-react
};

export type ProjectCategory = {
	id: number;
	title: string;
	desc: string;
	projects: SingleProject[];
};

const IoTProjectList: React.FC = () => {
	// const projects = [
	// 	{
	// 		id: 1,
	// 		title: "Human Following Car",
	// 		student: "Arjun Das",
	// 		description:
	// 			"A mobile robot that uses ultrasonic sensors and IR modules to detect and follow a human. Ideal for carrying loads in warehouses or shopping centers, it demonstrates dynamic obstacle tracking and motion control.",
	// 		videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with real URL
	// 		icon: <Move className="h-6 w-6 text-blue-600" />,
	// 	},
	// 	{
	// 		id: 2,
	// 		title: "Obstacle Avoidance Car",
	// 		student: "Riya Sharma",
	// 		description:
	// 			"This car navigates autonomously by detecting obstacles using ultrasonic sensors. It reroutes itself in real-time, making it ideal for robotics competitions and smart delivery bots.",
	// 		videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
	// 		icon: <Shield className="h-6 w-6 text-rose-600" />,
	// 	},
	// 	{
	// 		id: 3,
	// 		title: "IoT-Based Fire Extinguisher System",
	// 		student: "Tanmay Verma",
	// 		description:
	// 			"A fire detection and extinguishing system using flame sensors, Arduino, and a relay-controlled extinguisher. When fire is detected, the system automatically triggers the extinguisher and sends alerts via IoT.",
	// 		videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
	// 		icon: <Flame className="h-6 w-6 text-orange-600" />,
	// 	},
	// 	{
	// 		id: 4,
	// 		title: "Fingerprint-Based Door Lock",
	// 		student: "Sneha Mukherjee",
	// 		description:
	// 			"A secure door lock system using fingerprint authentication. Powered by a biometric module and Arduino, it ensures access is granted only to authorized users.",
	// 		videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
	// 		icon: <Fingerprint className="h-6 w-6 text-amber-600" />,
	// 	},
	// 	{
	// 		id: 5,
	// 		title: "Smart Irrigation System",
	// 		student: "Rahul Singh",
	// 		description:
	// 			"This system uses a soil moisture sensor and a microcontroller to automate irrigation. It conserves water by activating pumps only when the soil is dry, ensuring efficient farming practices.",
	// 		videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
	// 		icon: <Droplet className="h-6 w-6 text-green-600" />,
	// 	},
	// 	{
	// 		id: 6,
	// 		title: "Contactless Hand Sanitizer Dispenser",
	// 		student: "Ananya Roy",
	// 		description:
	// 			"A hygiene-focused device using an IR sensor and a servo motor to dispense sanitizer without touch. Widely used in public places to prevent virus spread.",
	// 		videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
	// 		icon: <SprayCan className="h-6 w-6 text-cyan-600" />,
	// 	},
	// ];



	return (
		
	);
};

export default IoTProjectList;
