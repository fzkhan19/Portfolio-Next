import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
	question: string;
	answer: string;
	value: string;
}

const FAQList: FAQProps[] = [
	{
		question: "How often do you come per month?",
		answer:
			"We aim to come weekly for lawn and yard maintenance, especially in peak growth season. Every yard is unique, which is why we're regularly checking up and keeping notes on your yard so we can best serve you year-round. ",
		value: "item-1",
	},
	{
		question: "What is your cancellation policy?",
		answer:
			"We understand that sometimes life happens, and we want to make sure you're always in control of your experience. If you need to cancel, please let us know as soon as possible, and we'll do our best to accommodate your needs.",
		value: "item-2",
	},
	{
		question: "Lorem ipsum dolor sit amet Consectetur?",
		answer:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore qui nostrum reiciendis veritatis.",
		value: "item-3",
	},
];

export const FAQSection = () => {
	return (
		<section className="container py-12 sm:py-32 md:w-[700px]" id="faq">
			<div className="mb-8 text-center">
				<h2 className="text-center text-lime-600 text-xs tracking-tight md:text-sm">
					FREQUENTLY ASKED QUESTIONS
				</h2>

				<h1 className="scroll-m-20 text-pretty font-extrabold text-4xl text-lime-600 lg:text-6xl">
					You've got questions. we've got answers.
				</h1>
			</div>

			<Accordion collapsible className="AccordionRoot" type="single">
				{FAQList.map(({ question, answer, value }) => (
					<AccordionItem key={value} value={value} className="mb-4">
						<AccordionTrigger className="text-left font-bold text-lime-900">
							{question}
						</AccordionTrigger>
						<AccordionContent className="text-lime-800">
							{answer}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</section>
	);
};
