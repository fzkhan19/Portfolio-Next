import type React from "react";

export default function BlogLayout({
	children,
}: { children: React.ReactNode }) {
	return <main className="font-mr">{children}</main>;
}
