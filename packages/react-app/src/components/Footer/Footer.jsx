import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "../../assets/website/Vector.svg";
import {Link} from "react-router-dom";

const FooterLinks = [
  {
    title: "A Propos",
    link: "/#about",
  },
  {
    title: "Fonctionnalités",
    link: "/#features",
  },
  {
    title: "Travaux",
    link: "/#works",
  },
  {
    title: "Carrière",
    link: "/#career",
  },
];
const HelpLinks = [
  {
    title: "Support Client",
    link: "/#support",
  },
  {
    title: "Détails de Livraison",
    link: "/#delivery-details",
  },
  {
    title: "Conditions Générales",
    link: "/#terms",
  },
  {
    title: "Politique de Confidentialité",
    link: "/#policy",
  },
];
const ResourcesLinks = [
  {
    title: "Ebooks Gratuits",
    link: "/#ebooks",
  },
  {
    title: "Comment Bloguer",
    link: "/#blogs",
  },
  {
    title: "Abonnez-vous à TCJ",
    link: "https://www.youtube.com/channel/UC1H-a1MKEFXRiFlGNLcy7gQ?sub_confirmation=1",
  },
];
const Footer = () => {
  return (
      <div className="bg-dark text-white">
        <section className="container py-10">
          <div className=" grid md:grid-cols-3 py-5">
            {/* Détails de l'entreprise */}
            <div className=" py-8 px-4 ">
              <Link to="/" className="flex items-center gap-3">
                <img src={Logo} alt="" className="w-5" />
                <span className="text-2xl sm:text-3xl font-semibold">YAVE Technologies Group </span>
              </Link>
              <p className="text-sm">
                YTG
                Votre partenaire pour naviguer dans le paysage en constante évolution des technologies avancées et de la formation professionnelle. De la conceptualisation à l'exécution, nous élaborons des solutions sur mesure qui génèrent des
                résultats et élèvent vos compétences et votre entreprise vers de nouveaux sommets.
              </p>
              <br />
              {/* Réseaux sociaux */}
              <div className="flex items-center gap-4 mt-6">
                <a href="#">
                  <FaInstagram className="text-2xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaFacebook className="text-2xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-2xl hover:text-primary duration-300" />
                </a>
              </div>
            </div>
            {/* Liens */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
              <div className="">
                <div className="py-8 px-4 ">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    Entreprise
                  </h1>
                  <ul className={`flex flex-col gap-3`}>
                    {FooterLinks.map((link) => (
                        <li
                            key={link.title}
                            className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                        >
                          <span>{link.title}</span>
                        </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="py-8 px-4 ">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    Aide
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {HelpLinks.map((link) => (
                        <li
                            key={link.title}
                            className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                        >
                          <span>{link.title}</span>
                        </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="py-8 px-4 ">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    Ressources
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {ResourcesLinks.map((link) => (
                        <li
                            key={link.title}
                            className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                        >
                          <span>{link.title}</span>
                        </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Footer;
