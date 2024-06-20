import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useAuth } from '../../AuthContext'; // Assurez-vous que le chemin d'importation est correct
import {jwtDecode} from 'jwt-decode';

const AddCourseModal = ({ showModal, onClose, onCourseAdded }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { isAuthenticated } = useAuth(); // Utilisation de useAuth pour obtenir l'état d'authentification
    const [submitting, setSubmitting] = useState(false);
    const [errorText, setErrorText] = useState('');

    const onSubmit = async (data) => {
        const token = localStorage.getItem('token');
        if (!token) {
            setErrorText('Vous devez être connecté pour ajouter un cours.');
            return;
        }

        try {
            const decodedToken = jwtDecode(token);
            const etudiantId = decodedToken.id; // Assurez-vous que le claim ID est correctement défini dans le token

            const tutorialData = {
                titre: data.titre,
                description: data.description,
                coutMensuel: data.cout_mensuel, // Assurez-vous que les noms des champs correspondent à votre formulaire
                dateDebut: data.date_debut,
                etudiants: etudiantId, // Utiliser l'ID extrait du token JWT
            };

            setSubmitting(true);
            await axios.post('http://localhost:5051/tuto/', tutorialData);
            onCourseAdded(); // Appel de la fonction après un ajout réussi
            onClose();
        } catch (error) {
            console.error('Error adding course:', error);
            setErrorText('Une erreur s\'est produite lors de l\'ajout du cours.');
        } finally {
            setSubmitting(false);
        }
    };

    if (!showModal) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-70 flex justify-center items-center">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-3xl">
                <button onClick={onClose} className="text-right text-red-500 text-3xl">&times;</button>
                <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-6">Ajouter un Cours</h2>
                {errorText && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md mb-4">
                        {errorText}
                    </div>
                )}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label htmlFor="titre" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Titre du Cours
                        </label>
                        <input
                            id="titre"
                            type="text"
                            {...register('titre', { required: true })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        />
                        {errors.titre && <span className="text-red-500">Ce champ est requis</span>}
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Description
                        </label>
                        <textarea
                            id="description"
                            {...register('description', { required: true })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        />
                        {errors.description && <span className="text-red-500">Ce champ est requis</span>}
                    </div>
                    <div>
                        <label htmlFor="cout_mensuel" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Coût Mensuel (€)
                        </label>
                        <input
                            id="cout_mensuel"
                            type="number"
                            step="0.01"
                            {...register('cout_mensuel', { required: true })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        />
                        {errors.cout_mensuel && <span className="text-red-500">Ce champ est requis</span>}
                    </div>
                    <div>
                        <label htmlFor="date_debut" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Date de Début
                        </label>
                        <input
                            id="date_debut"
                            type="date"
                            {...register('date_debut', { required: true })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        />
                        {errors.date_debut && <span className="text-red-500">Ce champ est requis</span>}
                    </div>
                    <button
                        type="submit"
                        disabled={submitting || !isAuthenticated}
                        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary ${submitting || !isAuthenticated ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'}`}
                    >
                        {submitting ? 'Ajout en cours...' : 'Ajouter le Cours'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCourseModal;
