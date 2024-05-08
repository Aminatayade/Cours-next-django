import React from 'react';
import Link from 'next/link';


// Simulons quelques données pour les réservations de chambres et de nourriture
const dummyMeetingRoomsData = [
    { id: 1, roomName: "Salle Executive", category: "Deluxe", reservedBy: "John Doe", date: "2024-05-07", equipment: ["Projecteur", "Tableau blanc"] },
    { id: 2, roomName: "Salle Conférence", category: "Standard", reservedBy: "Alice Johnson", date: "2024-05-08", equipment: ["Haut-parleur", "Micro"] }
];

const dummyCateringData = [
    { id: 1, foodName: "Buffet", reservedBy: "Bob Smith", date: "2024-05-07", details: "Buffet chaud et froid" },
    { id: 2, foodName: "Café et Snacks", reservedBy: "Clara Barton", date: "2024-05-08", details: "Café, thé, biscuits" }
];


function ReservationIndexPage() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto px-4 py-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-8">Réservations de Salles et Restauration</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Salles de Réunion</h2>
                        <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
                            <Link href="/salle/1" passHref>
                                <div className="border p-4 rounded-lg shadow-sm cursor-pointer">
                                    <h3 className="font-semibold text-lg text-blue-700">Salle Executive - Deluxe</h3>
                                    <p>Réservé par: <strong>John Doe</strong></p>
                                    <p>Date: <strong>2024-05-07</strong></p>
                                </div>
                            </Link>
                            <Link href="/salle/2" passHref>
                                <div className="border p-4 rounded-lg shadow-sm cursor-pointer">
                                    <h3 className="font-semibold text-lg text-blue-700">Salle Conférence - Standard</h3>
                                    <p>Réservé par: <strong>Alice Johnson</strong></p>
                                    <p>Date: <strong>2024-05-08</strong></p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Restauration</h2>
                        <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
                            <div className="border p-4 rounded-lg shadow-sm">
                                <h3 className="font-semibold text-lg text-green-600">Buffet</h3>
                                <p>Réservé par: <strong>Bob Smith</strong></p>
                                <p>Date: <strong>2024-05-07</strong></p>
                            </div>
                            <div className="border p-4 rounded-lg shadow-sm">
                                <h3 className="font-semibold text-lg text-green-600">Café et Snacks</h3>
                                <p>Réservé par: <strong>Clara Barton</strong></p>
                                <p>Date: <strong>2024-05-08</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReservationIndexPage;
