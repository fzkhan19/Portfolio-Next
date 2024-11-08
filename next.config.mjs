/** @type {import('next').NextConfig} */
// import MillionLint from "@million/lint";
import { withContentlayer } from "next-contentlayer";
const nextConfig = {
	images: {
		domains: [
			"placehold.co",
			"api.microlink.io",
			"th.bing.com",
			"briskteq.com",
			"www.gtu.ac.in",
			"i.scdn.co",
		],
	},
	swcMinify: true,
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "X-Frame-Options",
						value: "DENY",
					},
					{
						key: "Content-Security-Policy",
						value:
							"default-src 'self'; img-src 'self' data: https://placehold.co https://api.microlink.io https://th.bing.com https://briskteq.com https://www.gtu.ac.in https://i.scdn.co https://unsplash.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline'; font-src 'self' data: https://fonts.googleapis.com; connect-src 'self' https://valid-tiger-53934.upstash.io/pipeline https://api.microlink.io https://api.github.com https://github.com https://www.google-analytics.com https://va.vercel-scripts.com; frame-src 'self' https://www.google.com https://www.youtube.com https://player.vimeo.com",
					},
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "Permissions-Policy",
						value: "camera=(), geolocation=(), microphone=()",
					},
					{
						key: "Referrer-Policy",
						value: "origin-when-cross-origin",
					},
				],
			},
		];
	},
};
export default withContentlayer({ ...nextConfig });

// export default MillionLint.next({
// 	rsc: true,
// })(nextConfig);
