import { cn } from "@/lib/utils";
import Image from "next/image";

export default function OurMission() {
	return (
		<div className="relative z-10 w-full">
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
				<div className="mx-auto flex max-w-xl flex-col items-center justify-center md:items-start lg:gap-y-4">
					<p className="text-lime-600 text-xs tracking-tight">OUR MISSION</p>
					{/* Title */}
					<div className="mt-2 w-full">
						<h1 className="scroll-m-20 text-balance text-center font-extrabold text-3xl text-lime-600 md:text-left md:text-4xl">
							Service empathy & impact
						</h1>
					</div>
					{/* End Title */}
					<div className="mt-5 max-w-6xl">
						<p className="text-balance text-center text-muted-foreground text-sm md:text-left md:text-base">
							We're not just about making gardens beautiful; we're making a
							positive impact on the community and the environment. With a
							dedication to sustainable waste disposal, organic products, and
							eco-friendly practices, we're nurturing the planet every step of
							the way.
							<br />
							<br />
							Committed to delivering an unforgettable service, our caring team
							truly gets your needs. We aim to set a new standard for garden
							care and landscaping, ensuring your experience leaves you
							absolutely delighted and ready to savor your outdoor haven.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
