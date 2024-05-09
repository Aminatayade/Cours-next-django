import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

const salles = [
     { id: 1, nom: "Salle Executive - Deluxe", capacite: "50 personnes", equipements: ["Projecteur", "Wi-Fi", "Climatisation"], prix: "200€ par heure", image: "/images/salle1.webp", lieu: "Dakar - Centre" },
     { id: 2, nom: "Salle de Conférence - Standard", capacite: "100 personnes", equipements: ["Projecteur", "Micro", "Wi-Fi"], prix: "300€ par heure", image: "/images/salle2.webp", lieu: "Dakar - Plateau" },
     { id: 3, nom: "Salle VIP", capacite: "30 personnes", equipements: ["Wi-Fi", "Projecteur HD", "Service de restauration"], prix: "250€ par heure", image: "/images/salle3.webp", lieu: "Dakar - Mermoz" },
     { id: 4, nom: "Salle de Réunion", capacite: "20 personnes", equipements: ["Tableau blanc", "Wi-Fi"], prix: "100€ par heure", image: "/images/salle4.webp", lieu: "Dakar - Liberté" },
     { id: 5, nom: "Salle de Workshop", capacite: "60 personnes", equipements: ["Wi-Fi", "Air conditionné"], prix: "180€ par heure", image: "/images/salle5.webp", lieu: "Dakar - Ngor" },
     { id: 6, nom: "Salle de Séminaire Interactive", capacite: "80 personnes", equipements: ["Projecteur interactif", "Wi-Fi"], prix: "220€ par heure", image: "/images/salle6.webp", lieu: "Dakar - Yoff" },
     { id: 7, nom: "Grand Hall", capacite: "200 personnes", equipements: ["Sonorisation", "Lumière", "Wi-Fi"], prix: "500€ par heure", image: "/images/salle7.webp", lieu: "Dakar - Point E" },
     { id: 8, nom: "Salle de Formation", capacite: "40 personnes", equipements: ["Ordinateurs", "Wi-Fi"], prix: "150€ par heure", image: "/images/salle8.webp", lieu: "Dakar - Sicap" },
     { id: 9, nom: "Salle de Banquet", capacite: "120 personnes", equipements: ["Cuisine équipée", "Wi-Fi"], prix: "350€ par heure", image: "/images/salle9.webp", lieu: "Dakar - Fann" },
     { id: 10, nom: "Salle de Séminaire", capacite: "80 personnes", equipements: ["Wi-Fi", "Climatisation"], prix: "150€ par heure", image: "/images/salle10.webp", lieu: "Dakar - Almadies" }
];

function SallesPage() {
     return (
          <div className="min-h-screen bg-white">
               <Navbar />
               <div className="container px-4 py-6 mx-auto">
                    <h1 className="mb-6 text-3xl font-bold text-gray-900">Détails des Salles à Dakar</h1>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                         {salles.map(salle => (
                              <div key={salle.id} className="p-4 m-5 bg-gray-100 rounded-lg shadow-lg">
                                   <div className="relative w-full h-48 overflow-hidden rounded-md">
                                        <Image
                                             src={salle.image}
                                             alt={`Image de ${salle.nom}`}
                                             layout="fill"
                                             objectFit="cover"
                                        />
                                   </div>
                                   <h2 className="mt-2 text-xl text-blue-800">{salle.nom}</h2>
                                   <p><strong>Capacité :</strong> {salle.capacite}</p>
                                   <p><strong>Équipements :</strong> {salle.equipements.join(", ")}</p>
                                   <p><strong>Prix :</strong> {salle.prix}</p>
                                   <p><strong>Lieu :</strong> {salle.lieu}</p>
                                   <Link href={`/salle/${salle.id}`} passHref>
                                        <button className="p-2 mt-3 text-white bg-blue-500 rounded hover:bg-blue-600">Voir plus</button>
                                   </Link>
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     );
}

export default SallesPage;