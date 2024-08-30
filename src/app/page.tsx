import Contact from "@/components/layout/contact";
import Hero from "@/components/layout/hero";
import LifeChangelog from "@/components/layout/life-changelog";
import Projects from "@/components/layout/projects";

export default function Home() {
	return (
		<article className="flex min-h-[100dvh] flex-col space-y-10 px-6 pt-8 pb-40 md:pt-24">
			<div className="mx-auto w-full max-w-2xl space-y-8">
				<Hero />

				<Projects />

				<LifeChangelog />

				<Contact />
			</div>
		</article>
	);
}
