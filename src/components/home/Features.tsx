import React from "react";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "../ui/Card";
import { Cpu, Zap, Lock, Microscope, Brain, Rocket } from "lucide-react";
import RobotHelper from "./RobotHelper";

interface Feature {
	icon: React.ReactNode;
	title: string;
	description: string;
}

const Features: React.FC = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const features: Feature[] = [
		{
			icon: <Microscope className="h-8 w-8 text-[rgb(var(--primary))]" />,
			title: "Sensor Integration",
			description:
				"All systems are equipped with ultrasonic, flame, or biometric sensors for real-time interaction with the environment.",
		},
		{
			icon: <Zap className="h-8 w-8 text-[rgb(var(--warning))]" />,
			title: "Automation Technology",
			description:
				"Smart automation enables systems like irrigation, fire extinguishing, and gate control to work without human input.",
		},
		{
			icon: <Lock className="h-8 w-8 text-[rgb(var(--secondary))]" />,
			title: "Smart Security",
			description:
				"Projects like fingerprint door locks emphasize enhanced safety through biometric and sensor-based access control.",
		},
		{
			icon: <Cpu className="h-8 w-8 text-[rgb(var(--accent))]" />,
			title: "Embedded Systems",
			description:
				"Microcontrollers serve as the brains behind all operations, managing inputs and outputs in real time.",
		},
		{
			icon: <Rocket className="h-8 w-8 text-[rgb(var(--success))]" />,
			title: "Mobility & Robotics",
			description:
				"Projects like the human-following car and obstacle avoidance vehicle showcase dynamic motion and smart navigation.",
		},
		{
			icon: <Brain className="h-8 w-8 text-[rgb(var(--error))]" />,
			title: "Human-Centric Design",
			description:
				"Each system is designed to enhance user interaction and promote safety, hygiene, or convenience.",
		},
	];

	return (
		<section
			id="technology"
			className="py-20 relative overflow-hidden circuit-bg"
		>
			<div className="container mx-auto px-4">
				<h2 className="text-4xl font-bold text-center mb-4 text-gradient">
					Our Technology
				</h2>
				<p className="text-[rgb(var(--foreground))]/70 text-center mb-12 max-w-2xl mx-auto">
					Powered by cutting-edge technologies, our robotics solutions deliver
					unparalleled performance and reliability.
				</p>

				<RobotHelper
					position="right"
					variant="medium"
					className="top-40"
					message="Our tech is state_of_the art!"
				/>

				<div
					ref={ref}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					{features.map((feature, index) => (
						<Card
							key={index}
							className={`glass p-6 ${
								inView
									? `opacity-100 translate-y-0 transition-all duration-700 delay-${
											index * 100
									  }`
									: "opacity-0 translate-y-10"
							}`}
							style={{ transitionDelay: `${index * 100}ms` }}
						>
							<CardContent className="p-0">
								<div className="flex flex-col items-center text-center">
									<div className="p-3 rounded-full glass mb-4 glow">
										{feature.icon}
									</div>
									<h3 className="text-xl font-bold mb-2">{feature.title}</h3>
									<p className="text-[rgb(var(--foreground))]/70">
										{feature.description}
									</p>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
