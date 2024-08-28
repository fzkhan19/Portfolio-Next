import { Button } from "@/components/ui/button";
import { CONTENT } from "@/constants/content";
import { Calendar } from "lucide-react";
import Image from "next/image";

const CalendarIcon = () => <Calendar className="size-5" />;

export default function HeroSection() {
	return (
		<>
			{/* Hero */}
			<div className="relative overflow-hidden pt-20 lg:py-20">
				{/* Gradients */}
				<div
					aria-hidden="true"
					className="-top-96 -translate-x-1/2 absolute start-1/2 flex transform"
				>
					<div className="-translate-x-[10rem] h-[44rem] w-[25rem] rotate-[-60deg] transform bg-gradient-to-r from-primary/50 to-primary/20 blur-3xl" />
					<div className="-rotate-12 -translate-x-[-35rem] h-[50rem] w-[50rem] origin-top-left rounded-full bg-gradient-to-tl from-primary/50 to-primary/10 blur-3xl" />
				</div>
				{/* End Gradients */}
				<div className="relative z-10">
					<div className="container py-10 lg:py-16">
						<div className="mx-auto max-w-2xl text-center">
							<p className="flex justify-center text-xs md:text-sm">
								<Image src="badge.svg" alt="badge" width={60} height={60} />
							</p>
							{/* Title */}
							<div className="mt-5 max-w-2xl">
								<h1 className="text scroll-m-20 text-balance font-extrabold text-4xl text-lime-600 lg:text-6xl">
									{CONTENT.HERO_TITLE}
								</h1>
							</div>
							{/* End Title */}
							<div className="mt-5 max-w-3xl">
								<p className="text-balance text-base text-muted-foreground lg:text-lg">
									{CONTENT.HERO_DESCRIPTION}
								</p>
							</div>
							{/* Buttons */}
							<div className="mx-4 mt-16 flex flex-col justify-center gap-3 gap-y-4 md:mx-0 md:flex-row">
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
					</div>
				</div>
				{/* Video */}
				<div className="flex w-full justify-center">
					<Image
						src={"/video.png"}
						alt="video"
						className="rounded-xl"
						width={800}
						height={400}
					/>
				</div>
				{/* End Video */}
			</div>
		</>
	);
}
