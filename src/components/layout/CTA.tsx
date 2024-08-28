import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import Image from "next/image";

const CalendarIcon = () => <Calendar className="size-5" />;

export default function CTASection() {
	return (
		<div className="flex w-full flex-col items-center justify-center overflow-hidden pt-10 lg:py-20">
			{/* Hero */}
			<div className="relative h-[50vh] w-[90vw] overflow-hidden lg:h-[60vh] lg:w-[70vw]">
				<Image
					className="rounded-3xl brightness-75"
					src="/bg.jpg"
					fill={true}
					alt={"Background Image"}
				/>
				<div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 z-10 w-full">
					<div className="container py-10 pt-0">
						<div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-12 text-center">
							{/* Title */}
							<div className="max-w-4xl">
								<h1 className="text text-balance font-extrabold text-4xl text-lime-300 lg:text-6xl">
									We're ready to start.
								</h1>
							</div>
							{/* End Title */}

							<div className=" max-w-3xl">
								<p className="text-balance text-base text-lime-100 lg:text-lg">
									Transform your home to zen garden
								</p>
							</div>

							{/* Buttons */}
							<Button
								className="font-semibold text-base shadow-[0_0px_50px_rgb(0,0,0,1)] shadow-primary"
								size={"lg"}
								variant={"expandIcon"}
								Icon={CalendarIcon}
								iconPlacement="right"
							>
								Make an appointment
							</Button>
							{/* End Buttons */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
