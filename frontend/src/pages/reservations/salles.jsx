import React, { useState } from 'react';
import { salleData } from '@/data/salleData'; // Suppose que les données des salles sont stockées ici

export default function Salles() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredSalles = salleData.filter(
        salle => salle.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                 salle.categorie.toLowerCase().includes(searchTerm.toLowerCase()) ||
                 salle.lieu.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Recherchez par nom, catégorie ou lieu..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <div className="salle-container">
                {filteredSalles.map(salle => (
                    <div key={salle.id} className="salle-card">
                        <img src={salle.image} alt={`Salle ${salle.nom}`} />
                        <h3>{salle.nom}</h3>
                        <p>Prix: {salle.prix}€</p>
                        <p>Catégorie: {salle.categorie}</p>
                        <p>Capacité: {salle.capacite} personnes</p>
                        <p>Lieu: {salle.lieu}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
