import React, { useEffect, useState } from "react";

const AboutCard = () => {
        const [visible, setVisible] = useState(false);
      
        useEffect(() => {
          setVisible(true);
        }, []);
    return(
        <>
      <div
        className={`bg-[#e2e2e2c7] m-8 p-29 rounded-3xl text-white transform transition-all duration-700 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <h1 className="text-4xl text-[#333] font-extrabold mb-10 text-center">
          Minha história
        </h1>
        <div>
          <p className="text-[#333] text-center mb-100 text-2xl font-bold leading-10.5">
            Esta é uma página feita para um projeto de curso, onde o objetivo é criar um portal de turismo fictício. 
            A ideia é apresentar informações sobre pontos turísticos, serviços e atrações de forma interativa e visualmente atraente inspirado na cantora virtual Hatsune Miku. 
            O projeto utiliza tecnologias modernas como React para a construção da interface, proporcionando uma experiência dinâmica e responsiva aos usuários.
          </p>
        </div>
      </div>
    </>
    )
}

export default AboutCard;