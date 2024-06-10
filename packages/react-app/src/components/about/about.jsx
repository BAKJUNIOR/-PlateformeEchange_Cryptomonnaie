import React from "react";

const About = () => {
    return (
        <div className="container mx-auto p-4 space-y-8">
            {/* Vision Section */}
            <section>
                <h2 className="text-3xl font-semibold text-violet-950 dark:text-primary mb-4">
                    Vision
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                    Chez YAVE Technologies Group, notre vision est de devenir le leader mondial des solutions technologiques avancées, en transformant les entreprises et les individus par l'innovation et l'excellence.
                </p>
            </section>

            {/* Mission Section */}
            <section>
                <h2 className="text-3xl font-semibold text-violet-950 dark:text-primary mb-4">
                    Mission
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                    Notre mission est de fournir des services technologiques et des formations de haute qualité qui permettent à nos clients de s'adapter et de prospérer dans un monde numérique en constante évolution.
                </p>
            </section>

            {/* Team Section */}
            <section>
                <h2 className="text-3xl font-semibold text-violet-950 dark:text-primary mb-4">
                    L’équipe
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Notre équipe est composée d'experts passionnés dans divers domaines technologiques, dédiés à fournir des solutions innovantes et des formations personnalisées.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 border rounded-lg dark:border-gray-700">
                        <img
                            src="path_to_image"
                            alt="Nom de l'équipe"
                            className="w-24 h-24 mx-auto rounded-full mb-4"
                        />
                        <h3 className="text-xl font-semibold">Nom de l'équipe</h3>
                        <p className="text-gray-600 dark:text-gray-400">Position</p>
                    </div>
                    {/* Ajouter d'autres membres de l'équipe ici */}
                </div>
            </section>

            {/* Feuille de Route Section */}
            <section>
                <h2 className="text-3xl font-semibold text-violet-950 dark:text-primary mb-4">
                    Feuille de Route
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Notre feuille de route décrit les étapes clés et les objectifs que nous nous efforçons d'atteindre pour concrétiser notre vision.
                </p>
                <div className="space-y-4">
                    <div className="p-4 border rounded-lg dark:border-gray-700">
                        <h3 className="text-xl font-semibold">Étape 1</h3>
                        <p className="text-gray-600 dark:text-gray-400">Description de l'étape 1</p>
                    </div>
                    <div className="p-4 border rounded-lg dark:border-gray-700">
                        <h3 className="text-xl font-semibold">Étape 2</h3>
                        <p className="text-gray-600 dark:text-gray-400">Description de l'étape 2</p>
                    </div>
                    {/* Ajouter d'autres étapes ici */}
                </div>
            </section>

            {/* Partenaires Section */}
            <section>
                <h2 className="text-3xl font-semibold text-violet-950 dark:text-primary mb-4">
                    Partenaires
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Nous collaborons avec un réseau de partenaires de premier plan pour offrir les meilleures solutions et opportunités à nos clients.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 border rounded-lg dark:border-gray-700">
                        <img
                            src="path_to_partner_logo"
                            alt="Nom du partenaire"
                            className="w-24 h-24 mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold">Nom du partenaire</h3>
                    </div>
                    {/* Ajouter d'autres partenaires ici */}
                </div>
            </section>
        </div>
    );
};

export default About;
