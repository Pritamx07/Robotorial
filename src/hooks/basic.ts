import React, { useState } from "react";
import {
	Plus,
	Minus,
	Wifi,
	Move,
	Shield,
	Flame,
	Fingerprint,
	Droplet,
	SprayCan,
} from "lucide-react";

import { Recycle, Mic, UserCheck, Map, Hand, Bluetooth } from "lucide-react";

export type SingleProject = {
	id: number;
	title: string;
	student: string;
	description: string;
	videoUrl: string;
	icon: React.ReactNode;
};

export type ProjectCategory = {
	id: number;
	title: string;
	desc: string;
	projects: SingleProject[];
};

const IoTProjectList: React.FC = () => {
	const projects: ProjectCategory[] = [
		{
			id: 1,
			title: "Smart Technology Projects",
			desc: "Projects demonstrating the use of smart technology in everyday life, including AI, sensors, automation, and more.",
			projects: [
				{
					id: 1,
					title: "AI-Powered Waste Classifier",
					student: "Megha Rathi",
					description:
						"A smart dustbin that uses a camera and a pre-trained machine learning model to classify waste into biodegradable and non-biodegradable categories for better waste management.",
					videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
					icon: <Recycle className="h-6 w-6 text-lime-600" />,
				},
				{
					id: 2,
					title: "Voice-Controlled Home Automation",
					student: "Kunal Bhattacharya",
					description:
						"A system that allows users to control home appliances like lights and fans using voice commands via Google Assistant or Alexa, integrated with NodeMCU and IFTTT.",
					videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
					icon: <Mic className="h-6 w-6 text-purple-600" />,
				},
				{
					id: 3,
					title: "Smart Attendance System using Face Recognition",
					student: "Ritika Pal",
					description:
						"An AI-based attendance tracker using OpenCV and Python that automatically marks attendance by recognizing students' faces via webcam.",
					videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
					icon: <UserCheck className="h-6 w-6 text-indigo-600" />,
				},
			],
		},

		{
			id: 2,
			title: "IoT-Based Projects",
			desc: "Explore innovative Internet of Things (IoT) projects created by our students, showcasing the integration of hardware, software, and connectivity.",
			projects: [
				{
					id: 1,
					title: "Human Following Car",
					student: "Arjun Das",
					description:
						"A mobile robot that uses ultrasonic sensors and IR modules to detect and follow a human. Ideal for carrying loads in warehouses or shopping centers, it demonstrates dynamic obstacle tracking and motion control.",
					videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
					icon: <Move className="h-6 w-6 text-blue-600" />,
				},
				{
					id: 2,
					title: "Obstacle Avoidance Car",
					student: "Riya Sharma",
					description:
						"This car navigates autonomously by detecting obstacles using ultrasonic sensors. It reroutes itself in real-time, making it ideal for robotics competitions and smart delivery bots.",
					videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
					icon: <Shield className="h-6 w-6 text-rose-600" />,
				},
				{
					id: 3,
					title: "IoT-Based Fire Extinguisher System",
					student: "Tanmay Verma",
					description:
						"A fire detection and extinguishing system using flame sensors, Arduino, and a relay-controlled extinguisher. When fire is detected, the system automatically triggers the extinguisher and sends alerts via IoT.",
					videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
					icon: <Flame className="h-6 w-6 text-orange-600" />,
				},
				{
					id: 4,
					title: "Fingerprint-Based Door Lock",
					student: "Sneha Mukherjee",
					description:
						"A secure door lock system using fingerprint authentication. Powered by a biometric module and Arduino, it ensures access is granted only to authorized users.",
					videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
					icon: <Fingerprint className="h-6 w-6 text-amber-600" />,
				},
				{
					id: 5,
					title: "Smart Irrigation System",
					student: "Rahul Singh",
					description:
						"This system uses a soil moisture sensor and a microcontroller to automate irrigation. It conserves water by activating pumps only when the soil is dry, ensuring efficient farming practices.",
					videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
					icon: <Droplet className="h-6 w-6 text-green-600" />,
				},
				{
					id: 6,
					title: "Contactless Hand Sanitizer Dispenser",
					student: "Ananya Roy",
					description:
						"A hygiene-focused device using an IR sensor and a servo motor to dispense sanitizer without touch. Widely used in public places to prevent virus spread.",
					videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
					icon: <SprayCan className="h-6 w-6 text-cyan-600" />,
				},
			],
		},

		{
			id: 3,
			title: "Robotics Projects",
			desc: "A showcase of student-built robots for different applications — from automation to competition-ready machines.",
			projects: [
				{
					id: 1,
					title: "Maze Solving Robot",
					student: "Nikhil Ghosh",
					description:
						"An autonomous robot that uses IR sensors and line-following algorithms to find the shortest path through a maze.",
					videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
					icon: <Map className="h-6 w-6 text-yellow-600" />,
				},
				{
					id: 2,
					title: "Ball Picking and Placing Robot",
					student: "Priya Sinha",
					description:
						"A robotic arm mounted on a mobile platform that can detect and pick up small balls using a gripper, and place them into containers using path planning.",
					videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
					icon: <Hand className="h-6 w-6 text-fuchsia-600" />,
				},
				{
					id: 3,
					title: "Bluetooth-Controlled Robot",
					student: "Ravi Kumar",
					description:
						"A basic robot car that can be controlled via a smartphone Bluetooth app, using an Arduino and an HC-05 Bluetooth module.",
					videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
					icon: <Bluetooth className="h-6 w-6 text-sky-600" />,
				},
			],
		},
	];