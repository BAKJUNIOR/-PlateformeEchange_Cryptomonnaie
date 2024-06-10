import React from "react";
import yellowCar from "../../assets/website/team.jpg";
import {Link} from "react-router-dom";



const Hero = () => {
  return (
      <div className="dark:bg-gray-950 dark:text-white duration-300 ">
        <div className="container min-h-[620px] flex mt-10 sm:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
            {/* Image section */}
            <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
              <div className="w-full sm:max-w-[280px] md:max-w-[600px] rounded-xl overflow-hidden">
                <img
                    src={yellowCar}
                    alt=""
                    className="w-full h-auto"
                />
              </div>
              <div
                  data-aos="slide-right"
                  className="absolute -bottom-5 -right-8 px-4 py-2 rounded-xl bg-white dark:bg-gray-900 dark:text-white shadow-md"
              >
                <p className="text-gray-500 text-sm ">⭐Projets</p>
                <h1 className="font-bold "style={{color:"black"}}>Plus de
                  600 <span className="font-normal">Pratique</span>
                </h1>
              </div>
            </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 ">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-semibold"
              style={{ lineHeight: 1.2 }}
            >
              Transformez votre potentiel avec{" "}
              <span className="text-primary">YAVE Technologies Group (YTG)</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              Votre partenaire pour naviguer dans le paysage en constante évolution des technologies avancées et de la formation professionnelle.
              De la conceptualisation à l'exécution, nous élaborons des solutions sur mesure qui génèrent des résultats et élèvent vos compétences et votre entreprise vers de nouveaux sommets.
            </p> <br/>
            <Link to="/services" data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-offset="0"
                  className="primary-btn" >

              Découvrir nos formations
            </Link>



          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
