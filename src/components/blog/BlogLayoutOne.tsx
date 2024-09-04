import Tag from "@/components/ui/tag";
import { slug } from "github-slugger";
import Image from "next/image";
import Link from "next/link";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const BlogLayoutOne = ({ blog }: { blog: any }) => {
	return (
		<div className="group inline-block overflow-hidden rounded-xl">
			<div className="absolute top-0 right-0 bottom-0 left-0 z-10 h-full rounded-xl bg-gradient-to-b from-0% from-transparent to-dark/90 " />
			<Image
				src={blog.image.filePath.replace("../public", "")}
				placeholder="blur"
				blurDataURL={blog.image.blurhashDataUrl}
				alt={blog.title}
				width={blog.image.width}
				height={blog.image.height}
				className="ease h-full w-full rounded-xl object-cover object-center transition-all duration-300 group-hover:scale-105"
				sizes="(max-width: 1180px) 100vw, 50vw"
			/>

			<div className="absolute bottom-0 z-20 w-full p-4 xs:p-6 sm:p-10">
				<Tag
					link={`/categories/${slug(blog.tags[0])}`}
					name={blog.tags[0]}
					className="!border px-6 py-1 text-xs sm:py-2 sm:text-sm "
				/>
				<Link href={blog.url} className="mt-6">
					<h2 className="mt-2 font-bold text-light text-sm xs:text-base capitalize sm:mt-4 sm:text-xl md:text-2xl">
						<span className="bg-[length:0px_6px] bg-gradient-to-r bg-left-bottom from-accent to-accent bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_6px] dark:from-accentDark/50 dark:to-accentDark/50 ">
							{blog.title}
						</span>
					</h2>
				</Link>
			</div>
		</div>
	);
};

export default BlogLayoutOne;
