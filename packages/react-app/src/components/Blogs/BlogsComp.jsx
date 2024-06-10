import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/blog/blog1.png";
import Img2 from "../../assets/blog/blog2.png";
import Img3 from "../../assets/blog/blog3.png";
import Img4 from "../../assets/blog/blog4.png";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Consultation",
    description:
        "Nos formations continues couvrent des domaines tels que Data Science, IA, Blockchain Technology, Cybersecurity, Audit Informatique, et Réseaux Informatiques.",
    link: "/consultation"
  },
  {
    id: 2,
    image: Img2,
    title: "Formation",
    description:
        "Nous proposons des formations personnalisées adaptées aux besoins spécifiques des entreprises et des professionnels.",
    link: "/services"
  },
  {
    id: 3,
    image: Img3,
    title: "Tutoriat",
    description:
        "Nous offrons un soutien personnalisé pour les étudiants en licence et master en informatique avec des cours et des travaux pratiques.",
    link: "/tutorial"
  },
  {
    id: 4,
    image: Img4,
    title: "Cryptomonnaie",
    description:
        "Nous fournissons des services de consultation en IA, Blockchain, Sécurité et Audit Informatique, Base de Données, et Réseaux Informatiques.",
    link: "/cryptomonnaie"
  },
];

const BlogsComp = () => {
  return (
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
        <section data-aos="fade-up" className="container">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold text-violet-950">
            Découvrez nos services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BlogsData.map((item) => (
                <Link to={item.link} key={item.id}>
                  <BlogCard {...item} />
                </Link>
            ))}
          </div>
        </section>
      </div>
  );
};

export default BlogsComp;
