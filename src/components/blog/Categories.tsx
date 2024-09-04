import { slug } from "github-slugger";
import Category from "./Category";

const Categories = ({
	categories,
	currentSlug,
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
}: { categories: any; currentSlug: string }) => {
	return (
		<div className=" mx-5 mt-10 flex flex-wrap items-start border-dark border-t-2 border-b-2 border-solid px-0 py-4 font-medium text-dark md:mx-10 md:px-10 lg:px-20 dark:border-light dark:text-light">
			{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
			{categories.map((cat: any) => (
				<Category
					key={cat}
					link={`/categories/${cat}`}
					name={cat}
					active={currentSlug === slug(cat)}
				/>
			))}
		</div>
	);
};

export default Categories;
