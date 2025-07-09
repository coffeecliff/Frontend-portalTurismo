import React from "react";

const CardService = (props) => {
    return (
        <>
            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white border-gray-200 rounded-2xl shadow-md overflow-hidden m-2 flex flex-col ml-auto mr-auto cursor-pointer mb-30">

                <img
                    src={props.img}
                    alt={props.titulo}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />

                <div className="p-4 flex flex-col flex-grow">
                    <h1 className="text-lg sm:text-x1 font-semibold text-gray-950">{props.titulo}</h1>
                    <p className="text-gray-800 mt-2 text-sm sm:text-base">{props.descricao}</p>
                    <a
                        href={props.link} className="mt-4 inline-block bg-[#60c7b6] text-white px-4 py-3 rounded-2xl text-center hover:bg-[#62b1a6] transition duration-300 font-bold">
                        {props.botao}
                    </a>
                </div>

            </div>
        </>
    )
}

export default CardService;