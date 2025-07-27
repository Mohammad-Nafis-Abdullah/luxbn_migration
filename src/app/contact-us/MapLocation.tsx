"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression, Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// Fix for missing default marker icons
const defaultIcon = new Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

export function MapLocation() {
    const position: LatLngExpression = [53.379833, -2.264053];

    return (
        <div className="w-full h-[400px] rounded overflow-hidden relative z-0">
            <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={defaultIcon}>
                    <Popup>
                        <strong>G13A, Manchester</strong> <br />{" "}
                        <strong>
                            M22 5TG Manchester Business Park, London
                        </strong>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}
