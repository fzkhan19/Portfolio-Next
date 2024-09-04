"use client";
import { Redis } from "@upstash/redis";
import { useEffect, useState } from "react";

const redis = new Redis({
	url: process.env.NEXT_PUBLIC_UPSTASH_REDIS_REST_URL,
	token: process.env.NEXT_PUBLIC_UPSTASH_REDIS_REST_TOKEN,
});

const ViewCounter = ({
	slug,
	noCount = false,
	showCount = true,
}: { slug: string; noCount?: boolean; showCount?: boolean }) => {
	const [views, setViews] = useState(0);

	useEffect(() => {
		const incrementView = async () => {
			try {
				if (!noCount) {
					await redis.incr(`pageviews:${slug}`);
				}
				const viewCount = await redis.get<string>(`pageviews:${slug}`);
				setViews(viewCount ? Number.parseInt(viewCount) : 0);
			} catch (error) {
				console.error(
					"An error occurred while handling the view count:",
					error,
				);
			}
		};
		incrementView();
	}, [slug, noCount]);

	if (showCount) {
		return <div>{views} views</div>;
	}
	return null;
};

export default ViewCounter;
