import Navbar from "@/components/common/Navbar";
import Link from "next/link";
import Image from 'next/image';

export default function Home() {
    return (
        <div className="text-black bg-gray-100 ">
          <Navbar isAuthenticated={false} />
            <div className="container flex items-center justify-between w-full px-10 py-6">
                <div className="flex-1 max-w-md">
                    <h1 className="mb-6 text-3xl font-bold">Bienvenue sur notre plateforme de gestion de réservation de salle</h1>
                    <p className="mb-6">Nos salles de réunion à Dakar sont idéales pour faire un brainstorming entre collègues, impressionner des clients ou mener des sessions de formation productives. Elles sont réservables à l'heure ou à la journée, et notre équipe d'assistance se tient à votre entière disposition en cas de besoin.</p>
                    <div>
                        <Link href="/register">
                            <button className="px-4 py-2 font-bold text-white transition duration-300 ease-in-out bg-blue-500 rounded hover:bg-blue-700">
                                S'inscrire
                            </button>
                        </Link>
                        <Link href="/login">
                            <button className="px-4 py-2 ml-2 font-bold text-white transition duration-300 ease-in-out bg-gray-500 rounded hover:bg-gray-700">
                                Se connecter
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Section Image à droite */}
                <div className="flex items-center justify-center flex-1 max-w-md">
                    <Image
                        src="/images/salle1.webp"
                        alt="Salle de réunion"
                        width={700} // Définissez la largeur de l'image
                        height={800} // Définissez la hauteur de l'image
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
}
