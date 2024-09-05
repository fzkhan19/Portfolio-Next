import { sortBlogs } from "@/lib/utils";
import Link from "next/link";
import BlogLayoutThree from "../BlogLayoutThree";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const RecentPosts = ({ blogs }: { blogs: any }) => {
	const sortedBlogs = sortBlogs(blogs);
	return (
		<section className="mt-16 flex w-full flex-col items-center justify-center px-5 sm:mt-24 sm:px-10 md:mt-32 md:px-24 lg:px-32">
			<div className="flex w-full justify-between">
				<h2 className="inline-block w-fit font-bold text-2xl text-dark capitalize md:text-4xl dark:text-light">
					Recent Posts
				</h2>
				<Link
					href="/categories/all"
					className="inline-block font-medium text-accent text-base underline underline-offset-2 md:text-lg dark:text-accent"
				>
					View all
				</Link>
			</div>

			<div className="mt-16 grid grid-cols-1 grid-rows-2 gap-16 sm:grid-cols-2 lg:grid-cols-3">
				{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
				{sortedBlogs.slice(0, 10).map((blog: any, index: number) => {
					return (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<article key={index} className="relative col-span-1 row-span-1">
							<BlogLayoutThree blog={blog} />
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default RecentPosts;
