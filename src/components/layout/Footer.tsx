import React from "react";
import { Cpu } from "lucide-react";
import { Link } from "../ui/Link";

const Footer: React.FC = () => {
	return (
		<footer className="bg-[rgb(var(--surface))] border-t border-white/5 pt-16 pb-8">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
					<div>
						<div className="flex items-center gap-2 mb-4">
							{/* <Cpu className="h-6 w-6 text-[rgb(var(--primary))]" />
              <span className="text-xl font-bold text-gradient">NexusRobotics</span> */}
						</div>
						<p className="text-[rgb(var(--foreground))]/60 mb-4">
							Pioneering the next generation of intelligent robotics systems
							that reshape industries and enhance human capabilities.
						</p>
					</div>

					<div>
						<h3 className="text-lg font-bold mb-4">Company</h3>
						<ul className="space-y-2">
							{["About Us", "Careers", "News", "Press"].map((item) => (
								<li key={item}>
									<Link
										href="#"
										className="text-[rgb(var(--foreground))]/60 hover:text-[rgb(var(--primary))]"
									>
										{item}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-bold mb-4">Solutions</h3>
						<ul className="space-y-2">
							{[
								"Industrial Automation",
								"Healthcare Robotics",
								"AI Systems",
								"Research Partnerships",
								"Custom Solutions",
							].map((item) => (
								<li key={item}>
									<Link
										href="#"
										className="text-[rgb(var(--foreground))]/60 hover:text-[rgb(var(--primary))]"
									>
										{item}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-bold mb-4">Connect</h3>
						<ul className="space-y-2">
							{["Contact Us", "Support", "Partners", "Community"].map(
								(item) => (
									<li key={item}>
										<Link
											href="#"
											className="text-[rgb(var(--foreground))]/60 hover:text-[rgb(var(--primary))]"
										>
											{item}
										</Link>
									</li>
								)
							)}
						</ul>
					</div>
				</div>

				<div className="border-t border-white/5 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
					<p className="text-[rgb(var(--foreground))]/40 text-sm mb-4 md:mb-0">
						© {new Date().getFullYear()} Bengal Bits!. All rights reserved.
					</p>

					<div className="flex gap-6">
						{["Privacy Policy", "Terms of Service", "Cookies Policy"].map(
							(item) => (
								<Link
									key={item}
									href="#"
									className="text-sm text-[rgb(var(--foreground))]/40 hover:text-[rgb(var(--primary))]"
								>
									{item}
								</Link>
							)
						)}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
