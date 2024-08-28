/** @type {import('next').NextConfig} */
import MillionLint from "@million/lint";
const nextConfig = {
	images: {
		domains: ["placehold.co"],
	},
};
export default MillionLint.next({
	rsc: true,
})(nextConfig);
