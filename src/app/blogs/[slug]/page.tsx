import BlogDetails from "@/components/blog/BlogDetails";
import RenderMdx from "@/components/blog/RenderMdx";
import Tag from "@/components/ui/tag";
import { siteMetadata } from "@/lib/siteMetaData";
import type { Blog } from "contentlayer/generated";
import { allBlogs } from "contentlayer/generated";
import { slug } from "github-slugger";
import Image from "next/image";
import { notFound } from "next/navigation";
import Script from "next/script";

export async function generateMetadata({
	params,
}: { params: { slug: string } }) {
	const blog = allBlogs.find(
		(blog: Blog) => blog._raw.flattenedPath === params.slug,
	);
	if (!blog) {
		return;
	}

	const publishedAt = new Date(blog.publishedAt).toISOString();
	const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();

	let imageList: string[] = [siteMetadata.socialBanner];
	if (blog.image) {
		imageList =
			typeof blog.image.filePath === "string"
				? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
				: Array.isArray(blog.image)
					? blog.image
					: [blog.image.toString()];
	}
	const ogImages = imageList.map((img) => {
		return { url: img.includes("http") ? img : siteMetadata.siteUrl + img };
	});

	const authors = blog?.author ? [blog.author] : siteMetadata.author;

	return {
		title: blog.title,
		description: blog.description,
		alternate: {
			canonical: siteMetadata.siteUrl + blog.url,
		},
		openGraph: {
			title: blog.title,
			description: blog.description,
			url: siteMetadata.siteUrl + blog.url,
			siteName: siteMetadata.title,
			locale: "en_US",
			type: "article",
			publishedTime: publishedAt,
			modifiedTime: modifiedAt,
			images: ogImages,
			authors: authors.length > 0 ? authors : [siteMetadata.author],
		},
		twitter: {
			card: "summary_large_image",
			title: blog.title,
			description: blog.description,
			images: ogImages,
		},
	};
}

export default function Page({ params }: { params: { slug: string } }) {
	const blog = allBlogs.find(
		(blog: Blog) => blog._raw.flattenedPath === params.slug,
	);

	if (!blog) {
		notFound();
	}

	let imageList: string[] = [siteMetadata.socialBanner];
	if (blog.image) {
		imageList =
			typeof blog.image.filePath === "string"
				? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
				: Array.isArray(blog.image)
					? blog.image
					: [blog.image.toString()];
	}

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "NewsArticle",
		headline: blog.title,
		description: blog.description,
		image: imageList,
		datePublished: new Date(blog.publishedAt).toISOString(),
		dateModified: new Date(blog.updatedAt || blog.publishedAt).toISOString(),
		author: [
			{
				"@type": "Person",
				name: blog?.author ? [blog.author] : siteMetadata.author,
				url: siteMetadata.twitter,
			},
		],
	};

	return (
		<>
			<Script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<article>
				<div className="relative mb-8 h-[70vh] w-full bg-dark text-center">
					<div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 z-10 flex w-full flex-col items-center justify-center">
						{blog.tags && blog.tags.length > 0 && (
							<Tag
								name={blog.tags[0]}
								link={`/categories/${slug(blog.tags[0])}`}
								className="px-6 py-2 text-sm"
							/>
						)}
						<h1 className="!leading-normal relative mt-6 inline-block w-5/6 font-semibold text-2xl text-light capitalize md:text-3xl lg:text-5xl">
							{blog.title}
						</h1>
					</div>
					<div className="absolute top-0 right-0 bottom-0 left-0 h-full bg-dark/60 dark:bg-dark/40" />
					{blog.image && (
						<Image
							src={blog.image.filePath.replace("../public", "")}
							placeholder="blur"
							blurDataURL={blog.image.blurhashDataUrl}
							alt={blog.title}
							width={blog.image.width}
							height={blog.image.height}
							className="aspect-square h-full w-full object-cover object-center"
							priority
							sizes="100vw"
						/>
					)}
				</div>
				<BlogDetails blog={blog} slug={params.slug} />

				<div className="mt-8 grid grid-cols-12 gap-y-8 px-5 md:px-10 lg:gap-16">
					<div className="col-span-12 lg:col-span-4">
						<details
							className="sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto rounded-lg border-[1px] border-dark border-solid p-4 text-dark dark:border-light dark:text-light"
							open
						>
							<summary className="cursor-pointer font-semibold text-lg capitalize">
								Table Of Content
							</summary>
							<ul className="mt-4 font-in text-base">
								{blog.toc.map(
									(heading: {
										slug: string;
										level: string;
										text: string;
									}) => {
										return (
											<li key={`#${heading.slug}`} className="py-1">
												<a
													href={`#${heading.slug}`}
													data-level={heading.level}
													className="flex items-center justify-start border-dark/40 border-solid data-[level=two]:border-t data-[level=two]:pt-2 data-[level=three]:pl-4 data-[level=two]:pl-0 sm:data-[level=three]:pl-6 "
												>
													{heading.level === "three" ? (
														<span className="mr-2 flex h-1 w-1 rounded-full bg-dark" />
													) : null}

													<span className="hover:underline">
														{heading.text}
													</span>
												</a>
											</li>
										);
									},
								)}
							</ul>
						</details>
					</div>
					<RenderMdx blog={blog} />
				</div>
			</article>
		</>
	);
}
