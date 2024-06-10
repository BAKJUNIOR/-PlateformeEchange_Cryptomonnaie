import React from "react";
import {FaChalkboardTeacher, FaLaptopCode, FaCoins, FaDatabase, FaChartBar} from "react-icons/fa";
import {GiSecurityGate} from "react-icons/gi";


const servicesData = [
    {
        name: "Intelligence Artificielle (IA)",
        icon: <FaChalkboardTeacher className="text-4xl text-primary" />,
        link: "#",
        description:
            "L'intelligence artificielle (IA) est un domaine en plein essor qui révolutionne de nombreux secteurs d'activité. YTG" +
            " propose des services de consultation en IA pour aider les entreprises à adopter cette technologie et à en tirer parti.",
        aosDelay: "0",
        list: (
            <ul className="list-disc ml-6">
                <li>Étude de faisabilité: YTG peut évaluer les besoins de votre entreprise et déterminer si l'IA est une solution adaptée à vos défis.</li>
                <li>Stratégie d'IA: YTG peut vous aider à élaborer une stratégie d'IA qui s'aligne avec vos objectifs commerciaux.</li>
                <li>Mise en œuvre de solutions d'IA: YTG peut vous aider à mettre en œuvre des solutions d'IA personnalisées, telles que des chatbots, des systèmes de reconnaissance d'image ou des outils d'analyse prédictive.</li>
                <li>Formation et support: YTG peut former vos employés à utiliser les solutions d'IA et vous offrir un support continu.</li>
            </ul>
        ),
    },

    {
        name: " Bases de Données",
        icon: <FaDatabase className="text-4xl text-primary" />,
        link: "#",
        description: "Les bases de données sont essentielles pour stocker et gérer les données de votre entreprise. YTG propose des services de consultation en bases de données.",
        aosDelay: "700",
        list: (
            <ul className="list-disc ml-6">
                <li>Sélection de la base de données: YTG peut vous aider à choisir la bonne base de données pour vos besoins, en tenant compte de facteurs tels que le volume de données, les performances et les exigences de sécurité.</li>
                <li>Conception de la base de données: YTG peut vous aider à concevoir une base de données qui répond à vos besoins spécifiques.</li>
                <li>Mise en œuvre de la base de données: YTG peut vous aider à mettre en place et configurer la base de données choisie.</li>
            </ul>
        ),
    },

    {
        name: "Sécurité et Audit Informatique",
        icon: <GiSecurityGate className="text-4xl text-primary" />,
        link: "#",
        description:
            "La sécurité informatique est essentielle pour protéger les données et les systèmes de votre entreprise contre les cyberattaques. YTG propose des services de consultation en sécurité informatique pour vous aider à évaluer vos risques et à mettre en place des mesures de protection adéquates.",
        aosDelay: "500",
        list: (
            <ul className="list-disc ml-6">
                <li>Évaluation des risques de sécurité: YTG peut évaluer vos risques de sécurité et identifier vos vulnérabilités.</li>
                <li>Développement d'une politique de sécurité: YTG peut vous aider à développer une politique de sécurité qui définit les règles et les procédures de sécurité de votre entreprise.</li>
                <li>Mise en place de contrôles de sécurité: YTG peut vous aider à mettre en place des contrôles de sécurité, tels que des pare-feu, des antivirus et des systèmes de détection d'intrusion.</li>
                <li>Tests de pénétration: YTG peut effectuer des tests de pénétration pour identifier les failles de sécurité de votre système.</li>
            </ul>
        ),
    },


    {
        name: "Blockchain",
        icon: <FaLaptopCode className="text-4xl text-primary" />,
        link: "#",
        description:
            "La blockchain est une technologie de registre distribué qui offre un moyen sécurisé et transparent de stocker et de gérer des données. YTG propose des services de " +
            "consultation en blockchain pour aider les entreprises à explorer les applications potentielles de cette technologie.",
        aosDelay: "300",
        list: (
            <ul className="list-disc ml-6">
                <li>Étude de cas d'utilisation de la blockchain: YTG peut vous aider à identifier les cas d'utilisation potentiels de la blockchain pour votre entreprise.</li>
                <li>Développement de solutions blockchain: YTG peut vous aider à développer des solutions blockchain personnalisées, telles que des plateformes de chaîne d'approvisionnement ou des systèmes de vote électronique.</li>
                <li>Intégration de la blockchain: YTG peut vous aider à intégrer des solutions blockchain dans vos systèmes existants.</li>
                <li>Conseil juridique et réglementaire: YTG peut vous fournir des conseils juridiques et réglementaires sur l'utilisation de la blockchain.</li>
            </ul>
        ),
    },
    {
        name: "Data Science",
        icon: <FaChartBar className="text-4xl text-primary" />,
        link: "#",
        description:
            "La data science est un domaine qui combine des techniques statistiques, des algorithmes et des technologies pour extraire des informations précieuses à partir de grandes quantités de données. YTG propose des services de consultation en data science pour aider les entreprises à tirer parti de leurs données.",
        aosDelay: "200",
        list: (
            <ul className="list-disc ml-6">
                <li>Analyse de données: YTG peut vous aider à analyser vos données pour identifier des tendances, des modèles et des informations précieuses.</li>
                <li>Développement de modèles prédictifs: YTG peut vous aider à développer des modèles prédictifs pour anticiper les comportements futurs et prendre des décisions éclairées.</li>
                <li>Visualisation des données: YTG peut vous aider à créer des visualisations de données claires et percutantes pour faciliter la compréhension et la communication des informations.</li>
                <li>Formation et support: YTG peut former vos employés aux techniques de data science et vous offrir un support continu.</li>
            </ul>
        ),
    },
];


const Services = () => {
    return (
        <>
            <span id="about"></span>
            <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
                <div className="container">
                    {/* Header */}
                    <div className="pb-12 text-center space-y-3">
                        <h1
                            data-aos="fade-up"
                            className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
                        >
                            Consultation
                        </h1>
                        <p
                            data-aos="fade-up"
                            className="text-gray-600 dark:text-gray-400 text-sm"
                        >
                            Nos formations continues couvrent des domaines tels que Data Science, IA, Blockchain Technology, Cybersecurity, Audit Informatique, et Réseaux Informatiques
                        </p>
                    </div>

                    {/* Services cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center">
                        {servicesData.map((service) => (
                            <div
                                key={service.name}
                                data-aos="fade-up"
                                data-aos-delay={service.aosDelay}
                                className="card space-y-3 sm:space-y-4 p-4 max-w-md text-center"
                            >
                                <div className="flex justify-center">{service.icon}</div>
                                <h1 className="text-lg font-semibold text-violet-950 dark:text-primary">{service.name}</h1>
                                <p className="text-gray-600 dark:text-gray-400 font-bold">
                                    {service.description}
                                </p>
                                <div>
                                    {/* List with updated colors */}
                                    {service.list && (
                                        <ul className="list-disc ml-6 text-violet-950 dark:text-primary">
                                            {service.list.props.children.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <div className="flex justify-center">
                                    <a href="https://www.e-university.site/" target="_blank" rel="noopener noreferrer">
                                        <button className="primary-btn font-bold py-2 ">S'inscrire</button>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
export default Services;