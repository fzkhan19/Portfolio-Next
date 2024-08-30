import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BLUR_FADE_DELAY, DATA } from "@/constants/resume";
import { Badge } from "../ui/badge";
import BlurFade from "../ui/blur-fade";
import BlurFadeText from "../ui/blur-fade-text";
import { ResumeCard } from "./resume-card";

export default function Hero() {
	return (
		<>
			<section id="hero">
				<div className="flex justify-between gap-2 py-4">
					<div className="flex flex-1 flex-col space-y-1.5">
						<BlurFadeText
							delay={BLUR_FADE_DELAY}
							className="font-bold text-3xl tracking-tighter md:text-5xl"
							yOffset={8}
							text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
						/>
						<BlurFadeText
							className="max-w-[600px] md:text-lg"
							delay={BLUR_FADE_DELAY}
							text={DATA.description}
						/>
					</div>
					<BlurFade delay={BLUR_FADE_DELAY}>
						<Avatar className="size-28 border">
							<AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
							<AvatarFallback>{DATA.initials}</AvatarFallback>
						</Avatar>
					</BlurFade>
				</div>
			</section>

			<section id="work">
				<div className="flex min-h-0 flex-col gap-y-3 py-4">
					<BlurFade delay={BLUR_FADE_DELAY * 2}>
						<h2 className="mb-2 font-bold text-xl">Work Experience</h2>
					</BlurFade>
					{DATA.work.map((work, id) => (
						<BlurFade
							key={work.company}
							delay={BLUR_FADE_DELAY * 3 + id * 0.05}
						>
							<ResumeCard
								key={work.company}
								logoUrl={work.logoUrl}
								altText={work.company}
								title={work.company}
								subtitle={work.title}
								href={work.href}
								badges={work.badges}
								period={`${work.start} - ${work.end ?? "Present"}`}
								description={work.description}
							/>
						</BlurFade>
					))}
				</div>
			</section>

			<section id="education">
				<div className="flex min-h-0 flex-col gap-y-4 py-4">
					<BlurFade delay={BLUR_FADE_DELAY * 4}>
						<h2 className="mb-2 font-bold text-xl">Education</h2>
					</BlurFade>
					{DATA.education.map((education, id) => (
						<BlurFade
							key={education.school}
							delay={BLUR_FADE_DELAY * 5 + id * 0.05}
						>
							<ResumeCard
								key={education.school}
								href={education.href}
								logoUrl={education.logoUrl}
								altText={education.school}
								title={education.school}
								subtitle={education.degree}
								period={`${education.start} - ${education.end}`}
							/>
						</BlurFade>
					))}
				</div>
			</section>

			<section id="skills">
				<div className="flex min-h-0 flex-col gap-y-3 py-4">
					<BlurFade delay={BLUR_FADE_DELAY * 6}>
						<h2 className="font-bold text-xl">Skills</h2>
					</BlurFade>
					<div className="flex flex-wrap gap-1">
						{DATA.skills.map((skill, id) => (
							<BlurFade key={skill} delay={BLUR_FADE_DELAY * 7 + id * 0.05}>
								<Badge key={skill}>{skill}</Badge>
							</BlurFade>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
