import React from 'react';
import Link from 'next/link';


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
        <div className="min-h-screen bg-gray-100">
            <div className="container px-4 py-6 mx-auto">
                <h1 className="mb-8 text-2xl font-bold text-gray-900">Réservations de Salles et Restauration</h1>
                
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <h2 className="mb-4 text-lg font-semibold text-gray-800">Salles de Réunion</h2>
                        <div className="p-6 space-y-4 bg-white rounded-lg shadow-lg">
                            <Link href="/salle/1" passHref>
                                <div className="p-4 border rounded-lg shadow-sm cursor-pointer">
                                    <h3 className="text-lg font-semibold text-blue-700">Salle Executive - Deluxe</h3>
                                    <p>Réservé par: <strong>John Doe</strong></p>
                                    <p>Date: <strong>2024-05-07</strong></p>
                                </div>
                            </Link>
                            <Link href="/salle/2" passHref>
                                <div className="p-4 border rounded-lg shadow-sm cursor-pointer">
                                    <h3 className="text-lg font-semibold text-blue-700">Salle Conférence - Standard</h3>
                                    <p>Réservé par: <strong>Alice Johnson</strong></p>
                                    <p>Date: <strong>2024-05-08</strong></p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h2 className="mb-4 text-lg font-semibold text-gray-800">Restauration</h2>
                        <div className="p-6 space-y-4 bg-white rounded-lg shadow-lg">
                            <div className="p-4 border rounded-lg shadow-sm">
                                <h3 className="text-lg font-semibold text-green-600">Buffet</h3>
                                <p>Réservé par: <strong>Bob Smith</strong></p>
                                <p>Date: <strong>2024-05-07</strong></p>
                            </div>
                            <div className="p-4 border rounded-lg shadow-sm">
                                <h3 className="text-lg font-semibold text-green-600">Café et Snacks</h3>
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
