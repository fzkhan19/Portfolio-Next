import Providers from "@/components/layout/Providers";
import Dockbar from "@/components/layout/dockbar";
import { JSON_LD } from "@/constants/Metadata";
import { siteMetadata } from "@/lib/siteMetaData";
import { cn } from "@/lib/utils";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-in",
});

const manrope = Manrope({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-mr",
});

export const metadata = {
	metadataBase: new URL(siteMetadata.siteUrl),
	title: siteMetadata.title, // a default is required when creating a template
	description: siteMetadata.description,
	openGraph: {
		title: siteMetadata.title,
		description: siteMetadata.description,
		url: siteMetadata.siteUrl,
		siteName: siteMetadata.title,
		images: [siteMetadata.socialBanner],
		locale: "en_US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		card: "summary_large_image",
		title: siteMetadata.title,
		images: [siteMetadata.socialBanner],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cn("", inter.variable, manrope.variable)}>
				<main className="no-scrollbar overflow-x-hidden overflow-y-scroll scroll-smooth">
					<script
						// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
						dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
						type="application/ld+json"
					/>
					<Providers>
						{children}
						<Dockbar />
					</Providers>
				</main>
			</body>
		</html>
	);
}
