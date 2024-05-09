import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/common/Navbar';

function SallesPage() {
     const [salles, setSalles] = useState([]);

     useEffect(() => {
          fetch('http://localhost:8000/gestions/salles/')
               .then(response => response.json())
               .then(data => {
                    console.log(data[0].disponibilite);
                    setSalles(data)
               } )
               .catch(error => console.error(error));
     }, []);

     return (
          <div className="min-h-screen bg-white">
               <Navbar isAuthenticated={true} />
               <div className="container px-4 py-6 mx-auto">
                    <h1 className="mb-6 text-3xl font-bold text-center text-gray-500 ">Nos Salles</h1>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                         {salles?.map(salle => (
                              <div key={salle.id} className="p-4 m-5 bg-gray-100 rounded-lg shadow-lg">
                                   <div className="relative w-full h-48 overflow-hidden rounded-md">
                                        <Image
                                             src={salle.photos}
                                             alt={`Image de ${salle.nom}`}
                                             layout="fill"
                                             objectFit="cover"
                                        />
                                   </div>
                                   <h2 className="mt-2 text-xl text-blue-800">{salle.nom}</h2>
                                   <p><strong>Capacité :</strong> {salle.capacite}</p>
                                   {/* <p><strong>Équipements :</strong> {salle.equipements.join(", ")}</p> */}
                                   <p><strong>Prix :</strong> {salle.prix} $ </p>
                                   <p><strong>Lieu :</strong> {salle.lieu}</p>
                                   {
                                        salle.disponibilite ? (
                                             <Link href={`/salles/${salle.id}`} passHref>
                                                  <button className="p-2 mt-3 text-white bg-blue-500 rounded hover:bg-blue-600">Réserver</button>
                                             </Link>
                                        ) : (
                                             <p className="text-red-500">Non disponible</p>
                                        )
                                   }
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     );
}

export default SallesPage;