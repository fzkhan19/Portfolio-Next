import { BrickWall, Droplets, Shovel, Trees } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import TestimonialSlider from "../ui/carousel-autoplay";

export default function WhatWeDo() {
	const cards = [
		{
			title: "Installation",
			icon: <Shovel className="-mt-1" />,
			description:
				"Unleash the beauty of nature with our creative garden design installation solutions.",
			image: "/installation.png",
		},
		{
			title: "Maintenance",
			icon: <Trees className="-mt-2" />,
			description:
				"Keep your lawn lush and vibrant with our expert maintenance services.",
			image: "/maintenance.png",
		},
		{
			title: "Hardscape",
			icon: <BrickWall className="-mt-1" />,
			description:
				"Elevate your outdoor living spaces with stunning hardscape installations",
			image: "/hardscape.png",
		},
		{
			title: "Irrigation",
			icon: <Droplets className="-mt-2" />,
			description:
				"Ensure your landscape stays green and healthy with efficient irrigation solutions",
			image: "/irrigation.png",
		},
	];

	return (
		<>
			{/* Hero */}
			<div className="relative overflow-hidden pt-20 lg:py-20">
				<div className="relative z-10">
					<div className="container py-10 lg:py-16">
						<div className="mx-auto max-w-2xl text-center">
							<p className="flex justify-center text-lime-600 text-xs tracking-tight md:text-sm">
								WHAT WE DO
							</p>
							{/* Title */}
							<div className="mt-2 max-w-2xl">
								<h1 className="text scroll-m-20 text-balance font-extrabold text-4xl text-lime-600 lg:text-6xl">
									Get more value from our landscaper
								</h1>
							</div>
							{/* End Title */}
							<div className="mt-5 max-w-6xl">
								<p className="text-pretty text-base text-muted-foreground lg:text-lg">
									Our technicians use state-of-the-art equipment and
									eco-friendly products to keep your lawn healthy and creating
									stunning and functional landscapes.
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* Cards */}
				<div className="hidden w-full flex-wrap justify-center gap-4 md:flex">
					{cards.map((card, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<Card key={index}>
							<CardHeader>
								<CardTitle className="flex items-center justify-between font-bold text-2xl text-lime-600">
									{card.title}
									{card.icon}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="flex flex-col justify-center gap-y-4">
									<Label className="w-64 text-balance text-base">
										{card.description}
									</Label>
									<Image
										src={card.image}
										alt={card.title.toLowerCase()}
										className="rounded-xl"
										width={250}
										height={200}
									/>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
				{/* End Cards */}

				<TestimonialSlider testimonials={cards} />
			</div>
		</>
	);
}
