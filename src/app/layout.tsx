import Providers from "@/components/layout/Providers";
import Dockbar from "@/components/layout/dockbar";
import { Toaster } from "@/components/ui/sonner";
import { JSON_LD, METADATA } from "@/constants/Metadata";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = METADATA;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cn("", inter.className)}>
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
				<Toaster richColors closeButton position="top-right" />
			</body>
		</html>
	);
}
