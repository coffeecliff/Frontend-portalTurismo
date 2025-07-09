import React from "react";



const Hero = (props) => {
    return(
        <> 
            <div
                className="relative h-[500px] bg-center flex items-center justify-center bg-cover text-white" 
                style={{backgroundImage: `url(${props.background})`}}
            > 
                <div />

                <div className="relative z-10 text-center p-4">
                    <h1 className="text-shadow-black text-shadow-md underline decoration-[#cf71cf] text-4xl md:text-5xl font-extrabold mb-4 ">
                        {props.titulo}
                    </h1>
                    <p className="text-lg md:text-x2 mb-6 font-bold max-w-3xl mx-auto drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                            {props.paragrafo}
                        </p>
                        <a
                        href={props.rota}
                        className="bg-[#e9dcdc] hover:bg-[#4ceeee] text-black px-6 py-3 rounded-lg transition duration-300"
                    >{props.botao}</a>
                </div>

            </div>
        </>
    )
}

export default Hero;