/** @type {import('next').NextConfig} */
import MillionLint from "@million/lint";
const nextConfig = {
	images: {
		domains: [
			"placehold.co",
			"api.microlink.io",
			"th.bing.com",
			"briskteq.com",
			"www.gtu.ac.in",
		],
	},
};
export default MillionLint.next({
	rsc: true,
})(nextConfig);
