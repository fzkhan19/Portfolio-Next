export default function Hero() {
	return (
		<div className="relative z-10 w-full">
			<div className="container w-full py-10 lg:py-16">
				<div className="mx-auto w-full max-w-6xl text-center">
					<p className="flex justify-center text-lime-600 text-xs tracking-tight">
						ABOUT US
					</p>
					{/* Title */}
					<div className="mt-2 lg:mt-5">
						<h1 className="text scroll-m-20 text-balance font-extrabold text-4xl text-lime-600 tracking-wide lg:text-6xl">
							Not sure how to choose perfect contractor ?
						</h1>
					</div>
					{/* End Title */}
					<div className="mt-5">
						<p className="text-balance text-base text-muted-foreground lg:text-lg">
							We offer high-quality and award-winning services to all of our
							clients with a commitment to do our best with sustainable waste
							disposal, organic products and practices that nurture the planet.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
