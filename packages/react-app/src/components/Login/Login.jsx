import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { utilisateurApi } from "../API/APIUtilisateur";
import { useForm } from "react-hook-form";
import { useAuth } from "../../AuthContext"; // Importez le hook useAuth

export function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login } = useAuth(); // Utilisez le hook useAuth pour obtenir l'action login
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState(""); // État pour le message de succès

    const onSubmit = async (data) => {
        try {
            const resp = await utilisateurApi().connexionUtilisateur(data.username, data.password);
            login(resp.data.accessToken); // Appelez login avec le token
            setSuccessMessage("Connexion réussie !"); // Définir le message de succès
            setTimeout(() => {
                setSuccessMessage(""); // Effacer le message après quelques secondes
                navigate('/'); // Rediriger vers la page d'accueil
            }, 2000); // Durée du message (en millisecondes)
        } catch (err) {
            console.log(err);
            // Gérer les erreurs de connexion ici
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-black pt-16" style={{ paddingBottom: 100 }}>
            <div className="w-full max-w-6xl bg-white dark:bg-gray-800 rounded-lg shadow-md flex relative">
                {/* Message Block */}
                <div className="hidden md:flex w-1/2 bg-primary dark:bg-primary-dark items-center justify-center rounded-l-lg h-full" style={{ width: 650, height: 650 }}>
                    <div className="p-8 text-white text-center">
                        <strong><h2 className="text-5xl font-semibold mb-5">Bienvenue</h2></strong>
                        <p className="text-lg">Veuillez vous identifier pour accéder à votre Espace client.</p>
                        <p className="mt-4">Vous n'avez pas de compte ? <strong><Link to="/register" className="text-sky-400 ">Créez-en un ici</Link>.</strong> </p>
                    </div>
                </div>

                {/* Form Block */}
                <div className="w-full md:w-1/2 p-12 space-y-6 flex flex-col justify-center">
                    <div className="hero-section">
                        {successMessage && (<p className="text-green-500 text-center font-bold text-2xl my-4">{successMessage} </p> )}
                    </div>
                    <div className="mx-auto w-full max-w-md">
                        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white">Connexion</h2>
                        {/*{error && <p className="text-red-500 text-center">{error}</p>}*/}
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Nom d'utilisateur
                                </label>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    autoComplete="username"
                                    required
                                    {...register('username', { required: 'Le nom d\'utilisateur est requis' })}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                />
                                {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Mot de passe
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    id="password"
                                    {...register('password', { required: 'Le mot de passe est requis' })}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                />
                                {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                            </div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                            >
                                Se connecter
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
