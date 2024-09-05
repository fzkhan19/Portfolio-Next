import type React from "react";

export default function BlogLayout({
	children,
}: { children: React.ReactNode }) {
	return <main className="pb-24 font-mr">{children}</main>;
}
