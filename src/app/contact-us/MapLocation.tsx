/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export function MapLocation() {
    const position: LatLngExpression = [53.36730509358647, -2.2649853679402283];

    return (
        <div className="w-full h-[400px] rounded-lg overflow-hidden relative z-10">
            <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={false}
                style={{ width: "100%", height: "100%" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        G13A, Manchester, M22 5TG <br />
                        Manchester Business Park
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}
