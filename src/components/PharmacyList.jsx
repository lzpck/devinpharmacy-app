import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function toDegrees(radians) {
    return radians * (180 / Math.PI);
}

const PharmacyList = () => {
    const farmacias = JSON.parse(localStorage.getItem("pharmacyData")) || [];

    let x = 0.0;
    let y = 0.0;
    let z = 0.0;

    farmacias.forEach((farmacia) => {
        const latitude = toRadians(farmacia.latitude);
        const longitude = toRadians(farmacia.longitude);

        x += Math.cos(latitude) * Math.cos(longitude);
        y += Math.cos(latitude) * Math.sin(longitude);
        z += Math.sin(latitude);
    });

    const total = farmacias.length;

    x = x / total;
    y = y / total;
    z = z / total;

    const centralLongitude = toDegrees(Math.atan2(y, x));
    const centralSquareRoot = Math.sqrt(x * x + y * y);
    const centralLatitude = toDegrees(Math.atan2(z, centralSquareRoot));

    const positionInicial = [centralLatitude, centralLongitude];

    return (
        <MapContainer center={positionInicial} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {farmacias.map((farmacia, index) => (
                <Marker key={index} position={[farmacia.latitude, farmacia.longitude]}>
                    <Popup>
                        <h2>{farmacia.nome}</h2>
                        {farmacia.descricao && <p>{farmacia.descricao}</p>}
                        {farmacia.cnpj && <p>CNPJ: {farmacia.cnpj}</p>}
                        // Inclua outros campos relevantes aqui
                        {farmacia.telefone && <a href={`https://wa.me/55${farmacia.telefone.replace(/\D/g, '')}`}>Enviar Mensagem</a>}
                        // Adicione um botão aqui para exibir todas as informações da farmácia em um modal ou em uma nova página
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default PharmacyList;
