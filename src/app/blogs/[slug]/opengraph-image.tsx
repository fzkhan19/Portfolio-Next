export const runtime = "edge";

import { allBlogs } from "contentlayer/generated";
import { ImageResponse } from "next/og";

export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

// Optional alt text for the image
export const alt = "Blog image";

// Function to fetch blog details based on the slug
async function fetchBlogData(slug: string) {
	const blog = allBlogs.find((b) => b._id === slug);
	return blog ? blog : { title: "Blog not found" };
}

// Main function to generate the OG image
export default async function Image({ params }: { params: { slug: string } }) {
	const blog = await fetchBlogData(params.slug);

	return new ImageResponse(
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				width: "100%",
				height: "100%",
				backgroundColor: "#f0f0f0",
				fontSize: 48,
				fontWeight: "bold",
				color: "#333",
				padding: "20px",
				textAlign: "center",
			}}
		>
			{blog.title}
		</div>,
		{
			...size,
		},
	);
}
