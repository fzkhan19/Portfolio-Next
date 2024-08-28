import CTASection from "@/components/layout/CTA";
import { IconLeaf2, IconMoodSmile, IconStar } from "@tabler/icons-react";
import { FAQSection } from "./Faq";
import Hero from "./Hero";
import OurMission from "./OurMission";
import WhatWeDo from "./WhatWeDo";

export default function AboutPage() {
	return (
		<div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-20 lg:py-20">
			{/* Gradients */}
			<div
				aria-hidden="true"
				className="-top-96 -translate-x-1/2 absolute start-1/2 flex transform"
			>
				<div className="-translate-x-[10rem] h-[44rem] w-[25rem] rotate-[-60deg] transform bg-gradient-to-r from-primary/50 to-primary/20 blur-3xl" />
				<div className="-rotate-12 -translate-x-[-35rem] h-[50rem] w-[50rem] origin-top-left rounded-full bg-gradient-to-tl from-primary/50 to-primary/10 blur-3xl" />
			</div>
			{/* End Gradients */}

			<Hero />
			<OurMission />

			{/* Badge Band */}
			<div className="flex w-full flex-col items-center justify-around gap-y-12 pt-4 md:mt-8 md:flex-row md:px-24 lg:py-10">
				<div className="flex flex-col items-center justify-center gap-y-3">
					<IconLeaf2 className="size-8 text-lime-600" />
					<p className="text-balance font-semibold text-base text-lime-600">
						Gardens Served
					</p>
					<span className="font-bold text-6xl text-lime-800 dark:text-lime-300">
						180+
					</span>
				</div>
				<div className="flex flex-col items-center justify-center gap-y-3">
					<IconStar className="size-8 text-lime-600" />
					<p className="text-balance font-semibold text-base text-lime-600">
						Years of Experience
					</p>
					<span className="font-bold text-6xl text-lime-800 dark:text-lime-300">
						11 Years
					</span>
				</div>
				<div className="flex flex-col items-center justify-center gap-y-3">
					<IconMoodSmile className="size-8 text-lime-600" />
					<p className="text-balance font-semibold text-base text-lime-600">
						Satisfied Client
					</p>
					<span className="font-bold text-6xl text-lime-800 dark:text-lime-300">
						100+
					</span>
				</div>
			</div>
			{/* End Badge Band */}

			<WhatWeDo />
			<FAQSection />
			<CTASection />
		</div>
	);
}
