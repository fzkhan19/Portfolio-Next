"use client";

import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { CardContent, CardHeader, CardTitle } from "./card";
import { Label } from "./label";

export default function TestimonialSlider({
	testimonials,
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
}: { testimonials: any }) {
	return (
		<section className="w-full py-4 md:hidden">
			<div className="mx-auto px-3 lg:max-w-6xl">
				<Carousel
					opts={{
						loop: true,
						align: "center",
					}}
					plugins={[
						Autoplay({
							delay: 3000,
						}),
					]}
				>
					<CarouselContent className="ml-0">
						{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
						{testimonials.map((card: any, index: number) => (
							<CarouselItem
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={index}
								className="pl-6 md:basis-1/2 lg:basis-1/3"
							>
								<Link href={`/services/${card.title}`}>
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
								</Link>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="-translate-y-1/2 absolute top-1/2 left-0 fill-black md:left-[-50px]" />
					<CarouselNext className="-translate-y-1/2 absolute top-1/2 right-0 fill-black md:right-[-50px]" />
				</Carousel>
			</div>
		</section>
	);
}
