import { BLUR_FADE_DELAY, DATA } from "@/constants/resume";
import { IconBrandTwitter, IconBrandWhatsapp } from "@tabler/icons-react";
import Link from "next/link";
import BlurFade from "../ui/blur-fade";

export default function Contact() {
	return (
		<section id="contact">
			<div className="grid w-full items-center justify-center gap-4 px-4 py-6 text-center md:px-6">
				<BlurFade delay={BLUR_FADE_DELAY * 11}>
					<div className="space-y-3">
						<div className="inline-block rounded-lg bg-foreground px-3 py-1 text-background text-sm">
							Contact
						</div>
						<h2 className="font-bold text-3xl tracking-tighter md:text-5xl">
							Get in Touch
						</h2>
						<p className="mx-auto max-w-[600px] text-pretty text-muted-foreground md:text-lg">
							Want to chat? Just shoot me a dm{" "}
							<Link
								href={DATA.contact.social.WhatsApp.url}
								target="_blank"
								className="items-center gap-x-2 text-green-500 hover:underline"
							>
								on WhatsApp <IconBrandWhatsapp className="inline size-5" />
							</Link>{" "}
							or{" "}
							<Link
								href={DATA.contact.social.X.url}
								target="_blank"
								className="text-blue-500 hover:underline"
							>
								with a direct question on Twitter{" "}
								<IconBrandTwitter className="inline size-5" />
							</Link>{" "}
							and I&apos;ll respond whenever I can. I will ignore all
							soliciting.
						</p>
					</div>
				</BlurFade>
			</div>
		</section>
	);
}
