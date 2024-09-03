import querystring from "node:querystring";
import { NextResponse } from "next/server";

const {
	SPOTIFY_CLIENT_ID: client_id,
	SPOTIFY_CLIENT_SECRET: client_secret,
	SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT =
	"https://api.spotify.com/v1/me/player/currently-playing";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

const getAccessToken = async () => {
	const response = await fetch(TOKEN_ENDPOINT, {
		method: "POST",
		headers: {
			Authorization: `Basic ${basic}`,
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: querystring.stringify({
			grant_type: "refresh_token",
			refresh_token,
		}),
	});

	return response.json();
};

const getNowPlaying = async () => {
	const { access_token } = await getAccessToken();

	return fetch(NOW_PLAYING_ENDPOINT, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});
};

export async function GET() {
	const response = await getNowPlaying();

	if (response.status === 204 || response.status > 400) {
		return NextResponse.json({ isPlaying: false });
	}

	const song = await response.json();
	const isPlaying = song.is_playing;
	const title = song.item.name;

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const artist = song.item.artists.map((artist: any) => artist.name).join(", ");
	const album = song.item.album.name;
	const albumImageUrl = song.item.album.images[0].url;
	const songUrl = song.item.external_urls.spotify;

	return NextResponse.json({
		album,
		albumImageUrl,
		artist,
		isPlaying,
		songUrl,
		title,
	});
}