import React from "react";
import templo from "../assets/imagens/templo.png"; // substitua pela imagem que quiser

const HomeHero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-20 gap-8">
      {/* Imagem à esquerda */}
      <div className="w-full md:w-1/2">
        <img
          src={templo}
          alt="Exemplo"
          className="rounded-lg shadow-md w-full h-auto object-cover"
        />
      </div>

      {/* Texto à direita */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Japão</h2>
        <p className="text-gray-600 leading-relaxed text-[25px] mb-40">
        O Japão é um país fascinante onde a tradição milenar e a tecnologia de ponta convivem em perfeita harmonia.
        Das movimentadas ruas de Tóquio aos tranquilos templos de Kyoto, cada canto do arquipélago revela uma nova experiência.
        Conhecido por sua culinária única, paisagens deslumbrantes e um povo acolhedor e respeitoso, o Japão encanta quem busca cultura, inovação e beleza natural.
        Seja na temporada das cerejeiras ou nas neves de Hokkaido, o Japão é sempre uma boa ideia.
        </p>
      </div>
    </div>
  );
};

export default HomeHero;
