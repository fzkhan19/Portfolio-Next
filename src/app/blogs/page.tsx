import FeaturedPosts from "@/components/blog/Home/FeaturedPosts";
import HomeCoverSection from "@/components/blog/Home/HomeCoverSection";
import RecentPosts from "@/components/blog/Home/RecentPosts";
import { allBlogs } from "contentlayer/generated";

export default function Page() {
	return (
		<main className="flex flex-col items-center justify-center">
			<HomeCoverSection blogs={allBlogs} />
			<FeaturedPosts blogs={allBlogs} />
			<RecentPosts blogs={allBlogs} />
		</main>
	);
}
