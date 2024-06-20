import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import AddCourseModal from './AddCourseForm';
import { utilisateurApi } from '../API/APIUtilisateur';

const TutorielPage = () => {
    const { isAuthenticated } = useAuth();
    const [tutoriels, setTutoriels] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    useEffect(() => {
        utilisateurApi().getAllTutoriats()
            .then(response => {
                setTutoriels(response.data);
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des tutoriels", error);
            });
    }, []);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleCourseAdded = () => {
        setShowSuccessMessage(true);
        setTimeout(() => {
            setShowSuccessMessage(false);
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-black pt-16 pb-16">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Tutoriels</h1>
                    {isAuthenticated ? (
                        <button
                            className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded"
                            onClick={openModal}
                        >
                            Ajouter un cours
                        </button>
                    ) : (
                        <Link to="/login" className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded">
                            Se connecter
                        </Link>
                    )}
                </div>
                {showSuccessMessage && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                        <p>Le cours a été ajouté avec succès!</p>
                    </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tutoriels.length > 0 ? (
                        tutoriels.map(tutoriel => (
                            <div key={tutoriel.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                                <div className="flex items-center mb-4">
                                    <div
                                        className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                                        {tutoriel.etudiant.photo ?
                                            <img src={tutoriel.etudiant.photo} alt="Profile"
                                                 className="w-full h-full object-cover"/> :
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                                 stroke="currentColor" className="w-6 h-6 text-gray-600">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M12 11.25a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zm.75 6h-1.5A6.75 6.75 0 004.5 18h15a6.75 6.75 0 00-6.75-6.75z"/>
                                            </svg>
                                        }
                                    </div>
                                    <div className="ml-4">
                                        <h2 className="text-xl font-semibold">{tutoriel.etudiant.prenom} {tutoriel.etudiant.nom}</h2>
                                        <p className="text-gray-500">{new Date(tutoriel.datePublication).toLocaleString()}</p>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-semibold mb-2 text-blue-700">{tutoriel.titre}</h3>
                                <p className="mb-4 text-gray-700 dark:text-gray-300">{tutoriel.description}</p>
                                {tutoriel.etudiant.telephone && (
                                    <p className="mb-2 text-gray-900"><strong>Téléphone:</strong> {tutoriel.etudiant.telephone}</p>
                                )}
                                {tutoriel.coutMensuel && (
                                    <p className="mb-2 text-gray-900"><strong>Coût mensuel:</strong> {tutoriel.coutMensuel} €</p>
                                )}
                                <p className="mb-2 text-gray-900"><strong>Email:</strong> {tutoriel.etudiant.email}</p>
                                <p className="mb-2 text-gray-900"><strong>Université:</strong> {tutoriel.etudiant.universite}</p>
                                {tutoriel.etudiant.societe && (
                                    <p className="mb-2 text-gray-900"><strong>Société:</strong> {tutoriel.etudiant.societe}</p>
                                )}
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-800 dark:text-white">Aucun tutoriel disponible pour le moment.</p>
                    )}
                </div>
            </div>
            {isAuthenticated && <AddCourseModal showModal={showModal} onClose={closeModal} onCourseAdded={handleCourseAdded} />}
        </div>
    );
};

export default TutorielPage;
