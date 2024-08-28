"use client";
import { AutosizeTextarea } from "@/components/ui/autoResizeTextArea";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
export default function ContactForm() {
	const formSchema = z.object({
		name: z.string().min(2).max(50),
		email: z.string().email(),
		phone_number: z.string().min(10).max(15),
		address: z.string().min(2),
		notes: z.string().min(2).max(50),
	});

	const formRef = useRef<HTMLFormElement>(null);
	const [isLoading, setIsLoading] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsLoading(true);
		if (
			process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
			process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
			process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
			formRef.current
		) {
			emailjs
				.sendForm(
					process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
					process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
					formRef.current,
					process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
				)
				.then(
					() => {
						toast.success("Message sent successfully");
					},
					() => {
						toast.error("Message failed to send");
					},
				)
				.finally(() => {
					setIsLoading(false);
					form.reset();
				});
		}
		form.reset();
	};

	return (
		<div className="mx-auto flex max-w-5xl flex-col items-center justify-center py-10 text-center">
			<p className="text-center text-lime-600 text-xs tracking-tight">
				CONTACT FORM
			</p>
			{/* Title */}
			<div className="mt-2 w-full">
				<h1 className="text scroll-m-20 text-balance font-bold text-2xl text-lime-600 lg:text-4xl">
					Let's schedule your appointment
				</h1>
			</div>
			{/* End Title */}
			<div className="mt-5 max-w-3xl">
				<p className="text-pretty text-muted-foreground text-sm md:text-base">
					Feel free to give us a call or send us a message and we'll help get
					the answers you need, or a quote for services at your residential or
					commercial property.
				</p>
			</div>

			<Form {...form}>
				<form
					className="flex w-full max-w-4xl flex-col space-y-8 py-20"
					onSubmit={sendEmail}
					ref={formRef}
				>
					<div className="grid gap-4 md:grid-cols-2">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem className="flex flex-col space-y-4">
									<FormLabel className="ml-2 place-self-start text-lime-600 dark:text-lime-200">
										Name
									</FormLabel>
									<FormControl>
										<Input placeholder="Enter your name" {...field} />
									</FormControl>
									<FormMessage className="ml-2 place-self-start" />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem className="flex flex-col space-y-4">
									<FormLabel className="ml-2 place-self-start text-lime-600 dark:text-lime-200">
										Email
									</FormLabel>
									<FormControl>
										<Input placeholder="Enter your email" {...field} />
									</FormControl>
									<FormMessage className="ml-2 place-self-start" />
								</FormItem>
							)}
						/>
					</div>
					<div className="grid gap-4 md:grid-cols-2">
						<FormField
							control={form.control}
							name="phone_number"
							render={({ field }) => (
								<FormItem className="flex flex-col space-y-4">
									<FormLabel className="ml-2 place-self-start text-lime-600 dark:text-lime-200">
										Phone Number
									</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter your phone number"
											type="tel"
											{...field}
										/>
									</FormControl>
									<FormMessage className="ml-2 place-self-start" />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="address"
							render={({ field }) => (
								<FormItem className="flex flex-col space-y-4">
									<FormLabel className="ml-2 place-self-start text-lime-600 dark:text-lime-200">
										Address
									</FormLabel>
									<FormControl>
										<Input placeholder="Enter your address" {...field} />
									</FormControl>
									<FormMessage className="ml-2 place-self-start" />
								</FormItem>
							)}
						/>
					</div>
					<FormField
						control={form.control}
						name="notes"
						render={({ field }) => (
							<FormItem className="flex flex-col space-y-4">
								<FormLabel className="ml-2 place-self-start text-lime-600 dark:text-lime-200">
									Notes
								</FormLabel>
								<FormControl>
									<AutosizeTextarea
										className="no-scrollbar resize-none text-pretty pr-8"
										placeholder="Enter your message"
										minHeight={100}
										maxHeight={500}
										{...field}
									/>
								</FormControl>
								<FormMessage className="ml-2 place-self-start" />
							</FormItem>
						)}
					/>
					<Button
						className="w-48 text-primary-foreground"
						disabled={isLoading || form.formState.isSubmitting}
						type="submit"
					>
						Send Message
					</Button>
				</form>
			</Form>
		</div>
	);
}
