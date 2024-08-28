import { Calendar, FilesIcon, Flag, Flower } from "lucide-react";
import { Button } from "../ui/button";
import { CardContent, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
const CalendarIcon = () => <Calendar className="size-5" />;

export default function HowItWorks() {
	const steps = [
		{
			title: "Consultation",
			description:
				"Schedule a thorough consultation with our landscaping experts to discuss your specific needs, preferences, and budget. ",
			icon: <Flower className="-mt-1 text-lime-800" />,
		},
		{
			title: "Proposal",
			description:
				"We will create a detailed design proposal outlining the recommended landscaping services, materials, and estimated costs. ",
			icon: <FilesIcon className="-mt-1 text-lime-800" />,
		},
		{
			title: "Implementation",
			description:
				"From site preparation to planting and finishing touches, we'll execute the plan with precision and professionalism",
			icon: <Flag className="-mt-1 text-lime-800" />,
		},
	];
	return (
		<>
			{/* Hero */}
			<div className="relative flex flex-col items-center justify-center overflow-hidden pt-10 lg:py-10">
				<div className="relative z-10">
					<div className="container py-10 lg:py-8">
						<div className="mx-auto max-w-2xl text-center">
							<p className="text-center text-lime-600 text-xs tracking-tight md:text-sm">
								HOW IT WORKS
							</p>
							{/* Title */}
							<div className="mt-2 w-full">
								<h1 className="scroll-m-20 text-pretty font-extrabold text-4xl text-lime-600 lg:text-6xl">
									Yard and lawn care made simple.
								</h1>
							</div>
							{/* End Title */}
							<div className="mt-5 max-w-6xl">
								<p className="text-pretty text-base text-muted-foreground lg:text-lg">
									Our experts will make a personalized plan for your yard so you
									can relax and enjoy your outdoor space hassle-free.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Cards */}
				<div className="flex w-full flex-wrap justify-center md:gap-4">
					{steps.map((card, index) => (
						<div
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={index}
							className="flex flex-col items-center justify-center gap-y-4 rounded-xl p-8"
						>
							<div className="rounded bg-lime-200 p-4">{card.icon}</div>
							<Label>Step {index + 1}</Label>
							<CardTitle className="font-bold text-lime-600 text-xl">
								{card.title}
							</CardTitle>
							<CardContent className="w-96 text-balance pb-2 text-center">
								{card.description}
							</CardContent>
						</div>
					))}
				</div>
				{/* End Cards */}
				{/* Buttons */}
				<div className="mx-4 mt-8 md:mx-0 md:mt-12">
					<Button
						className="font-semibold text-base"
						size={"lg"}
						variant={"expandIcon"}
						Icon={CalendarIcon}
						iconPlacement="right"
					>
						Make an appointment
					</Button>
				</div>
				{/* End Buttons */}
			</div>
		</>
	);
}
