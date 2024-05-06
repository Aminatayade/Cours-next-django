import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen text-black bg-gray-100">
            <Navbar isAuthenticated={true} />
            <div className="container p-[150px] mx-auto flex items-center justify-center flex-col gap-5">
                <h1 className="text-3xl font-bold">Bienvenue sur notre plateforme de gestion de réservation de salle</h1>
                <p>Ce site vous permet de réserver des salles pour vos événements facilement et rapidement.</p>
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
        </div>
    );
}
