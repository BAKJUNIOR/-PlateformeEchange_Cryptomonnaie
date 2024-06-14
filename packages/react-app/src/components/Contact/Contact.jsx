import React from "react";

const Contact = () => {
    return (
        <div className="bg-gray-100 dark:bg-black dark:text-white py-12" style={{ paddingBottom: 250 }}>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Coordonnées */}
                    <div className="space-y-6 font-semibold text-violet-950 dark:text-primary" >
                        <h2 className="text-3xl font-semibold text-violet-950 dark:text-primary">
                            Contactez-nous
                        </h2>
                        <p >
                            Pour toute demande d'information ou assistance, n'hésitez pas à
                            nous contacter aux coordonnées suivantes :
                        </p>
                        <div className="flex flex-col space-y-2">
                            <div>
                                <span className="font-semibold">Adresse:</span> 123 Rue de YTG,
                                75000 Paris, France
                            </div>
                            <div>
                                <span className="font-semibold">Téléphone:</span> +33 1 23 45
                                67 89
                            </div>
                            <div>
                                <span className="font-semibold">Email:</span>{" "}
                                contact@ytg.com
                            </div>
                        </div>
                    </div>
                    {/* Localisation */}
                    <div>

                        {/* Localisation */}
                        <div>
                            <h2 className="text-3xl font-semibold text-violet-950 dark:text-primary">
                                Localisation
                            </h2>
                            <div className="h-80 rounded-lg shadow-md overflow-hidden">
                                <iframe
                                    title="Localisation de YTG"
                                    className="w-full h-full"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104097.89903969295!2d2.2770206767778327!3d48.858837688201774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sEiffel%20Tower%2C%20Champ%20de%20Mars%2C%205%20Avenue%20Anatole%20France%2C%2075007%20Paris%2C%20France!5e0!3m2!1sen!2sus!4v1622963781397!5m2!1sen!2sus"
                                    frameBorder="0"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    aria-hidden="false"
                                    tabIndex="0"
                                ></iframe>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
