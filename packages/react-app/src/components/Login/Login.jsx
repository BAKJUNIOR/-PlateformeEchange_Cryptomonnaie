import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

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
                    <div className="mx-auto w-full max-w-md">
                        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white">Connexion</h2>
                        {error && <p className="text-red-500 text-center">{error}</p>}
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Adresse e-mail
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Mot de passe
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                />
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
