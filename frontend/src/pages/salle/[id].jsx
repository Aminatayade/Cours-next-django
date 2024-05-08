import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';

const salles = [
    { id: 1, nom: "Salle Executive - Deluxe", capacite: "50 personnes", equipements: ["Projecteur", "Wi-Fi", "Climatisation"], prix: "200€ par heure", image: "/images/salles/salle1.jpg", lieu: "Dakar - Centre" },
    { id: 2, nom: "Salle de Conférence - Standard", capacite: "100 personnes", equipements: ["Projecteur", "Micro", "Wi-Fi"], prix: "300€ par heure", image: "/images/salles/salle2.jpg", lieu: "Dakar - Plateau" },
    { id: 3, nom: "Salle VIP", capacite: "30 personnes", equipements: ["Wi-Fi", "Projecteur HD", "Service de restauration"], prix: "250€ par heure", image: "/images/salles/salle3.jpg", lieu: "Dakar - Mermoz" },
    { id: 4, nom: "Salle de Réunion", capacite: "20 personnes", equipements: ["Tableau blanc", "Wi-Fi"], prix: "100€ par heure", image: "/images/salles/salle4.jpg", lieu: "Dakar - Liberté" },
    { id: 5, nom: "Salle de Workshop", capacite: "60 personnes", equipements: ["Wi-Fi", "Air conditionné"], prix: "180€ par heure", image: "/images/salles/salle5.jpg", lieu: "Dakar - Ngor" },
    { id: 6, nom: "Salle de Séminaire Interactive", capacite: "80 personnes", equipements: ["Projecteur interactif", "Wi-Fi"], prix: "220€ par heure", image: "/images/salles/salle6.jpg", lieu: "Dakar - Yoff" },
    { id: 7, nom: "Grand Hall", capacite: "200 personnes", equipements: ["Sonorisation", "Lumière", "Wi-Fi"], prix: "500€ par heure", image: "/images/salles/salle7.jpg", lieu: "Dakar - Point E" },
    { id: 8, nom: "Salle de Formation", capacite: "40 personnes", equipements: ["Ordinateurs", "Wi-Fi"], prix: "150€ par heure", image: "/images/salles/salle8.jpg", lieu: "Dakar - Sicap" },
    { id: 9, nom: "Salle de Banquet", capacite: "120 personnes", equipements: ["Cuisine équipée", "Wi-Fi"], prix: "350€ par heure", image: "/images/salles/salle9.jpg", lieu: "Dakar - Fann" },
    { id: 10, nom: "Salle de Séminaire", capacite: "80 personnes", equipements: ["Wi-Fi", "Climatisation"], prix: "150€ par heure", image: "/images/salles/salle10.jpg", lieu: "Dakar - Almadies" }
];



function SallesPage() {
    const router = useRouter();

    return (
        <div className="bg-white min-h-screen">
            <div className="container mx-auto px-4 py-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Détails des Salles à Dakar</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {salles.map(salle => (
                        <div key={salle.id} className="bg-gray-100 p-4 rounded-lg shadow-lg">
                            <div className="relative h-48 w-full rounded-md overflow-hidden">
                                <Image
                                    src={salle.image}
                                    alt={`Image de ${salle.nom}`}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <h2 className="text-xl text-blue-800 mt-2">{salle.nom}</h2>
                            <p><strong>Capacité :</strong> {salle.capacite}</p>
                            <p><strong>Équipements :</strong> {salle.equipements.join(", ")}</p>
                            <p><strong>Prix :</strong> {salle.prix}</p>
                            <p><strong>Lieu :</strong> {salle.lieu}</p>
                            <Link href={`/salle/${salle.id}`} passHref>
                                <button className="mt-3 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Voir plus</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SallesPage;