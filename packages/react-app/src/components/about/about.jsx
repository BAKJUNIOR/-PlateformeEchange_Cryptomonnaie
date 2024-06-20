import React from "react";

import Brand1 from "../../assets/brands/1.svg";
import Brand2 from "../../assets/brands/2.svg";
import Brand3 from "../../assets/brands/3.svg";
import Brand4 from "../../assets/brands/4.svg";
import Brand5 from "../../assets/brands/5.svg";
import Equipes from "../Equipes/equipes";



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
                    {Equipes}
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
            <section >
                <h1 className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary ">nos partenaires</h1>

                <p className="text-gray-600 dark:text-gray-400 mb-4 text-2xl">
                    Nous collaborons avec un réseau de partenaires de premier plan pour offrir les meilleures solutions et opportunités à nos clients.
                </p>
                <div className="container mb-12 mt-12 sm:mt-0">
                    <div >
                        <div className="py-6 md:px-32 flex flex-wrap items-center justify-evenly gap-3">
                            <img src={Brand1} alt="" />
                            <img src={Brand2} alt="" />
                            <img src={Brand3} alt="" />
                            <img src={Brand4} alt="" />
                            <img src={Brand5} alt="" />
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default About;
