import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
	title: "Blog | Faiz",
	description: "Tech Blogs by Faiz Khan",
};

export default function BlogLayout({
	children,
}: { children: React.ReactNode }) {
	return <main className="pb-24 font-mr">{children}</main>;
}
