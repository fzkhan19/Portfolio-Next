import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";
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
};

if (process.env.NODE_ENV === "development") {
	await setupDevPlatform();
}

export default withContentlayer({ ...nextConfig });

// export default MillionLint.next({
// 	rsc: true,
// })(nextConfig);
