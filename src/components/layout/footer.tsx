import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandTwitter,
	IconBrandYoutube,
} from "@tabler/icons-react";
import Link from "next/link";

const pages = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Services", href: "/services" },
	{ name: "Portfolio", href: "/portfolio" },
	{ name: "Contact", href: "/contact" },
];

const services = [
	{ name: "Garden design installation", href: "#" },
	{ name: "Lawn maintenance", href: "#" },
	{ name: "Hardscape construction", href: "#" },
	{ name: "Irrigation Systems", href: "#" },
];

export default function Footer() {
	return (
		<footer className="relative mt-8 flex w-full flex-col items-start justify-center gap-16 border-primary border-t">
			<div className="mt-8 ml-8 flex w-full flex-col items-start justify-center gap-16 md:ml-0 md:flex-row">
				<div className="flex flex-col gap-2 md:mr-28">
					<h2 className="font-extrabold text-3xl text-lime-800 dark:text-lime-200">
						LANDSCAPERS
					</h2>
					<p className="w-56 text-sm">
						Best Landscape Design & Maintenance services in the Columbus OH
					</p>
					<div className="-ml-1 mt-2 flex gap-4">
						<Link href="">
							<IconBrandFacebook className="text-lime-700" />
						</Link>
						<Link href="">
							<IconBrandInstagram className="text-lime-700" />
						</Link>
						<Link href="">
							<IconBrandYoutube className="text-lime-700" />
						</Link>
						<Link href="">
							<IconBrandTwitter className="text-lime-700" />
						</Link>
					</div>
				</div>

				<div className="flex flex-col">
					<h2 className="font-bold text-base tracking-tight">ADDRESS</h2>
					<p className="mt-3 w-52 text-pretty text-sm">
						123 Maple Street, Sunnyville, CA 90210, United States
					</p>
					<p className="mt-3 text-sm">Phone: +1 800 123 45 67</p>
					<p className="text-sm">Email: email@example.com</p>
				</div>

				<div className="flex flex-col">
					<h2 className="mb-2 font-bold text-base tracking-tight">
						NAVIGATION
					</h2>
					{pages.map((page) => (
						<Link className="mt-1" key={page.name} href={page.href}>
							<span className="text-sm">{page.name}</span>
						</Link>
					))}
				</div>

				<div className="flex flex-col gap-2">
					<h2 className="font-bold text-base tracking-tight">OUR SERVICES</h2>
					{services.map((service) => (
						<Link className="mt-0.5" key={service.name} href={service.href}>
							<span className="text-sm">{service.name}</span>
						</Link>
					))}
				</div>
			</div>

			<div className="flex w-full items-center justify-around p-6 md:px-16">
				<h2 className="text-sm">
					Copyright © 2024 Landscapers services All rights reserved.
				</h2>
				<div className="flex gap-12">
					<Link className="text-sm" href="/privacy-policy">
						Privacy Policy
					</Link>
					<Link className="text-sm" href="/terms-and-conditions">
						Terms & Conditions
					</Link>
				</div>
			</div>

			{/* Gradients */}
			<div
				aria-hidden="true"
				className="-translate-x-1/2 -bottom-8 -z-10 absolute start-1/2 hidden transform md:flex"
			>
				<div className="-translate-x-[10rem] h-[12rem] w-[25rem] rotate-[-60deg] transform bg-gradient-to-r from-primary/50 to-primary/20 blur-3xl" />
				<div className="-rotate-12 h-[24rem] w-[50rem] origin-top-left translate-x-[35rem] rounded-full bg-gradient-to-tl from-primary/50 to-primary/10 blur-3xl" />
			</div>
			{/* End Gradients */}
		</footer>
	);
}
