import { BLUR_FADE_DELAY, DATA } from "@/constants/resume";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import BlurFade from "../ui/blur-fade";
import { ProjectCard } from "./project-card";

export default function Projects() {
	return (
		<section id="projects">
			<div className="w-full space-y-12 py-6">
				<BlurFade delay={BLUR_FADE_DELAY * 8}>
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-foreground px-3 py-1 text-background text-sm">
								My Projects
							</div>
							<h2 className="font-bold text-3xl tracking-tighter md:text-5xl">
								Check out my latest work
							</h2>
							<p className="text-muted-foreground md:text-lg">
								I&apos;ve worked on a variety of projects, from simple websites
								to complex web applications. Here are a few of my favorites.
							</p>
						</div>
					</div>
				</BlurFade>
				<div className="mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
					{DATA.projects.slice(0, 4).map((project, id) => (
						<BlurFade
							key={project.title}
							delay={BLUR_FADE_DELAY * 9 + id * 0.05}
						>
							<ProjectCard
								href={project.href}
								key={project.title}
								title={project.title}
								description={project.description}
								dates={project.dates}
								tags={project.technologies}
								image={project.image}
								video={project.video}
								links={project.links}
								url={project.href}
							/>
						</BlurFade>
					))}
					<div className="col-span-full mt-2 flex justify-center">
						<BlurFade delay={BLUR_FADE_DELAY * 10}>
							<Link
								href="/projects"
								className="flex items-center gap-1 text-sm"
							>
								See All Projects <ChevronDown size={20} className="mt-0.5" />
							</Link>
						</BlurFade>
					</div>
				</div>
			</div>
		</section>
	);
}
