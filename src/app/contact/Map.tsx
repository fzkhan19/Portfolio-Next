"use client";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const OpenStreetMap = () => {
	const [center] = useState({ lat: -4.043477, lng: 39.668205 });
	const ZOOM_LEVEL = 15;
	const mapRef = useRef<L.Map | null>(null);
	const icon = L.icon({
		iconUrl:
			"https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png",
		iconSize: [25, 35],
		iconAnchor: [12, 41],
		popupAnchor: [1, -34],
		shadowUrl:
			"https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-shadow.png",
		shadowSize: [41, 41],
	});

	return (
		<>
			<div className="h-full w-full px-0 md:px-48">
				<MapContainer
					center={center}
					zoom={ZOOM_LEVEL}
					ref={mapRef}
					dragging={false}
					scrollWheelZoom={false}
					className="h-full w-full rounded-3xl"
				>
					<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
					<Marker position={center} icon={icon}>
						<Popup>
							<span>742 Evergreen Terrace, Springfield</span>
						</Popup>
					</Marker>
				</MapContainer>
			</div>
		</>
	);
};

export default OpenStreetMap;
