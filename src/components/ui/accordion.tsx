"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item
		ref={ref}
		className={cn(
			"rounded border-0 bg-white px-4 py-2",
			"shadow-[2px_3px_5px_rgb(0,0,0,0.2)] shadow-primary/40",
			className,
		)}
		{...props}
	/>
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Header className="flex">
		<AccordionPrimitive.Trigger
			ref={ref}
			className={cn(
				"relative flex flex-1 items-center justify-between py-4 font-medium",
				"transition-all after:absolute after:bottom-3 after:h-[1.5px] after:w-[94%]",
				"after:origin-bottom-right after:scale-x-0 after:bg-primary",
				"after:transition-transform after:duration-500 after:ease-in-out",
				"hover:after:origin-bottom-left hover:after:scale-x-100 [&[data-state=open]>svg]:rotate-180",
				className,
			)}
			{...props}
		>
			{children}
			<ChevronDown className="h-6 w-6 shrink-0 rounded-full bg-lime-200 p-0.5 text-lime-700 transition-transform duration-200" />
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
		{...props}
	>
		<div className={cn("pt-0 pb-4", className)}>{children}</div>
	</AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
