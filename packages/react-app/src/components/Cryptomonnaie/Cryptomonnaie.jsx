import React, { useState, useEffect } from "react";
import { FaWallet, FaPaperPlane, FaExchangeAlt, FaCoins } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cryptomonnaie = () => {
    const [selectedModules, setSelectedModules] = useState([]);
    const [showSubMenu, setShowSubMenu] = useState(false);
    const navigate = useNavigate();

    const toggleSubMenu = () => {
        setShowSubMenu(!showSubMenu);
    };

    useEffect(() => {
        setSelectedModules([cryptomonnaieData[0], cryptomonnaieData[1]]);
    }, []);

    const handleMenuClick = (item) => {
        if (item.name === "Créer un portefeuille Metamask") {
            navigate('/crypto');
        } else {
            setSelectedModules([item]);
        }
    };

    const cryptomonnaieData = [
        {
            name: "Présentation de la Cryptomonnaie",
            icon: <FaCoins className="text-4xl text-primary" />,
            description: (
                <div>
                    <h2 className="text-lg font-semibold">Cryptomonnaie</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        La cryptomonnaie est une forme de monnaie numérique basée sur la technologie blockchain. Elle permet des transactions sécurisées, décentralisées et sans intermédiaires, offrant une nouvelle dimension aux transactions financières modernes.
                    </p>
                </div>
            ),
            list: (
                <div>
                    <h3 className="text-lg font-semibold">Caractéristiques principales :</h3>
                    <ul className="list-disc ml-6">
                        <li>
                            <strong>Transactions sécurisées:</strong> La cryptomonnaie utilise un système de cryptographie avancé pour garantir la sécurité des transactions, offrant une protection contre la fraude et les piratages.
                        </li>
                        <li>
                            <strong>Décentralisation:</strong> Contrairement aux monnaies traditionnelles contrôlées par les gouvernements et les institutions financières, la cryptomonnaie est décentralisée, ce qui signifie qu'elle est gérée par un réseau mondial de participants plutôt que par une seule entité.
                        </li>
                        <li>
                            <strong>Transactions rapides et peu coûteuses:</strong> Les transactions de cryptomonnaie peuvent être effectuées rapidement et à moindre coût, ce qui les rend idéales pour les paiements transfrontaliers et les transactions internationales.
                        </li>
                    </ul>
                </div>
            ),
        },

        {
            name: "Créer un portefeuille Metamask",
            icon: <FaWallet className="text-4xl text-primary" />,
            description:
                "Pour commencer à utiliser des cryptomonnaies, vous devez d'abord créer un portefeuille Metamask. Suivez les étapes ci-dessous :",
            list: (
                <ul className="list-disc ml-6">
                    <li>Téléchargez et installez l'extension Metamask sur votre navigateur.</li>
                    <li>Créez un nouveau compte et sauvegardez votre phrase de récupération en toute sécurité.</li>
                    <li>Ajoutez des fonds à votre portefeuille en achetant des cryptomonnaies ou en transférant depuis un autre portefeuille.</li>
                </ul>
            ),
            link: "https://metamask.io/",
            link1: "/Crypto",
            linkText1: "Visitez le site officiel de Metamask pour plus de détails.",
            linkText2: "Allez créer un portefeuille Metamask .",

            aosDelay: "300",
        },
        {
            name: "Envoyer de la cryptomonnaie",
            icon: <FaPaperPlane className="text-4xl text-primary" />,
            description: "Utilisez le formulaire ci-dessous pour envoyer des cryptomonnaies.",
            form: (
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-600 dark:text-gray-400">Adresse du destinataire</label>
                        <input type="text" className="w-full p-2 border rounded" placeholder="Adresse du destinataire" />
                    </div>
                    <div>
                        <label className="block text-gray-600 dark:text-gray-400">Montant</label>
                        <input type="number" className="w-full p-2 border rounded" placeholder="Montant" />
                    </div>
                    <div>
                        <label className="block text-gray-600 dark:text-gray-400">Type de cryptomonnaie</label>
                        <select className="w-full p-2 border rounded">
                            <option>Bitcoin</option>
                            <option>Ethereum</option>
                            <option>Ripple</option>
                        </select>
                    </div>
                    <button type="submit" className="primary-btn">Envoyer</button>
                </form>
            ),
            aosDelay: "500",
        },
        {
            name: "Convertir des cryptomonnaies",
            icon: <FaExchangeAlt className="text-4xl text-primary" />,
            description: "Utilisez le formulaire ci-dessous pour convertir des cryptomonnaies.",
            form: (
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-600 dark:text-gray-400">De</label>
                        <select className="w-full p-2 border rounded">
                            <option>Bitcoin</option>
                            <option>Ethereum</option>
                            <option>Ripple</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-600 dark:text-gray-400">À</label>
                        <select className="w-full p-2 border rounded">
                            <option>Ethereum</option>
                            <option>Bitcoin</option>
                            <option>Ripple</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-600 dark:text-gray-400">Montant</label>
                        <input type="number" className="w-full p-2 border rounded" placeholder="Montant" />
                    </div>
                    <button type="submit" className="primary-btn">Convertir</button>
                </form>
            ),
            aosDelay: "700",
        },
    ];

    return (
        <div className="container mx-auto py-12">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-semibold text-center text-violet-950 dark:text-primary mb-8">
                    Cryptomonnaie
                </h1>
                <div className="flex items-center">
                    <button onClick={toggleSubMenu} className="text-primary focus:outline-none">
                        {!showSubMenu ? "Afficher le sous-menu" : "Masquer le sous-menu"}
                    </button>
                </div>
            </div>
            {showSubMenu && (
                <div className="flex gap-4">
                    {cryptomonnaieData.map((item) => (
                        <button
                            key={item.name}
                            className="text-primary bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 rounded-md px-4 py-2"
                            onClick={() => handleMenuClick(item)}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center">
                {selectedModules.map((selectedModule) => (
                    <div
                        key={selectedModule.name}
                        data-aos="fade-up"
                        data-aos-delay={selectedModule.aosDelay}
                        className={`card space-y-3 sm:space-y-4 p-4 max-w-md text-center ${selectedModule.name === "Convertir des cryptomonnaies" || selectedModule.name === "Envoyer de la cryptomonnaie" ? "mx-auto" : ""}`}
                    >
                        <div className="flex justify-center">{selectedModule.icon}</div>
                        <h1 className="text-lg font-semibold">{selectedModule.name}</h1>
                        <p className="text-gray-600 dark:text-gray-400 font-bold">{selectedModule.description}</p>
                        {selectedModule.list && <div className="text-gray-600 dark:text-gray-400">{selectedModule.list}</div>}
                        {selectedModule.link && (
                            <p className="mt-4">
                                <a href={selectedModule.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    {selectedModule.linkText1}

                                </a> <br/>
                                <a href={selectedModule.link1}  rel="noopener noreferrer" className="text-blue-500 hover:underline">

                                    {selectedModule.linkText2}
                                </a>
                            </p>
                        )}
                        {selectedModule.form && <div>{selectedModule.form}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cryptomonnaie;
