import React, { useState } from "react";
import { Button } from "../ui/Button";
import { Card, CardHeader, CardContent } from "../ui/Card";
import {
	Send,
	Mail,
	Phone,
	MapPin,
	Facebook,
	Twitter,
	Instagram,
} from "lucide-react";
import RobotHelper from "./RobotHelper";

const Contact: React.FC = () => {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormState((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		setIsSubmitting(true);
		const formData = new FormData();
		formData.append("access_key", import.meta.env.VITE_BASE_WEB3_EMAIL_KEY!);
		formData.append("name", formState.name);
		formData.append("email", formState.email);
		formData.append("message", formState.message);
		formData.append("subject", "New Contact Form Submission");

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});

		const data = await response.json();
		console.log(data);
		if (data.success) {
			setIsSubmitting(false);
			setIsSubmitted(true);
			setFormState({ name: "", email: "", message: "" });
			(event.target as HTMLFormElement).reset();
			setTimeout(() => setIsSubmitted(false), 5000);
		} else {
			setIsSubmitting(false);
		}
	};

	return (
		<section id="contact" className="py-20 relative overflow-hidden">
			<div className="absolute inset-0 circuit-bg opacity-50"></div>
			<div className="container mx-auto px-4 relative z-10">
				<h2 className="text-4xl font-bold text-center mb-4 text-gradient">
					Get In Touch
				</h2>
				<p className="text-[rgb(var(--foreground))]/70 text-center mb-12 max-w-2xl mx-auto">
					Have questions about our robotics solutions? Reach out to our team of
					experts.
				</p>

				<RobotHelper
					position="left"
					variant="large"
					className="bottom-20 left-10 hidden lg:block"
					message="I'd be happy to help answer your questions!"
				/>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
					<Card className="glass overflow-hidden fade-in-up">
						<CardHeader className="bg-gradient-to-r from-[rgba(var(--primary),0.1)] to-[rgba(var(--secondary),0.1)] p-6">
							<h3 className="text-2xl font-bold">Contact Information</h3>
							<p className="text-[rgb(var(--foreground))]/70">
								Our team is here to help you
							</p>
						</CardHeader>

						<CardContent className="p-6">
							<div className="space-y-6">
								<div className="flex items-center gap-4">
									<div className="p-3 rounded-full bg-[rgba(var(--primary),0.1)] text-[rgb(var(--primary))]">
										<Mail className="h-5 w-5" />
									</div>
									<div>
										<h4 className="text-sm font-medium text-[rgb(var(--foreground))]/50">
											Email
										</h4>
										<p className="text-lg">robotorial.bb@gmail.com</p>
									</div>
								</div>

								<div className="flex items-center gap-4">
									<div className="p-3 rounded-full bg-[rgba(var(--secondary),0.1)] text-[rgb(var(--secondary))]">
										<Phone className="h-5 w-5" />
									</div>
									<div>
										<h4 className="text-sm font-medium text-[rgb(var(--foreground))]/50">
											Phone
										</h4>
										<p className="text-lg">+91 86702 04449</p>
									</div>
								</div>

								<div className="flex items-center gap-4">
									<div className="p-3 rounded-full bg-[rgba(var(--accent),0.1)] text-[rgb(var(--accent))]">
										<MapPin className="h-5 w-5" />
									</div>
									<div>
										<h4 className="text-sm font-medium text-[rgb(var(--foreground))]/50">
											Office
										</h4>
										<p className="text-lg">
											Nischintapur, Budge Budge, Kolkata - 700 137, West Bengal,
											India
										</p>
									</div>
								</div>
							</div>

							<div className="mt-10">
								<h4 className="text-xl font-bold mb-4">Connect With Us</h4>
								<div className="flex gap-4">
									<a
										href="https://www.facebook.com/profile.php?id=61575534572767"
										className="p-3 rounded-full glass hover:bg-[rgb(var(--primary))]/10 transition-colors flex items-center gap-2 text-[rgb(var(--foreground))]"
										target="_blank"
									>
										<Facebook className="h-5 w-5" />
										<span>Facebook</span>
									</a>
									<a
										href="https://www.instagram.com/bengal_bits01/"
										target="_blank"
										className="p-3 rounded-full glass hover:bg-[rgb(var(--primary))]/10 transition-colors flex items-center gap-2 text-[rgb(var(--foreground))]"
									>
										<Instagram className="h-5 w-5" />
										<span>Instagram</span>
									</a>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card className="glass slide-in-right">
						<CardContent className="p-6">
							<h3 className="text-2xl font-bold mb-6">Send us a message</h3>

							{isSubmitted ? (
								<div className="text-center py-10">
									<div className="mb-4 text-[rgb(var(--success))] bg-[rgba(var(--success),0.1)] p-3 rounded-full inline-block">
										<Send className="h-10 w-10" />
									</div>
									<h4 className="text-xl font-bold mb-2">Message Sent!</h4>
									<p className="text-[rgb(var(--foreground))]/70">
										Thank you for reaching out. We'll get back to you shortly.
									</p>
								</div>
							) : (
								<form onSubmit={handleSubmit} className="space-y-6">
									<div>
										<label
											htmlFor="name"
											className="block text-sm font-medium mb-2"
										>
											Name
										</label>
										<input
											id="name"
											name="name"
											type="text"
											required
											value={formState.name}
											onChange={handleChange}
											className="w-full glass bg-[rgba(var(--foreground),0.05)] border-[rgba(var(--foreground),0.1)] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]"
										/>
									</div>

									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium mb-2"
										>
											Email
										</label>
										<input
											id="email"
											name="email"
											type="email"
											required
											value={formState.email}
											onChange={handleChange}
											className="w-full glass bg-[rgba(var(--foreground),0.05)] border-[rgba(var(--foreground),0.1)] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]"
										/>
									</div>

									<div>
										<label
											htmlFor="message"
											className="block text-sm font-medium mb-2"
										>
											Message
										</label>
										<textarea
											id="message"
											name="message"
											rows={5}
											required
											value={formState.message}
											onChange={handleChange}
											className="w-full glass bg-[rgba(var(--foreground),0.05)] border-[rgba(var(--foreground),0.1)] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]"
										></textarea>
									</div>

									<Button
										type="submit"
										fullWidth
										size="lg"
										disabled={isSubmitting}
										className="relative overflow-hidden"
									>
										{isSubmitting ? (
											<span className="flex items-center">
												<svg
													className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
												>
													<circle
														className="opacity-25"
														cx="12"
														cy="12"
														r="10"
														stroke="currentColor"
														strokeWidth="4"
													></circle>
													<path
														className="opacity-75"
														fill="currentColor"
														d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
													></path>
												</svg>
												Sending...
											</span>
										) : (
											<span className="flex items-center justify-center">
												Send Message <Send className="ml-2 h-4 w-4" />
											</span>
										)}
									</Button>
								</form>
							)}
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default Contact;
