import { sortBlogs } from "@/lib/utils";
import BlogLayoutOne from "../BlogLayoutOne";
import BlogLayoutTwo from "../BlogLayoutTwo";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const FeaturedPosts = ({ blogs }: { blogs: any }) => {
	const sortedBlogs = sortBlogs(blogs);
	return (
		<section className="mt-16 flex w-full flex-col items-center justify-center px-5 sm:mt-24 sm:px-10 md:mt-32 md:px-24 lg:px-32">
			<h2 className="inline-block w-full font-bold text-2xl text-dark capitalize md:text-4xl dark:text-light">
				Featured Posts
			</h2>

			<div className="mt-10 grid grid-cols-2 grid-rows-2 gap-6 sm:mt-16">
				<article className=" relative col-span-2 row-span-2 lg:col-span-1">
					<BlogLayoutOne blog={sortedBlogs[1]} />
				</article>
				<article className=" relative col-span-2 row-span-1 sm:col-span-1">
					<BlogLayoutTwo blog={sortedBlogs[2]} />
				</article>
				<article className="relative col-span-2 row-span-1 sm:col-span-1">
					<BlogLayoutTwo blog={sortedBlogs[3]} />
				</article>
			</div>
		</section>
	);
};

export default FeaturedPosts;
