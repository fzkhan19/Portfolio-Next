import {
	IconCardsFilled,
	IconLeaf,
	IconTrophyFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";

export default function WhyChooseUs() {
	const qualifications = [
		{
			title: "ICPI & NCMA certified installer",
			icon: <IconCardsFilled className="-mt-1 text-lime-800" />,
		},
		{
			title: "Sustainable landscape designs",
			icon: <IconLeaf className="-mt-2 text-lime-800" />,
		},
		{
			title: "Award-Winning landscape services",
			icon: <IconTrophyFilled className="-mt-1 text-lime-800" />,
		},
	];
	return (
		<>
			{/* Hero */}
			<div className="relative overflow-hidden pt-20 lg:py-20">
				<div className="relative z-10">
					<div
						className={cn(
							"container flex max-w-6xl flex-col-reverse gap-8",
							"items-center justify-between py-10 pt-0",
							"md:flex-row md:gap-0 lg:py-16",
						)}
					>
						<Image
							className="hidden md:block"
							src="/garden.png"
							alt="Garden"
							width={400}
							height={400}
						/>
						<div className="mx-auto flex max-w-xl flex-col items-center justify-center gap-y-4 md:items-start">
							<p className="text-lime-600 text-xs tracking-tight md:text-sm">
								WHY CHOOSE US
							</p>
							{/* Title */}
							<div className="mt-2 w-full">
								<h1 className="scroll-m-20 text-balance text-center font-extrabold text-4xl text-lime-600 md:text-left lg:text-6xl">
									Take the hassle out of garden maintenance
								</h1>
							</div>
							{/* End Title */}
							<div className="mt-5 max-w-6xl">
								<p className="text-pretty text-center text-base text-muted-foreground md:text-left lg:text-lg">
									We assist homeowners in saving time and effort by designing
									and upkeeping landscapes, lawns, and outdoor living areas that
									garner admiration. Our team comprises skilled maintenance
									professionals certified well-versed in effective landscape
									upkeep services to ensure the year-round health of your
									property.
								</p>
							</div>

							{/* Qualifications */}
							<div className="mt-8 flex flex-col gap-y-4">
								{qualifications.map((item, idx) => (
									<Label
										className="flex items-center gap-2 text-balance text-base text-lime-800"
										// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										key={idx}
									>
										{item.icon}
										{item.title}
									</Label>
								))}
							</div>
							{/* End Qualifications */}

							{/* Buttons */}
							<div className="mx-4 mt-8 md:mx-0">
								<Button className="font-semibold text-base" size={"lg"}>
									Learn more about us
								</Button>
							</div>
							{/* End Buttons */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
