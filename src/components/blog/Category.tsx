import { cn } from "@/lib/utils";
import Link from "next/link";

const Category = ({
	link = "#",
	name,
	active,
	...props
}: { link?: string; name: string; active?: boolean; className?: string }) => {
	return (
		<Link
			href={link}
			className={cn(
				"ease m-2 inline-block rounded-full border-2 border-dark border-solid px-6 py-1.5 transition-all duration-200 hover:scale-105 md:px-10 md:py-2 dark:border-light",
				props.className,
				active
					? "bg-dark text-light dark:bg-light dark:text-dark"
					: "bg-light text-dark dark:bg-dark dark:text-light",
			)}
		>
			#{name}
		</Link>
	);
};

export default Category;
