import { setSessionToken } from '@/lib/cookie';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {

    const router = useRouter();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:8000/users/login/', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const user = await response.json();

            if (!response.ok) {
                throw new Error(user.message || 'Login failed');
            } else {
                console.log(user);
                toast.success('Login Successful!');
                setSessionToken(JSON.stringify(user.user));
                setTimeout(() => {
                    router.push('/salles');
                }, 2000);
            }

        } catch (error) {
            setError('Login failed. Please check your credentials.');
            toast.error(error.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-black bg-gray-100">
            <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <div className="p-8 bg-white rounded shadow-md">
                <h2 className="mb-6 text-2xl font-semibold text-center">Connexion</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
                    </div>
                    <div>
                        <button type="submit" className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Se connecter
                        </button>
                    </div>
                </form>
                <div className="flex items-center justify-center mt-4">
                    <p className="text-sm text-gray-600">Vous n'avez pas de compte ?</p>
                    <Link href="/register" legacyBehavior>
                        <a className="ml-2 text-sm text-blue-500 hover:text-blue-700">S'inscrire</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
