import { Home, MailOpen, PhoneCall } from "lucide-react";
import dynamic from "next/dynamic";
import ContactForm from "./ContactForm";
const OpenStreetMap = dynamic(() => import("./Map"), {
	ssr: false,
});

export default function Page() {
	return (
		<div className="relative overflow-hidden pt-10 md:py-20">
			{/* Gradients */}
			<div
				aria-hidden="true"
				className="-top-96 -translate-x-1/2 absolute start-1/2 flex transform"
			>
				<div className="-translate-x-[10rem] h-[44rem] w-[25rem] rotate-[-60deg] transform bg-gradient-to-r from-primary/50 to-primary/20 blur-3xl" />
				<div className="-rotate-12 -translate-x-[-35rem] h-[50rem] w-[50rem] origin-top-left rounded-full bg-gradient-to-tl from-primary/50 to-primary/10 blur-3xl" />
			</div>
			{/* End Gradients */}

			<div className="container py-20 lg:py-20">
				<div className="mx-auto flex max-w-5xl flex-col items-center justify-center text-center">
					<p className="text-center text-lime-600 text-xs tracking-tight">
						CONTACT US
					</p>
					{/* Title */}
					<div className="mt-2 w-full">
						<h1 className="text scroll-m-20 text-balance font-bold text-2xl text-lime-600 lg:text-5xl">
							Get in touch
						</h1>
					</div>
					{/* End Title */}
					<div className="mt-5 max-w-3xl">
						<p className="text-pretty text-muted-foreground text-sm md:text-base">
							We're happy to answer any questions you may have about our lawn
							care or landscaping services, Feel free to give us a call or send
							us a message and we'll help get the answers you need
						</p>
					</div>
				</div>
				<div className="flex w-full justify-center rounded-xl pt-20">
					<OpenStreetMap />
				</div>
				{/* Badge Band */}
				<div className="flex w-full flex-col items-center justify-around gap-y-12 py-20 md:mt-8 md:flex-row md:px-24">
					<div className="flex flex-col items-center justify-center gap-y-3">
						<Home className="size-8 text-lime-800 dark:text-lime-300" />
						<p className="text-balance font-semibold text-lg text-lime-800 dark:text-lime-300">
							Office
						</p>
						<span className="text-lime-600 text-sm">
							742 Evergreen Terrace, Springfield
						</span>
					</div>
					<div className="flex flex-col items-center justify-center gap-y-3">
						<PhoneCall className="size-8 text-lime-800 dark:text-lime-300" />
						<p className="text-balance font-semibold text-lg text-lime-800 dark:text-lime-300">
							Phone
						</p>
						<span className="text-lime-600 text-sm">
							+123456790, +123456790
						</span>
					</div>
					<div className="flex flex-col items-center justify-center gap-y-3">
						<MailOpen className="size-8 text-lime-800 dark:text-lime-300" />
						<p className="text-balance font-semibold text-lg text-lime-800 dark:text-lime-300">
							Email
						</p>
						<span className="text-lime-600 text-sm">
							hello@yourewebsite.com
						</span>
					</div>
				</div>
				{/* End Badge Band */}

				<ContactForm />
			</div>
		</div>
	);
}
