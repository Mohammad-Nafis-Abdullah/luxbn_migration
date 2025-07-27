"use client";

import { LatLngExpression, Marker, Popup, TileLayer } from "leaflet";
import { MapContainer } from "react-leaflet";

export function MapLocation() {
    const position: LatLngExpression = [51.505, -0.09];

    return (
        <div className="w-full h-[400px] mt-10 rounded-xl overflow-hidden shadow-md">
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}
