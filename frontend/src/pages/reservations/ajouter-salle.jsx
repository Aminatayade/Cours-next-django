import { useState } from 'react';

export default function AjouterSalle() {
    const [nom, setNom] = useState('');
    const [capacite, setCapacite] = useState('');
    const [description, setDescription] = useState('');
    const [categorie, setCategorie] = useState('');
    const [disponibilite, setDisponibilite] = useState(true);
    const [image, setImage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('nom', nom);
        formData.append('capacite', capacite);
        formData.append('description', description);
        formData.append('categorie', categorie);
        formData.append('disponibilite', disponibilite);
        formData.append('photos', image);

        try {
            const response = await fetch('http://127.0.0.1:8000/reservations/salles/', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) throw new Error('Something went wrong');
            alert('Salle ajoutée avec succès');
        } catch (error) {
            alert('Erreur lors de l’ajout de la salle: ' + error.message);
        }
    };

    return (
        <div className="bg-white">
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 shadow-md rounded-lg bg-gray-500">
                <h2 className="text-2xl font-bold mb-6 text-center">Ajouter une nouvelle salle</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Nom de la salle:</label>
                    <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Capacité:</label>
                    <input type="number" value={capacite} onChange={(e) => setCapacite(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Catégorie:</label>
                    <input type="text" value={categorie} onChange={(e) => setCategorie(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Disponibilité:</label>
                    <input type="checkbox" checked={disponibilite} onChange={(e) => setDisponibilite(e.target.checked)} className="leading-tight" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Photo de la salle:</label>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Ajouter la salle</button>
            </form>
        </div>
    );
}
