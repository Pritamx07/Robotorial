import React, { useEffect, useRef } from "react";

interface RobotHelperProps {
	position?: "left" | "right";
	message?: string;
	variant?: "small" | "medium" | "large";
	className?: string;
}

const RobotHelper: React.FC<RobotHelperProps> = ({
	position = "right",
	message,
	variant = "small",
	className = "",
}) => {
	const robotRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const robot = robotRef.current;
		if (!robot) return;

		const handleMouseMove = (e: MouseEvent) => {
			if (variant === "small") return; // Only track mouse for medium and large robots

			const rect = robot.getBoundingClientRect();
			const x = (e.clientX - rect.left) / rect.width;
			const y = (e.clientY - rect.top) / rect.height;

			// Calculate eye movement
			const eyeX = (x - 0.5) * 4; // Limit the range of movement
			const eyeY = (y - 0.5) * 4;

			// Apply movement to the eyes
			const eyes = robot.querySelectorAll(".robot-eye");
			eyes.forEach((eye) => {
				(
					eye as HTMLElement
				).style.transform = `translate(${eyeX}px, ${eyeY}px)`;
			});
		};

		document.addEventListener("mousemove", handleMouseMove);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, [variant]);

	const sizes = {
		small: "w-12 h-12",
		medium: "w-20 h-20",
		large: "w-32 h-32",
	};

	const positions = {
		left: "left-0",
		right: "right-0",
	};

	return (
		<div
			ref={robotRef}
			className={`
        absolute ${positions[position]} 
        ${sizes[variant]} 
        robot-animation flex items-center justify-center 
        ${className}
        z-40
      `}
		>
			{/* Robot Body */}
			<div className="relative">
				{/* Robot Head */}
				<div className="relative bg-[rgb(var(--surface))] rounded-xl p-2 border border-[rgb(var(--primary))]/30 shadow-[0_0_10px_rgba(var(--primary),0.3)]">
					{/* Robot Eyes */}
					<div className="flex gap-2 justify-center mb-1">
						<div className="w-2 h-2 rounded-full bg-[rgb(var(--primary))] robot-eye"></div>
						<div className="w-2 h-2 rounded-full bg-[rgb(var(--primary))] robot-eye"></div>
					</div>

					{/* Robot Mouth */}
					<div className="w-4 h-1 mx-auto bg-[rgb(var(--accent))]"></div>

					{/* Antenna */}
					<div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-gradient-to-t from-[rgb(var(--primary))] to-[rgb(var(--accent))]">
						<div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-[rgb(var(--accent))] animate-pulse"></div>
					</div>
				</div>

				{/* Robot Arms (for medium and large sizes) */}
				{variant !== "small" && (
					<>
						<div className="absolute left-0 top-1/2 w-3 h-1 bg-[rgb(var(--surface))] border border-[rgb(var(--primary))]/30 robot-arm"></div>
						<div
							className="absolute right-0 top-1/2 w-3 h-1 bg-[rgb(var(--surface))] border border-[rgb(var(--primary))]/30 robot-arm"
							style={{ animationDelay: "0.5s" }}
						></div>
					</>
				)}

				{/* Message Bubble */}
				{message && (
					<div
						className={`absolute ${
							position === "left" ? "left-full ml-2" : "right-full mr-2"
						} top-0 glass rounded-lg p-2 text-xs max-w-40 whitespace-normal`}
					>
						<div
							className={`absolute top-2 ${
								position === "left" ? "left-[-6px]" : "right-[-6px]"
							} w-0 h-0 border-solid border-t-4 border-b-4 border-${
								position === "left" ? "r" : "l"
							}-4 border-transparent ${
								position === "left" ? "border-r-white/10" : "border-l-white/10"
							}`}
						></div>
						{message}
					</div>
				)}
			</div>
		</div>
	);
};

export default RobotHelper;
