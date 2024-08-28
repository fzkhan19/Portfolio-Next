import HowItWorks from "@/components/layout/HowItWorks";
import Portfolio from "@/components/layout/Portfolio";
import WhatWeDo from "@/components/layout/WhatWeDo";
import WhyChooseUs from "@/components/layout/WhyChooseUs";
import { FAQSection } from "@/components/layout/faq";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/layout/Hero"), {
	ssr: true,
});

const Particles = dynamic(() => import("@/components/ui/particles"), {
	ssr: true,
});

export default function Home() {
	return (
		<article>
			<HeroSection />
			<WhatWeDo />
			<WhyChooseUs />
			<HowItWorks />
			<Portfolio />
			<FAQSection />
			<HeroSection />
			<Particles
				refresh
				className="-z-10 absolute inset-0"
				ease={80}
				staticity={120}
				quantity={50}
			/>
		</article>
	);
}
