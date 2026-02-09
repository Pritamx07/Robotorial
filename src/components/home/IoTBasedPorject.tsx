import React, { useState } from "react";
import AnimateOnScroll from "../AnimateOnScroll.tsx";
// import IoTProjectList from "../layout/IoTProjectList.tsx";

import {
	Plus,
	Minus,
	Move,
	Shield,
	Flame,
	Fingerprint,
	Droplet,
	SprayCan,
	Trash2,
	CloudSun,
	TrainFront,
} from "lucide-react";

import { Recycle, Mic, UserCheck, Map, Hand, Bluetooth } from "lucide-react";

export type SingleProject = {
	id: number;
	title: string;
	student: string;
	description: string;
	videoUrl: string | null;
	icon: React.ReactNode;
};

export type ProjectCategory = {
	id: number;
	title: string;
	desc: string;
	projects: SingleProject[];
};

const IoTBasedProject: React.FC = () => {
	const projects: ProjectCategory[] = [
		{
			id: 1,
			title: "Smart Technology Projects",
			desc: "Projects demonstrating the use of smart technology in everyday life, including AI, sensors, automation, and more.",
			projects: [
				{
					id: 1,
					title: "Smart Dustbin",
					student: "Megha Rathi",
					description:
						"An automatic dustbin system that uses an ultrasonic sensor to detect hand proximity and opens the lid without physical contact. Ideal for enhancing hygiene in homes, hospitals, and public places.",
					videoUrl:
						"https://www.youtube.com/embed/P6rxfz6eucM?si=J83Ix7Kw7eLPJK3m",
					icon: <Trash2 className="h-6 w-6 text-emerald-600" />,
				},
				{
					id: 2,
					title: "Smart Irrigation System",
					student: "Rahul Singh",
					description:
						"This system uses a soil moisture sensor and a microcontroller to automate irrigation. It conserves water by activating pumps only when the soil is dry, ensuring efficient farming practices.",
					videoUrl: "https://youtube.com/embed/9SPdfLNud5g?si=rGBwZjuiJVJm8de8",
					icon: <Droplet className="h-6 w-6 text-green-600" />,
				},
				{
					id: 3,
					title: "Smart Fire Extinguisher System",
					student: "Tanmay Verma",
					description:
						"A fire detection and extinguishing system using flame sensors, Arduino, and a relay-controlled extinguisher. When fire is detected, the system automatically triggers the extinguisher and sends alerts via IoT.",
					videoUrl:
						"https://www.youtube.com/embed/yUsgxp0pOF8?si=i4RxiZHnqp6hJCWu",
					icon: <Flame className="h-6 w-6 text-orange-600" />,
				},
				{
					id: 4,
					title: "Automatic Rail Gate System",
					student: "Your Name",
					description:
						"An automated railway crossing system that uses IR sensors and Arduino to detect train movement and control gate operation. It ensures safety by reducing human error and preventing accidents at unmanned level crossings.",
					videoUrl:
						"https://www.youtube.com/embed/uJw5O_iNja4?si=ZmjdP2GynH360iky",
					icon: <TrainFront className="h-6 w-6 text-gray-700" />,
				},

				{
					id: 5,
					title: "AI-Powered Waste Classifier",
					student: "Megha Rathi",
					description:
						"A smart dustbin that uses a camera and a pre-trained machine learning model to classify waste into biodegradable and non-biodegradable categories for better waste management.",
					videoUrl: null,
					icon: <Recycle className="h-6 w-6 text-lime-600" />,
				},
				{
					id: 6,
					title: "Voice-Controlled Home Automation",
					student: "Kunal Bhattacharya",
					description:
						"A system that allows users to control home appliances like lights and fans using voice commands via Google Assistant or Alexa, integrated with NodeMCU and IFTTT.",
					videoUrl: null,
					icon: <Mic className="h-6 w-6 text-purple-600" />,
				},
				{
					id: 7,
					title: "Smart Attendance System using Face Recognition",
					student: "Ritika Pal",
					description:
						"An AI-based attendance tracker using OpenCV and Python that automatically marks attendance by recognizing students' faces via webcam.",
					videoUrl: null,
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
					id: 8,
					title: "IoT Weather Monitoring System",
					student: "Your Name",
					description:
						"A smart system that collects real-time weather data such as temperature, humidity, and atmospheric pressure using sensors. The data is then transmitted to the cloud for monitoring and analysis, enabling remote tracking and forecasting.",
					videoUrl:
						"https://www.youtube.com/embed/4vynlql08lQ?si=pAwCojqDNG7Qa0c6",
					icon: <CloudSun className="h-6 w-6 text-blue-500" />,
				},
				{
					id: 9,
					title: "Obstacle Avoidance Car",
					student: "Riya Sharma",
					description:
						"This car navigates autonomously by detecting obstacles using ultrasonic sensors. It reroutes itself in real-time, making it ideal for robotics competitions and smart delivery bots.",
					videoUrl: null,
					icon: <Shield className="h-6 w-6 text-rose-600" />,
				},

				{
					id: 10,
					title: "Fingerprint-Based Door Lock",
					student: "Sneha Mukherjee",
					description:
						"A secure door lock system using fingerprint authentication. Powered by a biometric module and Arduino, it ensures access is granted only to authorized users.",
					videoUrl: null,
					icon: <Fingerprint className="h-6 w-6 text-amber-600" />,
				},

				{
					id: 11,
					title: "Contactless Hand Sanitizer Dispenser",
					student: "Ananya Roy",
					description:
						"A hygiene-focused device using an IR sensor and a servo motor to dispense sanitizer without touch. Widely used in public places to prevent virus spread.",
					videoUrl: null,
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
					id: 12,
					title: "Human Following Car",
					student: "Arjun Das",
					description:
						"A mobile robot that uses ultrasonic sensors and IR modules to detect and follow a human. Ideal for carrying loads in warehouses or shopping centers, it demonstrates dynamic obstacle tracking and motion control.",
					videoUrl:
						"https://www.youtube.com/embed/qbbJCB2v4ik?si=7KH-_wUaancEOMh7",
					icon: <Move className="h-6 w-6 text-blue-600" />,
				},
				{
					id: 13,
					title: "Maze Solving Robot",
					student: "Nikhil Ghosh",
					description:
						"An autonomous robot that uses IR sensors and line-following algorithms to find the shortest path through a maze.",
					videoUrl: null,
					icon: <Map className="h-6 w-6 text-yellow-600" />,
				},
				{
					id: 14,
					title: "Ball Picking and Placing Robot",
					student: "Priya Sinha",
					description:
						"A robotic arm mounted on a mobile platform that can detect and pick up small balls using a gripper, and place them into containers using path planning.",
					videoUrl: null,
					icon: <Hand className="h-6 w-6 text-fuchsia-600" />,
				},
				{
					id: 15,
					title: "Bluetooth-Controlled Robot",
					student: "Ravi Kumar",
					description:
						"A basic robot car that can be controlled via a smartphone Bluetooth app, using an Arduino and an HC-05 Bluetooth module.",
					videoUrl: null,
					icon: <Bluetooth className="h-6 w-6 text-sky-600" />,
				},
			],
		},
	];

	const [expandedProject, setExpandedProject] = useState<number | null>(null);

	const toggleProject = (projectId: number) => {
		if (expandedProject === projectId) {
			setExpandedProject(null);
		} else {
			setExpandedProject(projectId);
		}
	};

	return (
		<>
			{projects.map((project) => (
				<section className=" bg-[rgb(var(--background))] py-16 relative overflow-hidden ">
					<div className="container mx-auto px-4 relative">
						<AnimateOnScroll className="translate-y-10">
							<h2 className="text-4xl font-bold text-center mb-4 text-gradient">
								{project.title}
							</h2>
						</AnimateOnScroll>
						<AnimateOnScroll className="translate-y-10">
							<p className="text-[rgb(var(--foreground))]/70 text-center mb-12 max-w-2xl mx-auto">
								{project.desc}
							</p>
						</AnimateOnScroll>
						<AnimateOnScroll className="scale-95">
							<div className="max-w-7xl mx-auto">
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
									{project.projects.map((project) => (
										<div
											key={project.id}
											className={`glass rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] ${
												expandedProject === project.id
													? "md:col-span-2 lg:col-span-3"
													: ""
											}`}
										>
											<div
												className="px-6 py-5 flex justify-between items-center cursor-pointer group"
												onClick={() => toggleProject(project.id)}
											>
												<div className="flex items-center space-x-4">
													<div className="bg-[rgb(var(---surface))] p-4 rounded-lg group-hover:scale-110 transition-transform duration-300">
														{project.icon}
													</div>
													<div>
														<h4 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
															{project.title}
														</h4>
														{/* <p className="text-sm text-gray-600 flex items-center mt-1">
															<Wifi className="h-4 w-4 mr-2 text-blue-500" />
															By {project.student}
														</p> */}
													</div>
												</div>
												<button
													className="p-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 group-hover:from-blue-100 group-hover:to-purple-100 transition-colors"
													aria-label={
														expandedProject === project.id
															? "Collapse project details"
															: "Expand project details"
													}
												>
													{expandedProject === project.id ? (
														<Minus className="h-5 w-5 text-blue-600" />
													) : (
														<Plus className="h-5 w-5 text-purple-600" />
													)}
												</button>
											</div>

											{expandedProject === project.id && (
												<div className="px-6 py-5 border-t border-gray-200 bg-gray-900">
													{/* <div className="flex items-center mb-4 space-x-3">
														<span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
															IoT Project
														</span>
														<span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
															Connected Device
														</span>
													</div> */}
													<p className="text-gray-100 mb-6 leading-relaxed">
														{project.description}
													</p>
													<div className="aspect-video w-full rounded-xl overflow-hidden border border-gray-200 shadow-lg">
														{project.videoUrl === null ? (
															<div className="flex items-center justify-center h-full">
																<p className="text-gray-400">
																	Video Coming Soon...
																</p>
															</div>
														) : (
															<iframe
																src={project.videoUrl}
																title={project.title}
																className="w-full h-full"
																allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
																allowFullScreen
															></iframe>
														)}
													</div>
												</div>
											)}
										</div>
									))}
								</div>
							</div>
						</AnimateOnScroll>
					</div>
				</section>
			))}
		</>
	);
};

export default IoTBasedProject;
