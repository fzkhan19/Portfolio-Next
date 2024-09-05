import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const BlogLayoutTwo = ({ blog }: { blog: any }) => {
	return (
		blog && (
			<div className="group grid grid-cols-12 items-center gap-4 text-dark dark:text-light">
				<Link
					href={blog.url}
					className=" col-span-12 h-full overflow-hidden rounded-xl lg:col-span-4"
				>
					<Image
						src={blog.image.filePath.replace("../public", "")}
						placeholder="blur"
						blurDataURL={blog.image.blurhashDataUrl}
						alt={blog.title}
						width={blog.image.width}
						height={blog.image.height}
						className="ease aspect-square h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
						sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
					/>
				</Link>

				<div className="col-span-12 w-full lg:col-span-8">
					<span className="inline-block w-full font-semibold text-accent text-xs uppercase sm:text-sm">
						{blog.tags[0]}
					</span>
					<Link href={blog.url} className="my-1 inline-block">
						<h2 className="font-semibold text-base capitalize sm:text-lg">
							<span className="bg-[length:0px_6px] bg-gradient-to-r bg-left-bottom from-accent/50 to-accent/50 bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_6px] dark:from-accent/50 dark:to-accent/50">
								{blog.title}
							</span>
						</h2>
					</Link>

					<span className="inline-block w-full font-semibold text-gray text-xs capitalize sm:text-base dark:text-light/50">
						{format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
					</span>
				</div>
			</div>
		)
	);
};

export default BlogLayoutTwo;
