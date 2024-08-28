import type { Metadata } from "next";

const title: string = "Best Landscape Design & Maintenance - Landscaper";
const description: string =
	"We are proud to be a responsible and sustainable lawn care company, dedicated to preserving the environment and the health of your lawn";

// TODO: Change to original url when releasing
export const url: string = "https://landscaper-lime.vercel.app";

export const METADATA: Metadata = {
	title: title,
	description: description,
	keywords: [],
	manifest: "/manifest.webmanifest",
	icons: [
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			url: "/favicon/favicon-32x32.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			url: "/favicon/favicon-16x16.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "192x192",
			url: "/favicon/android-icon-192x192.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			url: "/favicon/favicon-32x32.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "96x96",
			url: "/favicon/favicon-96x96.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			url: "/favicon/favicon-16x16.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "57x57",
			url: "/favicon/apple-icon-57x57.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "60x60",
			url: "/favicon/apple-icon-60x60.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "72x72",
			url: "/favicon/apple-icon-72x72.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "76x76",
			url: "/favicon/apple-icon-76x76.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "114x114",
			url: "/favicon/apple-icon-114x114.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "120x120",
			url: "/favicon/apple-icon-120x120.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "144x144",
			url: "/favicon/apple-icon-144x144.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "152x152",
			url: "/favicon/apple-icon-152x152.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "180x180",
			url: "/favicon/apple-icon-180x180.png",
		},
	],
	openGraph: {
		title,
		description,
		type: "website",
		siteName: "{Title}",
		url: url,
		images: [
			{
				url: "/opengraph/opengraph-image.png",
				width: 1200,
				height: 630,
			},
		],
	},
	twitter: {
		title,
		description,
		card: "summary_large_image",
		creator: "@FaizKhan",
		creatorId: "10267032498603556917",
		images: [
			{
				url: "/opengraph/opengraph-image.png",
				width: 1200,
				height: 630,
			},
		],
	},
};

export const JSON_LD = {
	"@context": "https://schema.org",
	"@type": "Landscaping",
	name: "{Title}",
	url: url,
	logo: `${url}/opengraph-image.png`,
	image: `${url}/opengraph-image.png`,
	description: "{Description}",
	areaServed: {
		"@type": "Place",
		name: "London",
		address: {
			"@type": "PostalAddress",
			addressLocality: "London",
			addressCountry: "GB",
		},
	},
	serviceType: "Landscaping Service",
	availableService: [
		{
			"@type": "Service",
			serviceType: "",
			description: "",
		},
		{
			"@type": "Service",
			serviceType: "{}",
			description: "",
		},
	],
	offers: {
		"@type": "Offer",
		url: `${url}`,
		priceCurrency: "GBP",
		price: "Varies",
		eligibleRegion: {
			"@type": "Place",
			name: "London",
		},
		availability: "https://schema.org/InStock",
		itemOffered: {
			"@type": "Service",
			serviceType: "Landscaping",
		},
	},
	contactPoint: {
		"@type": "ContactPoint",
		telephone: "+44-20-12345678",
		contactType: "Customer Service",
		availableLanguage: "English",
		areaServed: "GB",
	},
	sameAs: [
		"https://www.facebook.com/",
		"https://www.twitter.com/",
		"https://www.instagram.com/",
	],
};
