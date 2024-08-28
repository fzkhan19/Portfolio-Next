import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
	project,
}: { project: { title: string; image: string; description: string } }) {
	return (
		<div className="relative">
			<Image src={project.image} alt={project.title} width={400} height={400} />
			<div
				className={cn(
					"-bottom-12 absolute right-0 left-0 mx-auto max-w-[16rem]",
					"rounded-3xl rounded-br-[3.5rem] bg-lime-200 p-8 px-4",
					"flex flex-col items-start justify-center gap-y-2",
				)}
			>
				<span className="font-light text-lime-800">Maintenance</span>
				<p className="mt-0.5 text-balance text-start font-bold text-lime-900 text-xl">
					{project.description}
				</p>
				<Link href={`/portfolio/${project.title}`}>
					<Button className="group rounded-full bg-white p-3 hover:scale-105">
						<ArrowUpRight className="size-5 group-hover:scale-110" />
					</Button>
				</Link>
			</div>
		</div>
	);
}
