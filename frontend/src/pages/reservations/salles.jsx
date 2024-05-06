import React, { useEffect, useState } from 'react';

const fetchSalles = async () => {
    try {
        const response = await fetch('http://127.0.0.1:8000/reservations/salles/');
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch salles:", error);
        return [];
    }
};

export default function Salles() {
    const [salles, setSalles] = useState([]);

    useEffect(() => {
        fetchSalles().then(setSalles);
    }, []);

    return (
        <div className="p-5 flex items-center justify-center flex-col">
            <h1 className='pt-5 pb-20'>Toutes les salles</h1>
            {salles.map((salle) => (
                <div key={salle.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
                    <h2 className="font-semibold text-xl mb-2">{salle.nom}</h2>
                    <img src={`http://localhost:8000/media/photos_salles/WhatsApp_Image_2024-05-05_at_19.04.38.jpeg`} alt={salle.nom} className="w-full h-40 object-cover rounded-lg mb-4" />
                    <p className="text-gray-700">{salle.description}</p>
                    <p className="text-gray-500">Capacité : {salle.capacite}</p>
                    <p className="text-gray-500">Catégorie : {salle.categorie}</p>
                    <p className="text-green-500">{salle.disponibilite ? 'Disponible' : 'Indisponible'}</p>
                </div>
            ))}
        </div>
    );
}
