import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";

const servicesData = [
  {
    name: "Data Science",
    icon: <FaChalkboardTeacher className="text-4xl text-primary" />,
    link: "https://www.e-university.site",
    description:
        "Explorez les principes fondamentaux et les techniques avancées de la science des données, y compris l'analyse statistique, l'apprentissage automatique et l'exploration de données.",
    aosDelay: "0",
  },
  {
    name: "Intelligence Artificielle (IA)",
    icon: <FaChalkboardTeacher className="text-4xl text-primary" />,
    link: "https://www.e-university.site",
    description:
        "Découvrez les concepts clés de l'intelligence artificielle, y compris les réseaux neuronaux, l'apprentissage en profondeur et le traitement du langage naturel.",
    aosDelay: "300",
  },
  {
    name: "Technologie Blockchain",
    icon: <FaChalkboardTeacher className="text-4xl text-primary" />,
    link: "https://www.e-university.site",
    description:
        "Plongez dans le monde de la technologie blockchain, explorez ses applications potentielles et apprenez à mettre en œuvre des contrats intelligents.",
    aosDelay: "500",
  },
  {
    name: "Cybersécurité",
    icon: <FaChalkboardTeacher className="text-4xl text-primary" />,
    link: "https://www.e-university.site",
    description:
        "Apprenez les meilleures pratiques en matière de cybersécurité, de la gestion des menaces aux techniques d'atténuation des risques.",
    aosDelay: "700",
  },
  {
    name: "Audit Informatique",
    icon: <FaChalkboardTeacher className="text-4xl text-primary" />,
    link: "https://www.e-university.site",
    description:
        "Maîtrisez les processus et les techniques d'audit informatique pour évaluer l'efficacité, la sécurité et la conformité des systèmes informatiques.",
    aosDelay: "900",
  },
  {
    name: "Génie Logiciel",
    icon: <FaChalkboardTeacher className="text-4xl text-primary" />,
    link: "https://www.e-university.site",
    description:
        "Explorez les méthodes de développement logiciel, y compris les pratiques agiles, la conception orientée objet et les tests automatisés.",
    aosDelay: "1100",
  },
  {
    name: "Réseaux Informatiques",
    icon: <FaChalkboardTeacher className="text-4xl text-primary" />,
    link: "https://www.e-university.site",
    description:
        "Découvrez les concepts fondamentaux des réseaux informatiques, y compris la topologie, les protocoles de communication et la sécurité réseau.",
    aosDelay: "1300",
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
                Découvrez nos formations
              </h1>
              <p
                  data-aos="fade-up"
                  className="text-gray-600 dark:text-gray-400 text-sm"
              >
                Explorez les différentes formations que nous proposons pour accompagner votre développement professionnel et académique.
              </p>
            </div>

            {/* Services cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {servicesData.map((service) => (
                  <div
                      key={service.name}
                      data-aos="fade-up"
                      data-aos-delay={service.aosDelay}
                      className="card space-y-3 sm:space-y-4 p-4"
                  >
                    <div>{service.icon}</div>
                    {/* Apply color to name */}
                    <h1 className="text-lg font-semibold text-violet-950 dark:text-primary">{service.name}</h1>
                    <p className="text-gray-600 dark:text-gray-400">
                      {service.description}
                    </p>
                    <a href={service.link} className="text-primary underline">En savoir plus</a>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </>
  );
};

export default Services;