export const services: {
	title: string;
	icon: string;
	description: string;
}[] = [
	{
		title: "Full-Stack Developer",
		icon: "web", // Replace with actual path or import statement
		description:
			"I craft dynamic, responsive web applications, expertly bridging front-end experiences and back-end functionality for a seamless user journey.",
	},
	{
		title: "React Magician",
		icon: "mobile", // Replace with actual path or import statement
		description:
			"I specialize in React, conjuring up captivating user interfaces that captivate and engage, ensuring your web applications leave a lasting impression.",
	},
	{
		title: "Backend Maestro",
		icon: "backend", // Replace with actual path or import statement
		description:
			"I orchestrate powerful backends, optimizing the performance and reliability of web applications, enabling them to shine under the hood.",
	},
	{
		title: "Creative Content Creator",
		icon: "creator", // Replace with actual path or import statement
		description:
			"I transform content into compelling narratives, crafting stories that resonate and inspire, connecting you with your audience on a deeper level.",
	},
];

export const technologies: { name: string; icon: string }[] = [
	{ name: "HTML 5", icon: "html" }, // Replace with actual path or import statement
	{ name: "CSS 3", icon: "css" },
	{ name: "JavaScript", icon: "javascript" },
	{ name: "TypeScript", icon: "typescript" },
	{ name: "React JS", icon: "reactjs" },
	{ name: "Tailwind CSS", icon: "tailwind" },
	{ name: "Node JS", icon: "nodejs" },
	{ name: "MongoDB", icon: "mongodb" },
	{ name: "Three JS", icon: "threejs" },
	{ name: "Git", icon: "git" },
	{ name: "Figma", icon: "figma" },
	{ name: "Docker", icon: "docker" },
];

export const experiences: {
	title: string;
	company_name: string;
	icon: string;
	iconBg: string;
	date: string;
	points: string[];
}[] = [
	{
		title: "Associate Software Engineer",
		company_name: "Brisktech",
		icon: "brisktech", // Replace with actual path or import statement
		iconBg: "#383E56",
		date: "01/2023 - Present, Surat",
		points: [
			"Leading full-stack development projects on cutting-edge technologies, ensuring seamless front-end to back-end integration.",
			"Proficient in JavaScript, Python, Java, SQL, HTML, CSS, React, Node.js, Next.js, Gatsby, and RESTful APIs.",
			"Expertise in software architecture, debugging, and problem-solving for optimized code performance.",
			"Committed to staying current with industry trends, implementing DevOps, Agile methodologies, and CI/CD pipelines.",
		],
	},
	{
		title: "Web Developer Intern",
		company_name: "DPI Rainbow Foundation",
		icon: "dpi", // Replace with actual path or import statement
		iconBg: "#383E56",
		date: "06/2022 - 07/2022",
		points: [
			"Successfully completed a web development internship, gaining valuable hands-on experience.",
			"Collaborated closely with the development team to create and deploy a dynamic website.",
			"Assisted in coding, testing, and debugging web applications, contributing to project success.",
			"Demonstrated dedication and a keen ability to adapt to new challenges in a fast-paced environment.",
			"Actively participated in the planning and design phases of web development projects, contributing creative ideas and innovative solutions to enhance user experiences.",
			"Supported the optimization of website performance, including loading times and responsiveness, ensuring an exceptional end-user experience.",
		],
	},
	{
		title: "Secondary School Teacher",
		company_name: "Innovative Tuition",
		icon: "innovative", // Replace with actual path or import statement
		iconBg: "#E6DEDD",
		date: "06/2019 - 01/2023, Surat",
		points: [
			"Delivered comprehensive education to 9th and 10th-grade students, specializing in Mathematics, Science, English, and Computer subjects.",
			"Tailored teaching methods to engage students and promote effective learning.",
			"Fostered a supportive classroom environment, resulting in improved student performance and achievements.",
			"Collaborated with colleagues and parents to ensure students' academic and personal development.",
		],
	},
];

export const testimonials: {
	testimonial: string;
	name: string;
	designation: string;
	company: string;
	image: string;
}[] = [
	{
		testimonial:
			"Working with Faiz has been a pleasure. His expertise in full-stack development and strong problem-solving skills greatly contributed to our projects. His commitment to staying updated with industry trends and code optimization makes him a valuable asset.",
		name: "Varun Patel",
		designation: "CEO",
		company: "Brisktech",
		image: "varun", // Replace with actual path or import statement
	},
	{
		testimonial:
			"Faiz's impact as a school teacher was remarkable. His tailored teaching methods improved student performance and achievements. He collaborated effectively with colleagues and parents for students' development.",
		name: "Rafiyah Ijardaar",
		designation: "Owner",
		company: "Innovative Tuition",
		image: "rafiyah", // Replace with actual path or import statement
	},
	{
		testimonial:
			"Faiz's contribution as a web development intern was impressive. He actively participated in project planning and offered innovative solutions to enhance user experiences. His dedication and ability to optimize website performance were essential to our project's success.",
		name: "Lakshmi Krishnan",
		designation: "Manager",
		company: "DPI Rainbow Foundation",
		image: "male", // Replace with actual path or import statement
	},
];

export const projects: {
	name: string;
	description: string;
	tags: { name: string; color: string }[];
	image: string;
	source_code_link: string;
	live_link: string;
}[] = [
	{
		name: "Video Call App",
		description:
			"A real-time video chat application developed in React, allowing users to have video calls and chat with each other.",
		tags: [
			{ name: "React", color: "blue-text-gradient" },
			{ name: "WebRTC", color: "green-text-gradient" },
			{ name: "Video Chat", color: "pink-text-gradient" },
		],
		image: "vidcall", // Replace with actual path or import statement
		source_code_link: "https://github.com/fzkhan19/WebRTC1-1",
		live_link: "https://khan-webrtc.netlify.app/",
	},
	{
		name: "3D Portfolio",
		description:
			"A 3D portfolio website built using React and Three.js, showcasing my design and development skills with interactive 3D elements.",
		tags: [
			{ name: "React", color: "blue-text-gradient" },
			{ name: "Three.js", color: "green-text-gradient" },
			{ name: "Portfolio", color: "pink-text-gradient" },
		],
		image: "portfolio", // Replace with actual path or import statement
		source_code_link: "https://github.com/fzkhan19/Portfolio",
		live_link: "https://portfolio-fzkhan.netlify.app/",
	},
	{
		name: "Google Web Scraper",
		description:
			"A web scraper built with Node.js and Puppeteer to extract Google reviews, providing valuable data for analysis and insights.",
		tags: [
			{ name: "Node.js", color: "blue-text-gradient" },
			{ name: "Puppeteer", color: "green-text-gradient" },
			{ name: "Web Scraper", color: "pink-text-gradient" },
		],
		image: "webscraper", // Replace with actual path or import statement
		source_code_link: "https://github.com/fzkhan19/googleReviewScraper",
		live_link: "https://github.com/fzkhan19/googleReviewScraper",
	},
	{
		name: "Omnifood",
		description:
			"A single-page application (SPA) showcasing my design skills, built with pure HTML and CSS, highlighting the concept of Omnifood.",
		tags: [
			{ name: "HTML", color: "blue-text-gradient" },
			{ name: "CSS", color: "green-text-gradient" },
			{ name: "Design", color: "pink-text-gradient" },
		],
		image: "omnifood", // Replace with actual path or import statement
		source_code_link: "https://github.com/fzkhan19/Omnifood",
		live_link: "https://omnifood-faiz.netlify.app/",
	},
];
