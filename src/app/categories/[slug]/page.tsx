export const dynamicParams = false;

import BlogLayoutThree from "@/components/blog/BlogLayoutThree";
import Categories from "@/components/blog/Categories";
import { allBlogs } from "contentlayer/generated";
import GithubSlugger, { slug } from "github-slugger";

const slugger = new GithubSlugger();

export async function generateStaticParams() {
	const categories: string[] = [];
	const paths = [{ slug: "all" }];

	allBlogs.map((blog) => {
		if (blog.isPublished && blog.tags) {
			blog.tags.map((tag) => {
				const slugified = slugger.slug(tag);
				if (!categories.includes(slugified)) {
					categories.push(slugified);
					paths.push({ slug: slugified });
				}
			});
		}
	});

	return paths;
}

export async function generateMetadata({
	params,
}: { params: { slug: string } }) {
	return {
		title: `${params.slug.replaceAll("-", " ")} Blogs`,
		description: `Learn more about ${params.slug === "All" ? "web development" : params.slug} through our collection of expert blogs and tutorials`,
	};
}

const CategoryPage = ({ params }: { params: { slug: string } }) => {
	// Separating logic to create list of categories from all blogs
	const allCategories = ["all"]; // Initialize with 'all' category
	for (const blog of allBlogs) {
		if (blog.tags) {
			for (const tag of blog.tags) {
				const slugified = slug(tag);
				if (!allCategories.includes(slugified)) {
					allCategories.push(slugified);
				}
			}
		}
	}

	// Sort allCategories to ensure they are in alphabetical order
	allCategories.sort();

	// Step 2: Filter blogs based on the current category (params.slug)
	const blogs = allBlogs.filter((blog) => {
		if (params.slug === "all") {
			return true; // Include all blogs if 'all' category is selected
		}
		return blog.tags?.some((tag) => slug(tag) === params.slug) ?? false;
	});

	return (
		<article className="mt-12 flex flex-col text-dark dark:text-light">
			<div className=" flex flex-col px-5 sxl:px-32 sm:px-10 md:px-24">
				<h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">
					#{params.slug}
				</h1>
				<span className="mt-2 inline-block">
					Discover more categories and expand your knowledge!
				</span>
			</div>
			<Categories categories={allCategories} currentSlug={params.slug} />

			<div className="mt-5 sxl:mt-32 grid grid-cols-1 grid-rows-2 gap-16 px-5 sxl:px-32 sm:mt-10 sm:grid-cols-2 sm:px-10 md:mt-24 md:px-24 lg:grid-cols-3">
				{blogs.map((blog, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<article key={index} className="relative col-span-1 row-span-1">
						<BlogLayoutThree blog={blog} />
					</article>
				))}
			</div>
		</article>
	);
};
export default CategoryPage;
