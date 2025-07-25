import React from "react";
import CardService from "./cardService";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Importação do autoplay
import "swiper/css";

import tokyo from "../assets/imagens/tokyo.png";
import paris from "../assets/imagens/paris.png";
import riodejaneiro from "../assets/imagens/riodejaneiro.png";
import timesquare from "../assets/imagens/timesquare.png";
import dago from "../assets/imagens/templo.png";
import japaneseshop from "../assets/imagens/japaneseshop.png";

const tourist_places = [
  { Image: tokyo, title: "Tokyo - Japão", description: "Capital bunita" },
  { Image: paris, title: "Paris - França", description: "Local bunito" },
  { Image: riodejaneiro, title: "Rio de Janeiro - Brasil", description: "Local bunito" },
  { Image: timesquare, title: "Time Square - EUA", description: "Local bunito" },
  { Image: dago, title: "Templo Dagoji - Japão", description: "Templo bunito" },
  { Image: japaneseshop, title: "Loja japonesa - Japão", description: "Loja bunita" }
];

const Carousel = () => {
  return (
    <>
      <div className="relative z-10 w-full">
        <h1 className="text-3-1 font-extrabold text-center mt-20 mb-12 text-[#333] drop-shadow-lg text-[35px]">
          Pontos turísticos mais visitados
        </h1>

        <div>
          <Swiper
            modules={[Autoplay]} // ativa o módulo
            autoplay={{
              delay: 3000, // 3 segundos entre os slides
              disableOnInteraction: false, // continua mesmo se o usuário interagir
            }}
            slidesPerView={tourist_places.length > 3 ? 3 : "auto"}
            spaceBetween={20}
            loop={false}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {tourist_places.map((place, index) => (
              <SwiperSlide key={index}>
                <CardService
                  img={place.Image}
                  alt={place.description}
                  titulo={place.title}
                  descricao={place.description}
                  link="#"
                  botao="Saiba Mais"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Carousel;
