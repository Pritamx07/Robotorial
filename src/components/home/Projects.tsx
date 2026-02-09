import React, { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "../ui/Card";

import RobotHelper from "./RobotHelper";
import { Play } from "lucide-react";

interface ProjectLevel {
	level: string;
	title: string;
	description: string;
	videoUrl?: string;
	modules: {
		title: string;
		weeks: string;
		projects: {
			name: string;
			description: string;
			duration: string;
		}[];
	}[];
}

const Projects: React.FC = () => {
	const projects: ProjectLevel[] = [
		{
			level: "Level 1",
			title: "Introduction to Robotics",
			description:
				"Start your journey into robotics with basic concepts and hands-on projects. Perfect for beginners!",
			videoUrl: "https://www.youtube.com/embed/yUsgxp0pOF8?si=RAMN4nqkpBX2hn7G",
			modules: [
				{
					title: "Module 1 , Module 2",
					weeks: "2-4 weeks",

					projects: [
						{
							name: "Smart Fire Extinguisher",
							description:
								"Build a lamp that uses a light sensor to detect darkness and automatically turns on.",
							duration: "1 week",
						},
						{
							name: "Water Level Monitoring",
							description:
								"Turns on a light when the child claps using sound sensor.",
							duration: "1 week",
						},
						{
							name: "Smart Handwash Box",
							description: "Buzzer system for water tank overflow detection.",
							duration: "1 week",
						},
					],
				},
			],
		},
		{
			level: "Level 2",
			title: "Intermediate Robotics",
			description:
				"Explore smarter systems and IoT-based projects. Start working with sensors and actuators.",
			videoUrl: "https://www.youtube.com/embed/P6rxfz6eucM?si=2qRNcuDT_oe2_Xr2",
			modules: [
				{
					title: "Module 3",
					weeks: "3-4 weeks",
					projects: [
						{
							name: "Smart Dustbin",
							description:
								"Sends an alert when the soil is dry and displays temperature.",
							duration: "2 weeks",
						},
						{
							name: "Automatic Rail Gate",
							description:
								"Automated irrigation system using soil moisture sensors.",
							duration: "2 weeks",
						},
						{
							name: "Smart Weather Monitoring System",
							description:
								"Automated irrigation system using soil moisture sensors.",
							duration: "2 weeks",
						},
					],
				},
			],
		},
		{
			level: "Level 3",
			title: "Advanced Robotics",
			description:
				"Work on more complex systems integrating multiple sensors and communication modules.",
			videoUrl: "https://youtube.com/embed/9SPdfLNud5g?si=kpz8ZCcT9R1xlfxc",
			modules: [
				{
					title: "Module 4",
					weeks: "3-5 weeks",
					projects: [
						{
							name: "Smart Clap Switch",
							description:
								"Dispenses sanitizer automatically when a hand is detected.",
							duration: "1 week",
						},
						{
							name: "Smart Irrigation System",
							description: "Tracks student attendance using RFID cards.",
							duration: "1 week",
						},
						{
							name: "Fire Alarm and Smoke Alarm",
							description: "Detects when dustbin is full and sends an alert.",
							duration: "1 week",
						},
						{
							name: "Car Parking Management",
							description:
								"Detects fire/smoke and sends alerts to phone/cloud.",
							duration: "1 week",
						},
					],
				},
			],
		},
		{
			level: "Level 4",
			title: "IoT and Smart Systems",
			description:
				"Develop real-world smart systems integrating IoT and automation technologies.",
			videoUrl: "https://www.youtube.com/embed/qbbJCB2v4ik?si=ho5hEt7z39uI4Aw7",
			modules: [
				{
					title: "Module 5 , Module 6",
					weeks: "4-6 weeks",
					projects: [
						{
							name: "Human Following Car",
							description:
								"Control appliances like fans and lights from a smartphone.",
							duration: "1 week",
						},
						{
							name: "Line Following Car",
							description:
								"Detects air quality and alerts if levels go unhealthy.",
							duration: "1 week",
						},
						{
							name: "Smart Street Lamp",
							description: "Detects when dustbin is full and sends an alert.",
							duration: "1 week",
						},
						{
							name: "Arduino Pulse Sensor",
							description:
								"Detects fire/smoke and sends alerts to phone/cloud.",
							duration: "1 week",
						},
					],
				},
			],
		},
	];

	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
	// const [activeProject, setActiveProject] = useState<number | null>(null);
	const [filteredProjects, setFilterProjects] = useState<ProjectLevel[]>(
		projects.filter((p) => p.level === "Introduction")
	);
	const { ref, inView } = useInView({
		triggerOnce: false,
		threshold: 0.1,
	});

	const sectionRef = useRef<HTMLDivElement>(null);
	const projectRefs = useRef<Map<number, HTMLDivElement>>(new Map());
	const toggleBarRef = useRef<HTMLDivElement>(null);

	const categories = [
		"Introduction",
		"Level 1",
		"Level 2",
		"Level 3",
		"Level 4",
	];

	// const filteredProjects = selectedCategory
	// 	? projects.filter((p) => p.category === selectedCategory)
	// 	: projects;

	useEffect(() => {
		if (inView && sectionRef.current) {
			sectionRef.current.classList.add("robot-carrier", "in-view");
		}
	}, [inView]);

	// const handleProjectClick = (id: number) => {
	// 	setActiveProject(activeProject === id ? null : id);
	// };
	const handleCategoryClick = (category: string) => {
		setSelectedCategory(category === "Introduction" ? null : category);
		setFilterProjects(projects.filter((p) => p.level === category));
	};

	return (
		<section id="projects" className="py-20 relative overflow-hidden" ref={ref}>
			<div className="container mx-auto px-4" ref={sectionRef}>
				<RobotHelper
					position="left"
					variant="medium"
					className="top-20"
					message="Check out our amazing projects!"
				/>

				<h2 className="text-4xl font-bold text-center mb-4 text-gradient">
					Our Robotics Projects
				</h2>
				<p className="text-[rgb(var(--foreground))]/70 text-center mb-12 max-w-2xl mx-auto">
					Discover our groundbreaking robotics solutions that are transforming
					industries and pushing the boundaries of what's possible.
				</p>

				{/* Category filters */}
				<div
					ref={toggleBarRef}
					className="flex flex-wrap justify-center gap-4 mb-12 p-4 rounded-2xl bg-[rgb(var(--surface))]/50 backdrop-blur-sm border border-white/5 shadow-xl max-w-4xl mx-auto transform hover:scale-[1.02] transition-all duration-300"
				>
					{categories.map((category, index) => {
						const isSelected =
							selectedCategory === category ||
							(category === "Introduction" && !selectedCategory);
						return (
							<button
								key={category}
								onClick={() => handleCategoryClick(category)}
								className={`
                  relative px-6 py-3 rounded-xl text-lg font-medium transition-all duration-300
                  ${
										isSelected
											? "text-white"
											: "text-[rgb(var(--foreground))]/60 hover:text-[rgb(var(--foreground))]/90"
									}
                  overflow-hidden group
                `}
								style={{
									animationDelay: `${index * 100}ms`,
								}}
							>
								<span className="relative z-10">{category}</span>
								<div
									className={`
                    absolute inset-0 transition-all duration-300 rounded-xl
                    ${
											isSelected
												? "bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--secondary))] opacity-100"
												: "opacity-0 scale-90"
										}
                    group-hover:opacity-10 group-hover:scale-100
                  `}
								/>
							</button>
						);
					})}
				</div>
				{!selectedCategory && (
					<div className="mb-20">
						<h3 className="text-2xl font-bold text-center mb-8">
							Introductory Video
						</h3>
						<div className="max-w-6xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl">
							<iframe
								className="w-full h-full"
								src="https://www.youtube.com/embed/pgpuRuGoZpU?si=Z_-lKX6TklL5oQGh"
								title="Introduction to Our Robotics Program"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						</div>
					</div>
				)}

				{selectedCategory && (
					<div className="space-y-20">
						{filteredProjects.map((level, index) => (
							<div
								key={level.level}
								className={`flex flex-col justify-center lg:items-center lg:flex-row gap-8 ${
									inView ? "animate-fade-in-up" : ""
								}`}
								style={{ animationDelay: `${index * 200}ms` }}
							>
								<div className="lg:w-1/2">
									<div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
										<iframe
											className="w-full h-full"
											src={level.videoUrl}
											title={level.title}
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowFullScreen
										></iframe>
									</div>
								</div>

								<div className="lg:w-1/2 space-y-6">
									<div>
										<h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--secondary))] bg-clip-text text-transparent">
											{level.level}
										</h3>
										<h4 className="text-xl font-semibold mb-2">
											{level.title}
										</h4>
										<p className="text-[rgb(var(--foreground))]/70">
											{level.description}
										</p>
									</div>

									<div className="space-y-4">
										{level.modules.map((module, idx) => (
											<div className="" key={idx}>
												<div className=" flex w-full justify-around">
													<h5 className="text-lg font-semibold mb-2">
														{module.title}
													</h5>
													<span className="text-sm text-[rgb(var(--primary))]">
														{module.weeks}
													</span>
												</div>
												<div className="space-y-2">
													{module.projects.map((project, idx) => {
														return (
															<Card
																key={idx}
																className="bg-[rgb(var(--surface))]/50 backdrop-blur-sm hover:bg-[rgb(var(--surface))]/70 transition-all duration-300 rounded-lg"
															>
																<div className=" p-2">
																	<div className="flex items-center justify-center gap-4">
																		<div className="rounded-lg bg-[rgb(var(--primary))]/10">
																			<Play className="w-6 h-6 text-[rgb(var(--primary))]" />
																		</div>
																		<div className="flex-1 flex items-center justify-between">
																			<h5 className="font-semibold ">
																				{project.name}
																			</h5>
																			{/* <p className="text-sm text-[rgb(var(--foreground))]/70 mb-2">
																{project.description}
															</p> */}
																			<div className="flex items-center justify-between">
																				<span className="text-sm text-[rgb(var(--primary))]">
																					{project.duration}
																				</span>
																				{/* <Button
																	variant="ghost"
																	size="sm"
																	className="text-sm"
																>
																	Learn More{" "}
																	<ChevronRight className="w-4 h-4 ml-1" />
																</Button> */}
																			</div>
																		</div>
																	</div>
																</div>
															</Card>
														);
													})}
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default Projects;
