"use client";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

const mdxComponents = {
	Image,
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const RenderMdx = ({ blog }: { blog: any }) => {
	const MDXContent = useMDXComponent(blog.body.code);

	return (
		<div className="prose sm:prose-base md:prose-lg dark:prose-invert col-span-12 max-w-max prose-blockquote:rounded-r-lg prose-blockquote:border-accent prose-blockquote:bg-accent/20 prose-blockquote:p-2 prose-blockquote:px-6 font-in prose-blockquote:not-italic first-letter:text-3xl prose-li:marker:text-accent sm:first-letter:text-5xl lg:col-span-8 dark:prose-blockquote:border-accentDark dark:prose-blockquote:bg-accentDark/20 dark:prose-li:marker:text-accentDark ">
			<MDXContent components={mdxComponents} />
		</div>
	);
};

export default RenderMdx;
