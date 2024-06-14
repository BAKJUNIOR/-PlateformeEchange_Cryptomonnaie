import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("");
    const [inscriptionSuccess, setInscriptionSuccess] = useState(false);
    const navigate = useNavigate(); // Utilisation de useNavigate pour la navigation
    const [photoFileName, setPhotoFileName] = useState('');

    const onSubmit = async (data) => {
        const { username, prenom, nom, telephone, email, universite, societe, password, confirmPassword, photo } = data;

        if (password !== confirmPassword) {
            setError("Les mots de passe ne correspondent pas");
            return;
        }

        try {
            const formData = new FormData();
            formData.append('username', username);
            formData.append('prenom', prenom);
            formData.append('nom', nom);
            formData.append('telephone', telephone);
            formData.append('email', email);
            formData.append('universite', universite);
            formData.append('societe', societe);
            formData.append('password', password);
            formData.append('photo', photo); // Assurez-vous que 'photo' est bien ajouté comme chaîne de caractères ou en tant que fichier

            const response = await axios.post('http://localhost:5050/inscription/', { ...data, photo: `/photos/${photoFileName}` });
            console.log(response.data);
            setInscriptionSuccess(true); // Activer le message d'inscription réussie
        } catch (error) {
            console.error('Erreur lors de l\'inscription :', error);
            setError("Erreur lors de l'inscription : " + error.message);
        }
    };


    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        const fileName = `photo_${Date.now()}.${file.name.split('.').pop()}`; // Générer un nom de fichier unique
        setPhotoFileName(fileName); // Stocker temporairement le nom de fichier de la photo
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const photoDataUrl = reader.result; // Obtenez l'URL de la photo en tant que base64
            // Stockez la photo dans le dossier public/photos
            const img = new Image();
            img.src = photoDataUrl;
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            img.onload = () => {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                canvas.toBlob((blob) => {
                    const formData = new FormData();
                    formData.append('photo', blob, fileName);
                    fetch(`${fileName}`, {
                        method: 'POST',
                        body: formData
                    })
                        .then(() => console.log('Photo uploaded successfully'))
                        .catch((error) => console.error('Error uploading photo:', error));
                });
            };
        };
    };

    if (inscriptionSuccess) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-black pt-16" style={{ paddingBottom: 250 }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
                >
                    <h2 className="text-2xl font-semibold text-center text-green-600 dark:text-green-400 mb-6">
                        Inscription réussie ! 🎉
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-400">
                        Vous pouvez maintenant vous <Link to="/login" className="text-blue-500 text-lg">connecter ici</Link>.
                    </p>
                </motion.div>
            </div>
        );
    }
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-black pt-16"
             style={{paddingBottom: 250}}>
            <motion.div
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: 50}}
                className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
            >
                <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-6">Inscription</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="username"
                                   className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Nom d'utilisateur
                            </label>
                            <input
                                id="username"
                                type="text"
                                {...register('username', {required: true})}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                            />
                            {errors.username && <span className="text-red-500">Ce champ est requis</span>}
                        </div>
                        <div>
                            <label htmlFor="prenom"
                                   className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Prénom
                            </label>
                            <input
                                id="prenom"
                                type="text"
                                {...register('prenom', {required: true})}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                            />
                            {errors.prenom && <span className="text-red-500">Ce champ est requis</span>}
                        </div>
                        <div>
                            <label htmlFor="nom" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Nom
                            </label>
                            <input
                                id="nom"
                                type="text"
                                {...register('nom', {required: true})}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                            />
                            {errors.nom && <span className="text-red-500">Ce champ est requis</span>}
                        </div>
                        <div>
                            <label htmlFor="telephone"
                                   className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Téléphone
                            </label>
                            <input
                                id="telephone"
                                type="text"
                                {...register('telephone', {required: true})}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                            />
                            {errors.telephone && <span className="text-red-500">Ce champ est requis</span>}
                        </div>
                        <div>
                            <label htmlFor="email"
                                   className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Adresse e-mail
                            </label>
                            <input
                                id="email"
                                type="email"
                                {...register('email', {required: true})}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                            />
                            {errors.email && <span className="text-red-500">Ce champ est requis</span>}
                        </div>
                        <div>
                            <label htmlFor="universite"
                                   className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Université
                            </label>
                            <input
                                id="universite"
                                type="text"
                                {...register('universite', {required: true})}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                            />
                            {errors.universite && <span className="text-red-500">Ce champ est requis</span>}
                        </div>
                        <div>
                            <label htmlFor="societe"
                                   className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Société
                            </label>
                            <input
                                id="societe"
                                type="text"
                                {...register('societe', {required: true})}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                            />
                            {errors.societe && <span className="text-red-500">Ce champ est requis</span>}
                        </div>
                        <div>
                            <label htmlFor="photo"
                                   className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Photo
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                {...register('photo')}
                                onChange={handlePhotoChange}
                                id="photo"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                            />
                            {errors.photo && <span className="text-red-500">Ce champ est requis</span>}
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="password"
                                   className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Mot de passe
                            </label>
                            <input
                                id="password"
                                type="password"
                                {...register('password', {required: true})}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                            />
                            {errors.password && <span className="text-red-500">Ce champ est requis</span>}
                        </div>
                        <div>
                            <label htmlFor="confirmPassword"
                                   className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Confirmez le mot de passe
                            </label>
                            <input
                                id="confirmPassword"
                                type="password"
                                {...register('confirmPassword', {required: true})}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                            />
                            {errors.confirmPassword && <span className="text-red-500">Ce champ est requis</span>}
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                        S'inscrire
                    </button>
                </form>
                <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
                    Vous avez déjà un compte ? <Link to="/login" className="text-blue-500">Connectez-vous ici</Link>
                </p>
               <strong> {error && <p className="text-red-500 text-lg text-center">{error}</p>}</strong>
            </motion.div>

        </div>
    );
};
export default Register;
