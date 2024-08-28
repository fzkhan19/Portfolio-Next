import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "{Title}",
		short_name: "{Title}",
		description: "{Description}",
		theme_color: "#2563eb",
		background_color: "#ffffff",
		display: "standalone",
		orientation: "any",
		scope: "/",
		start_url: "/",
		icons: [
			{
				src: "/favicon.ico",
				sizes: "16x16",
				type: "image/x-icon",
			},
			{
				src: "/favicon/android-icon-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/favicon/android-icon-36x36.png",
				sizes: "36x36",
				type: "image/png",
			},
			{
				src: "/favicon/android-icon-48x48.png",
				sizes: "48x48",
				type: "image/png",
			},
			{
				src: "/favicon/android-icon-72x72.png",
				sizes: "72x72",
				type: "image/png",
			},
		],
	};
}
