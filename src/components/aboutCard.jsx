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
            Entrei no curso, vi uma porta, vi adolescentes, uma semana depois derrubaram o elevador. Gostei.
            Mas estou gostando bastante do curso, para o começo, estou me dando muito bem, mas não seria o mesmo sem os amigos que fiz aqui.
          </p>
        </div>
      </div>
    </>
    )
}

export default AboutCard;