import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandTwitter,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function WhatWeDo() {
	const cards = [
		{
			name: "John Doe",
			designation: "Landscaping Designer",
			image: "/team1.png",
		},
		{
			name: "John Doe",
			designation: "Landscaping Designer",
			image: "/team2.png",
		},
		{
			name: "John Doe",
			designation: "Landscaping Designer",
			image: "/team3.png",
		},
	];

	return (
		<>
			{/* Hero */}
			<div className="relative overflow-hidden pt-10 lg:py-10">
				<div className="relative z-10">
					<div className="container py-10 lg:py-16">
						<div className="mx-auto max-w-2xl text-center">
							<p className="flex justify-center text-lime-600 text-xs tracking-tight">
								WHAT WE DO
							</p>
							{/* Title */}
							<div className="mt-2 max-w-2xl">
								<h1 className="scroll-m-20 text-balance text-center font-extrabold text-4xl text-lime-600">
									Get more value from our landscaper
								</h1>
							</div>
							{/* End Title */}
							<div className="mt-5 max-w-6xl">
								<p className="text-pretty text-base text-muted-foreground">
									Our technicians use state-of-the-art equipment and
									eco-friendly products to keep your lawn healthy and creating
									stunning and functional landscapes.
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* Cards */}
				<div className="flex w-full flex-wrap justify-center gap-4">
					{cards.map((card, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<Card key={index} className="border-0 shadow-none">
							<CardContent>
								<div className="flex flex-col justify-center gap-y-4">
									<Image
										src={card.image}
										alt={card.name.toLowerCase()}
										className="rounded-xl"
										width={280}
										height={300}
									/>
								</div>
							</CardContent>
							<CardFooter className="flex w-full flex-col items-center justify-between gap-y-2">
								<CardTitle className="flex w-full flex-col items-center justify-between font-semibold text-lg text-lime-600">
									<Label className="w-full text-center font-semibold text-lg text-lime-600">
										{card.name}
									</Label>
									<Label className="w-full text-center font-light text-lime-700 text-xs">
										{card.designation}
									</Label>
								</CardTitle>
								<div className="flex flex-row items-center justify-center gap-x-3">
									<Link href="">
										<IconBrandFacebook className="text-lime-600" />
									</Link>
									<Link href="">
										<IconBrandTwitter className="text-lime-600" />
									</Link>
									<Link href="">
										<IconBrandInstagram className="text-lime-600" />
									</Link>
								</div>
							</CardFooter>
						</Card>
					))}
				</div>
				{/* End Cards */}
			</div>
		</>
	);
}
